(() => {
  'use strict';
  const root = document.documentElement;
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) { /* Storage is optional. */ } };
  const darkPreference = matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101e30' : '#eef4fa';
  }
  applyTheme(root.dataset.theme || (darkPreference.matches ? 'dark' : 'light'));
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme); save('cl-theme', theme);
  });
  darkPreference.addEventListener('change', event => { if (!read('cl-theme')) applyTheme(event.matches ? 'dark' : 'light'); });

  const motionButton = document.getElementById('motion-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  function applyMotion() {
    const paused = reducedMotion.matches || read('cl-motion') === 'paused';
    root.dataset.motion = paused ? 'paused' : 'running';
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = reducedMotion.matches ? 'Reduced motion' : paused ? 'Resume motion ▷' : 'Pause motion Ⅱ';
    motionButton.disabled = reducedMotion.matches;
    motionButton.title = reducedMotion.matches ? 'Reduced motion follows your device preference' : 'Pause or resume all ambient and research animations';
  }
  applyMotion();
  motionButton.addEventListener('click', () => { save('cl-motion', root.dataset.motion === 'paused' ? 'running' : 'paused'); applyMotion(); });
  reducedMotion.addEventListener('change', applyMotion);

  const papers = Array.from(document.querySelectorAll('.publication'));
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const search = document.getElementById('paper-search');
  const count = document.getElementById('result-count');
  let selected = 'all';
  function filterPapers() {
    const terms = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    papers.forEach(paper => {
      const match = (selected === 'all' || paper.dataset.category === selected) && terms.every(term => paper.textContent.toLocaleLowerCase().includes(term));
      paper.hidden = !match;
      if (match) visible++;
    });
    count.hidden = selected === 'all' && terms.length === 0;
    count.textContent = `${visible} ${visible === 1 ? 'paper' : 'papers'}`;
    document.getElementById('empty-state').hidden = visible !== 0;
    document.querySelector('.publication-list').scrollTop = 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    selected = button.dataset.filter;
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    filterPapers();
  }));
  search.addEventListener('input', filterPapers);
  document.querySelector('.publication-tools').hidden = false;

  // Keep disclosure state per visit; make all content available on paper.
  let printState = [];
  window.addEventListener('beforeprint', () => {
    printState = Array.from(document.querySelectorAll('.section-disclosure')).map(panel => [panel, panel.open]);
    printState.forEach(([panel]) => { panel.open = true; });
  });
  window.addEventListener('afterprint', () => { printState.forEach(([panel, open]) => { panel.open = open; }); });

  if ('IntersectionObserver' in window) {
    const navLinks = Array.from(document.querySelectorAll('nav a'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) navLinks.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-12% 0px -60% 0px', threshold: 0});
    navLinks.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
  }
})();
