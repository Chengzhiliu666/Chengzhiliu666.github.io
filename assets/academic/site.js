(() => {
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* Theme */
  const themeBtn = document.getElementById('theme-toggle');
  const syncThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  };
  syncThemeLabel();
  themeBtn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store.set('cl-theme', root.dataset.theme);
    syncThemeLabel();
    field.recolor();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (store.get('cl-theme')) return;
    root.dataset.theme = e.matches ? 'dark' : 'light';
    syncThemeLabel();
    field.recolor();
  });

  /* Orbital braid: layered trajectories and travelling light packets. */
  const field = (() => {
    const canvas = document.getElementById('field');
    const hero = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return { recolor() {} };
    let w = 0, h = 0, raf = 0, visible = true, phase = 0, last = 0;
    let rgb = getComputedStyle(root).getPropertyValue('--field').trim();
    const pointer = { x: 0, y: 0 };
    const point = (u, lane) => {
      const a = u * Math.PI * 2;
      const twist = phase * .15 + lane * .2;
      return {
        x: w * .76 + Math.cos(a) * w * (.27 + lane * .018) + Math.sin(a * 3 + twist) * 18 + pointer.x * 12,
        y: h * .48 + Math.sin(a) * h * .32 + Math.sin(a * 2 + twist + lane * .35) * h * .13 + pointer.y * 8
      };
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const dark = root.dataset.theme === 'dark';
      const glow = ctx.createRadialGradient(w * .82, h * .42, 0, w * .82, h * .42, w * .46);
      glow.addColorStop(0, `rgba(${rgb},${dark ? .16 : .09})`);
      glow.addColorStop(.55, 'rgba(35,180,225,.035)');
      glow.addColorStop(1, `rgba(${rgb},0)`);
      ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h);
      for (let lane = 0; lane < 7; lane++) {
        ctx.beginPath();
        for (let i = 0; i <= 180; i++) {
          const p = point(i / 180, lane);
          i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(${rgb},${dark ? .19 : .14})`;
        ctx.lineWidth = lane % 3 === 0 ? 1.1 : .6;
        ctx.stroke();
        // A short luminous tail moves around each trajectory.
        for (let k = 0; k < 16; k++) {
          const u = phase * .035 + lane / 7 - k * .003;
          const p = point(u, lane), prev = point(u - .004, lane);
          ctx.beginPath(); ctx.moveTo(prev.x, prev.y); ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = lane % 2 ? `rgba(25,160,210,${.6 * (1 - k / 16)})` : `rgba(${rgb},${.65 * (1 - k / 16)})`;
          ctx.lineWidth = 2; ctx.stroke();
        }
        const p = point(phase * .035 + lane / 7, lane);
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},.85)`; ctx.shadowColor = `rgb(${rgb})`; ctx.shadowBlur = 10;
        ctx.fill(); ctx.shadowBlur = 0;
      }
      // The left edge stays quiet behind the biography.
      ctx.globalCompositeOperation = 'destination-out';
      const fade = ctx.createLinearGradient(0, 0, w, 0);
      fade.addColorStop(0, 'rgba(0,0,0,.96)');
      fade.addColorStop(.48, 'rgba(0,0,0,.85)');
      fade.addColorStop(.75, 'rgba(0,0,0,0)');
      ctx.fillStyle = fade; ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
    };
    const step = now => {
      phase += last ? Math.min((now - last) / 1000, .05) : 0;
      last = now; draw(); raf = requestAnimationFrame(step);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; last = 0; };
    const start = () => { if (!raf && !reduceMotion && visible && !document.hidden) raf = requestAnimationFrame(step); };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = hero.clientWidth; h = hero.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    };
    const recolor = () => { rgb = getComputedStyle(root).getPropertyValue('--field').trim(); draw(); };
    new ResizeObserver(resize).observe(hero);
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      pointer.x = (e.clientX - r.left) / w - .5;
      pointer.y = (e.clientY - r.top) / h - .5;
    });
    hero.addEventListener('pointerleave', () => { pointer.x = pointer.y = 0; });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }).observe(hero);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    resize(); start();
    return { recolor };
  })();

  /* The photo stack opens into a native, keyboard-accessible album. */
  const album = document.getElementById('photo-gallery');
  const portrait = document.querySelector('.portrait-trigger');
  portrait.addEventListener('click', () => {
    album.showModal();
    root.classList.add('album-open');
  });
  album.querySelector('.gallery-close').addEventListener('click', () => album.close());
  album.addEventListener('click', e => {
    if (e.target !== album) return;
    const r = album.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) album.close();
  });
  album.addEventListener('close', () => {
    root.classList.remove('album-open');
    portrait.focus({ preventScroll: true });
  });

  /* An original academic explorer advances along the page margin. */
  const explorer = document.getElementById('scroll-explorer');
  let walkTimer;
  const moveExplorer = progress => {
    explorer.style.setProperty('--explorer-y', `${88 + progress * Math.max(0, innerHeight - 270)}px`);
  };

  /* Header state, progress bar, back-to-top */
  const header = document.getElementById('site-header');
  const bar = document.getElementById('progress-bar');
  const toTop = document.getElementById('to-top');
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle('scrolled', y > 8);
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    toTop.classList.toggle('show', y > 900);
    moveExplorer(max > 0 ? Math.max(0, Math.min(1, y / max)) : 0);
  };
  let scrollFrame = 0;
  addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(() => { onScroll(); scrollFrame = 0; });
    explorer.classList.add('walking');
    clearTimeout(walkTimer);
    walkTimer = setTimeout(() => explorer.classList.remove('walking'), 180);
  }, { passive: true });
  addEventListener('resize', onScroll); onScroll();
  new ResizeObserver(onScroll).observe(document.body);
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  /* Active section in nav */
  const navLinks = [...document.querySelectorAll('.nav a')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

  /* Reveal on scroll */
  const revealables = document.querySelectorAll('.section, .theme, .pub, .exp li, .contact');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(el => { if (!el.classList.contains('section')) el.classList.add('reveal'); io.observe(el); });
  } else {
    revealables.forEach(el => el.classList.add('in'));
  }

  /* Publication filter + search */
  const pubs = [...document.querySelectorAll('.pub')];
  const groups = [...document.querySelectorAll('[data-group-label]')];
  const buttons = [...document.querySelectorAll('.filters button')];
  const search = document.getElementById('paper-search');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  pubs.forEach(p => {
    p.dataset.text = p.textContent.toLowerCase().replace(/\s+/g, ' ');
    const h = p.querySelector('h4');
    p.dataset.title = h.innerHTML;
  });
  const toggle = document.getElementById('papers-toggle');
  const previewCount = 3;
  let expanded = false;
  let filter = 'all';
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    const browsing = filter === 'all' && !q;
    let shown = 0;
    pubs.forEach((p, index) => {
      const ok = (filter === 'all' || p.dataset.category === filter) && (!q || p.dataset.text.includes(q));
      const visible = ok && (!browsing || expanded || index < previewCount);
      p.hidden = !visible;
      if (visible) { shown++; p.classList.add('in'); }
      const h = p.querySelector('h4');
      h.innerHTML = p.dataset.title;
      if (ok && q.length > 1) {
        const target = h.querySelector('a') || h;
        target.innerHTML = target.textContent.replace(new RegExp(`(${esc(q)})`, 'ig'), '<mark>$1</mark>');
      }
    });
    groups.forEach(g => { g.hidden = !pubs.some(p => !p.hidden && p.dataset.authorship === g.dataset.groupLabel); });
    empty.hidden = shown > 0;
    count.textContent = `Showing ${shown} of ${pubs.length} papers`;
    toggle.hidden = !browsing || pubs.length <= previewCount;
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.innerHTML = expanded ? 'Show fewer papers <span aria-hidden="true">↑</span>' : `Show all ${pubs.length} papers <span aria-hidden="true">↓</span>`;
  };
  buttons.forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    buttons.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    apply();
  }));
  search.addEventListener('input', apply);
  toggle.addEventListener('click', () => {
    expanded = !expanded;
    apply();
    if (!expanded) toggle.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  apply();

})();
