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

  /* Motion toggle */
  const motionBtn = document.getElementById('motion-toggle');
  const syncMotion = () => {
    const paused = root.dataset.motion === 'paused';
    motionBtn.setAttribute('aria-pressed', String(paused));
    const label = paused ? 'Resume background motion' : 'Pause background motion';
    motionBtn.setAttribute('aria-label', label);
    motionBtn.title = label;
  };
  syncMotion();
  motionBtn.addEventListener('click', () => {
    if (root.dataset.motion === 'paused') { delete root.dataset.motion; store.set('cl-motion', 'on'); }
    else { root.dataset.motion = 'paused'; store.set('cl-motion', 'paused'); }
    syncMotion();
    field.toggle();
  });
  if (reduceMotion) motionBtn.hidden = true;

  /* Latent field: particles drifting along a slowly changing flow */
  const field = (() => {
    const canvas = document.getElementById('field');
    const hero = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1, parts = [], raf = 0, t = 0, visible = true, rgb = '29,91,214';
    const pointer = { x: -9999, y: -9999 };

    const recolor = () => {
      rgb = getComputedStyle(root).getPropertyValue('--field').trim() || rgb;
      ctx.clearRect(0, 0, w, h);
      if (!running()) drawStatic();
    };
    const running = () => !reduceMotion && root.dataset.motion !== 'paused';
    const spawn = p => {
      p.x = Math.random() * w; p.y = Math.random() * h;
      p.life = 0; p.max = 140 + Math.random() * 220;
      p.a = .25 + Math.random() * .55;
      return p;
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = hero.clientWidth; h = hero.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(520, (w * h) / 2600));
      parts = Array.from({ length: n }, () => spawn({}));
      if (!running()) drawStatic();
    };
    const angle = (x, y) => {
      const s = .0021;
      return Math.sin(x * s + t * .35) * 1.4 + Math.cos(y * s * 1.3 - t * .22) * 1.1 + Math.sin((x + y) * s * .6 + t * .15);
    };
    const step = () => {
      t += .006;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,.06)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = 1.1;
      for (const p of parts) {
        let a = angle(p.x, p.y);
        const dx = p.x - pointer.x, dy = p.y - pointer.y, d2 = dx * dx + dy * dy;
        if (d2 < 22000) a += (1 - d2 / 22000) * 1.6;
        const nx = p.x + Math.cos(a) * 1.15 + .35, ny = p.y + Math.sin(a) * 1.15;
        const fade = Math.min(1, p.life / 30, (p.max - p.life) / 30);
        ctx.strokeStyle = `rgba(${rgb},${(p.a * fade * .55).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
        p.x = nx; p.y = ny; p.life++;
        if (p.life > p.max || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) spawn(p);
      }
      raf = requestAnimationFrame(step);
    };
    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      for (let i = 0; i < 70; i++) {
        let x = Math.random() * w, y = Math.random() * h;
        ctx.strokeStyle = `rgba(${rgb},.16)`;
        ctx.beginPath(); ctx.moveTo(x, y);
        for (let k = 0; k < 60; k++) { const a = angle(x, y); x += Math.cos(a) * 3 + 1; y += Math.sin(a) * 3; ctx.lineTo(x, y); }
        ctx.stroke();
      }
    };
    const start = () => { if (!raf && running() && visible && !document.hidden) raf = requestAnimationFrame(step); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    const toggle = () => { if (running()) { ctx.clearRect(0, 0, w, h); start(); } else { stop(); drawStatic(); } };

    rgb = getComputedStyle(root).getPropertyValue('--field').trim() || rgb;
    resize();
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { stop(); resize(); start(); }, 150); });
    hero.addEventListener('pointermove', e => { const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; });
    hero.addEventListener('pointerleave', () => { pointer.x = pointer.y = -9999; });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }).observe(hero);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    start();
    return { recolor, toggle };
  })();

  /* Header state, progress bar, back-to-top */
  const header = document.getElementById('site-header');
  const bar = document.getElementById('progress-bar');
  const toTop = document.getElementById('to-top');
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle('scrolled', y > 8);
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    toTop.classList.toggle('show', y > 900);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
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
  const years = [...document.querySelectorAll('.year')];
  const buttons = [...document.querySelectorAll('.filters button')];
  const search = document.getElementById('paper-search');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  pubs.forEach(p => {
    p.dataset.text = p.textContent.toLowerCase().replace(/\s+/g, ' ');
    const h = p.querySelector('h4');
    p.dataset.title = h.innerHTML;
  });
  let filter = 'all';
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    pubs.forEach(p => {
      const ok = (filter === 'all' || p.dataset.category === filter) && (!q || p.dataset.text.includes(q));
      p.hidden = !ok;
      if (ok) { shown++; p.classList.add('in'); }
      const h = p.querySelector('h4');
      h.innerHTML = p.dataset.title;
      if (ok && q.length > 1) {
        const target = h.querySelector('a') || h;
        target.innerHTML = target.textContent.replace(new RegExp(`(${esc(q)})`, 'ig'), '<mark>$1</mark>');
      }
    });
    years.forEach(y => { y.hidden = !pubs.some(p => !p.hidden && p.dataset.year === y.dataset.yearLabel); });
    empty.hidden = shown > 0;
    count.textContent = (filter === 'all' && !q) ? '' : `Showing ${shown} of ${pubs.length} papers`;
  };
  buttons.forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter;
    buttons.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    apply();
  }));
  search.addEventListener('input', apply);

})();
