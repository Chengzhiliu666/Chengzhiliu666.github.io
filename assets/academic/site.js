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

  /* Latent landscape: an original projected surface, not a particle preset. */
  const field = (() => {
    const canvas = document.getElementById('field');
    const ambient = document.getElementById('ambient-field');
    const hero = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const edge = ambient.getContext('2d');
    if (!ctx || !edge) return { recolor() {} };
    let w = 0, h = 0, aw = 0, ah = 0, raf = 0, visible = true, phase = 0, last = 0;
    let dark = root.dataset.theme === 'dark';
    let rgb = getComputedStyle(root).getPropertyValue('--field').trim();
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let pageShift = 0;
    const project = (u, v) => {
      const x = u * 1.08;
      const y = v * .66 + .22 * Math.sin(u * 2 + phase * .23);
      const z = .44 * Math.sin(u * 1.8 + v * 2.2 - phase * .35) + .22 * Math.cos(v * 3 + phase * .12);
      const yaw = .38 + pointer.x * .16 + Math.sin(phase * .075) * .18 + pageShift * .0003;
      const xx = x * Math.cos(yaw) + z * Math.sin(yaw);
      const zz = z * Math.cos(yaw) - x * Math.sin(yaw);
      const yy = y * .76 - zz * .65;
      const depth = 3.6 / (3.6 + zz * .45);
      const scale = Math.min(w * .30, h * .72);
      const tilt = -.30 + pointer.y * .09;
      return {
        x: w * .80 + (xx * Math.cos(tilt) - yy * Math.sin(tilt)) * scale * depth,
        y: h * .44 + (xx * Math.sin(tilt) + yy * Math.cos(tilt)) * scale * depth,
        z: zz
      };
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const halo = ctx.createRadialGradient(w * .83, h * .36, 0, w * .83, h * .36, w * .5);
      halo.addColorStop(0, dark ? 'rgba(31,133,200,.28)' : 'rgba(29,146,212,.14)');
      halo.addColorStop(.6, dark ? 'rgba(47,73,200,.10)' : 'rgba(77,112,216,.045)');
      halo.addColorStop(1, 'rgba(50,110,200,0)');
      ctx.fillStyle = halo; ctx.fillRect(0, 0, w, h);
      const rows = w < 640 ? 16 : 26, cols = w < 640 ? 48 : 72;
      const grid = Array.from({ length: rows + 1 }, (_, r) => Array.from({ length: cols + 1 }, (_, c) => project(-1.7 + 3.4 * c / cols, -1 + 2 * r / rows)));
      // Sparse translucent facets give the wire surface depth without a solid panel.
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 4) {
          const a = grid[r][c], b = grid[r][c + 4], d = grid[r + 2][c], e = grid[r + 2][c + 4];
          const wave = .5 + .5 * Math.sin(c * .16 - phase * .5 + r * .24);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(e.x, e.y); ctx.lineTo(d.x, d.y); ctx.closePath();
          ctx.fillStyle = `rgba(${r % 4 ? '25,170,192' : rgb},${(dark ? .038 : .023) + wave * (dark ? .05 : .035)})`;
          ctx.fill();
        }
      }
      grid.forEach((row, r) => {
        ctx.beginPath(); row.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
        const strong = r % 5 === 0;
        ctx.strokeStyle = `rgba(${r % 3 ? rgb : '24,157,190'},${strong ? (dark ? .5 : .34) : (dark ? .23 : .16)})`;
        ctx.lineWidth = strong ? 1.15 : .6; ctx.stroke();
      });
      for (let c = 0; c <= cols; c += 4) {
        ctx.beginPath(); grid.forEach((row, r) => r ? ctx.lineTo(row[c].x, row[c].y) : ctx.moveTo(row[c].x, row[c].y));
        ctx.strokeStyle = `rgba(${rgb},${dark ? .14 : .10})`; ctx.lineWidth = .55; ctx.stroke();
      }
      // Cyan and indigo signals follow the curved surface and refract at nodes.
      for (let lane = 0; lane < 5; lane++) {
        const v = -.8 + lane * .4;
        const travel = ((phase * .12 + lane * .21) % 1);
        for (let k = 0; k < 24; k++) {
          const u = -1.7 + 3.4 * (travel - k * .004);
          if (u < -1.7) continue;
          const a = project(u, v), b = project(u + .018, v);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${lane % 2 ? rgb : '15,171,196'},${(1 - k / 24) * .9})`;
          ctx.lineWidth = 2.2; ctx.stroke();
        }
        const p = project(-1.7 + travel * 3.4, v);
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = dark ? '#b7f6ff' : '#258fbd'; ctx.shadowColor = '#20b7e0'; ctx.shadowBlur = 12; ctx.fill(); ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${rgb},.36)`; ctx.lineWidth = .7; ctx.strokeRect(p.x - 5, p.y - 5, 10, 10);
      }
      // A quiet text column and a stronger visual field around the photo stack.
      ctx.globalCompositeOperation = 'destination-out';
      const fade = ctx.createLinearGradient(0, 0, w, 0);
      fade.addColorStop(0, 'rgba(0,0,0,.98)'); fade.addColorStop(.42, 'rgba(0,0,0,.92)');
      fade.addColorStop(.64, 'rgba(0,0,0,.65)'); fade.addColorStop(.82, 'rgba(0,0,0,0)');
      ctx.fillStyle = fade; ctx.fillRect(0, 0, w, h); ctx.globalCompositeOperation = 'source-over';
    };
    const drawEdges = () => {
      edge.clearRect(0, 0, aw, ah);
      if (aw < 720) return;
      const margin = Math.max(24, (aw - Math.min(1200, aw - (aw > 920 ? 120 : 48))) / 2);
      // Soft drifting blue light only: no paths, particles, or decorative edges.
      for (const side of [-1, 1]) {
        const left = side < 0 ? 0 : aw - margin;
        edge.save(); edge.beginPath(); edge.rect(left, 0, margin, ah); edge.clip();
        for (let pool = 0; pool < 2; pool++) {
          const y = ah * (.5 + .48 * Math.sin(phase * .28 + pool * Math.PI + side));
          const radius = Math.max(240, ah * .43);
          const glow = edge.createRadialGradient(left + margin * .35, y, 0, left + margin * .35, y, radius);
          const color = pool ? '35,162,189' : '50,114,226';
          glow.addColorStop(0, `rgba(${color},${dark ? .18 : .095})`);
          glow.addColorStop(1, `rgba(${color},0)`);
          edge.fillStyle = glow; edge.fillRect(left, 0, margin, ah);
        }
        edge.restore();
      }
    };
    const step = now => {
      raf = requestAnimationFrame(step);
      if (last && now - last < (w < 640 ? 42 : 33)) return;
      phase += last ? Math.min((now - last) / 1000, .08) : 0;
      last = now;
      pointer.x += (pointer.tx - pointer.x) * .08;
      pointer.y += (pointer.ty - pointer.y) * .08;
      if (visible) draw();
      drawEdges();
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; last = 0; };
    const start = () => { if (!raf && !reduceMotion && !document.hidden && (visible || aw >= 720)) raf = requestAnimationFrame(step); };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.75);
      w = hero.clientWidth; h = hero.clientHeight; aw = innerWidth; ah = innerHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ambient.width = Math.round(aw * dpr); ambient.height = Math.round(ah * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); edge.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(); drawEdges(); start();
    };
    const recolor = () => { dark = root.dataset.theme === 'dark'; rgb = getComputedStyle(root).getPropertyValue('--field').trim(); draw(); drawEdges(); };
    new ResizeObserver(resize).observe(hero);
    addEventListener('resize', resize);
    addEventListener('scroll', () => { pageShift = scrollY; }, { passive: true });
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      pointer.tx = (e.clientX - r.left) / w - .5; pointer.ty = (e.clientY - r.top) / h - .5;
    }, { passive: true });
    hero.addEventListener('pointerleave', () => { pointer.tx = pointer.ty = 0; });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible || aw >= 720) start(); else stop(); }).observe(hero);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    resize();
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

  /* News can be browsed with the wheel, keyboard, or explicit arrows. */
  const news = document.getElementById('news-archive');
  const newer = document.getElementById('news-newer');
  const older = document.getElementById('news-older');
  const timeline = news.querySelector('.timeline');
  const newsItems = [...timeline.children];
  const syncNews = () => {
    const maxScroll = Math.max(0, news.scrollHeight - news.clientHeight);
    const progress = maxScroll > 1 ? Math.max(0, Math.min(1, news.scrollTop / maxScroll)) : 0;
    newer.disabled = news.scrollTop <= 1;
    older.disabled = news.scrollTop >= maxScroll - 1;
    // Move the reading position from the newest node to the oldest as the archive scrolls.
    const listTop = timeline.getBoundingClientRect().top;
    const nodes = newsItems.map(item => item.getBoundingClientRect().top - listTop + 21);
    const position = nodes[0] + progress * (nodes[nodes.length - 1] - nodes[0]);
    let active = 0;
    nodes.forEach((node, index) => {
      if (Math.abs(node - position) < Math.abs(nodes[active] - position)) active = index;
    });
    timeline.style.setProperty('--news-progress', `${position - nodes[0]}px`);
    newsItems.forEach((item, index) => {
      item.classList.toggle('is-current', index === active);
      item.classList.toggle('is-read', index < active);
      if (index === active) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
  };
  let newsFrame = 0;
  const scheduleNews = () => {
    if (!newsFrame) newsFrame = requestAnimationFrame(() => { syncNews(); newsFrame = 0; });
  };
  newer.addEventListener('click', () => news.scrollBy({ top: -news.clientHeight * .8, behavior: reduceMotion ? 'instant' : 'smooth' }));
  older.addEventListener('click', () => news.scrollBy({ top: news.clientHeight * .8, behavior: reduceMotion ? 'instant' : 'smooth' }));
  news.addEventListener('scroll', scheduleNews, { passive: true });
  const newsResize = new ResizeObserver(scheduleNews);
  newsResize.observe(news);
  newsResize.observe(timeline);
  syncNews();

  /* A subtle pointer glow; a click releases a tiny graduation cap. */
  if (!reduceMotion && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const effects = document.createElement('div');
    effects.className = 'pointer-effects';
    effects.setAttribute('aria-hidden', 'true');
    document.body.append(effects);
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    effects.append(glow);
    let pointerFrame = 0, px = 0, py = 0;
    const hideGlow = () => glow.classList.remove('visible');
    document.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      px = e.clientX; py = e.clientY;
      if (!pointerFrame) pointerFrame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${px + 12}px,${py + 12}px,0)`;
        glow.classList.add('visible');
        pointerFrame = 0;
      });
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', hideGlow);
    addEventListener('blur', hideGlow);
    document.addEventListener('visibilitychange', () => { if (document.hidden) hideGlow(); });
    document.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('input,textarea,select,[contenteditable="true"]')) return;
      const caps = document.querySelectorAll('.scholar-click');
      if (caps.length >= 6) caps[0].remove();
      const cap = document.createElement('span');
      cap.className = 'scholar-click';
      cap.setAttribute('aria-hidden', 'true');
      cap.style.left = `${e.clientX}px`; cap.style.top = `${e.clientY}px`;
      cap.innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 29v14q16 13 32 0V29" fill="#397bd8" stroke="#173b71" stroke-width="2"/><path d="m5 25 27-13 27 13-27 13Z" fill="#2364bb" stroke="#83c9f1" stroke-width="1.5"/><path d="m32 25 20 4v17" stroke="#f5c65c" stroke-width="2.5" stroke-linecap="round"/><path d="m50 46-2 8h8l-2-8" fill="#f5c65c"/><path d="M11 8v7M7.5 11.5h7M54 6v6m-3-3h6" stroke="#36c2d2" stroke-width="2" stroke-linecap="round"/></svg>';
      effects.append(cap);
      cap.addEventListener('animationend', e => { if (e.animationName === 'cap-lift') cap.remove(); });
      setTimeout(() => cap.remove(), 1300);
    }, { passive: true });
  }

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
