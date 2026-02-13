---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<!-- Google Fonts - Editorial Serif Style -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,400&display=swap" rel="stylesheet">

<style>
  /* ========== CSS Variables - Soft Light Blue Theme ========== */
  :root {
    --bg-primary: #f8fbfe;
    --bg-secondary: #f0f7fc;
    --bg-card: #ffffff;
    --text-primary: #1a2a3a;
    --text-secondary: #2d4a5e;
    --text-muted: #5a7a8a;
    --border-color: #d8eaf5;
    --shadow-color: rgba(70, 130, 180, 0.08);
    --accent-color: #5ba4d4;
    --accent-light: #7dbce6;
    --link-color: #4a9acc;
    --link-hover: #2980b9;
    --gradient-start: #f8fbfe;
    --gradient-end: #f0f6fb;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Source Serif 4', Georgia, serif;
  }

  [data-theme="dark"] {
    --bg-primary: #101820;
    --bg-secondary: #1a242e;
    --bg-card: #1a242e;
    --text-primary: #e8f4fc;
    --text-secondary: #b8d4e8;
    --text-muted: #7a9ab8;
    --border-color: #2a3a48;
    --shadow-color: rgba(0, 0, 0, 0.35);
    --accent-color: #7dbce6;
    --accent-light: #a3d1f0;
    --link-color: #7dbce6;
    --link-hover: #c5e3f6;
    --gradient-start: #141c24;
    --gradient-end: #101820;
  }

  /* ========== Global Font Styles ========== */
  body, .page__content, .author__bio, p, li, span, div {
    font-family: var(--font-body) !important;
    font-size: 17px;
    line-height: 1.7;
    color: var(--text-secondary);
    font-weight: 400;
    letter-spacing: 0.01em;
  }
  
  h1, h2, h3, h4, h5, h6,
  .page__title, .archive__item-title {
    font-family: var(--font-display) !important;
    font-weight: 500;
    color: var(--text-primary) !important;
    letter-spacing: -0.01em;
    line-height: 1.25;
  }
  
  h1 { font-size: 2.2em !important; margin-bottom: 0.4em !important; font-weight: 400 !important; }
  h2 { font-size: 1.7em !important; font-weight: 500 !important; }
  h3 { font-size: 1.35em !important; font-weight: 500 !important; }
  
  /* ========== Section Headers - Editorial Style ========== */
  .page__content > h1 {
    position: relative;
    display: block;
    padding-bottom: 12px;
    margin-top: 0 !important;
    margin-bottom: 0.8em !important;
  }
  .page__content > h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-color), var(--accent-light));
    border-radius: 2px;
  }
  
  /* Horizontal rule - editorial */
  hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
    margin: 25px 0;
    max-width: 100%;
  }

  /* ========== Link Styles ========== */
  a {
    color: var(--link-color) !important;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid transparent;
    position: relative;
  }
  a:hover {
    color: var(--link-hover) !important;
    border-bottom-color: var(--link-hover);
    text-decoration: none !important;
  }

  /* ========== Background with subtle gradient ========== */
  body, html {
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%) !important;
    background-attachment: fixed !important;
  }
  
  .page, .page__content, .sidebar, .author__content, .wrapper {
    background: transparent !important;
  }
  
  .page__inner-wrap, .archive, .entries-list {
    background: transparent !important;
  }

  /* ========== Entrance Animations ========== */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  .page__content > h1 {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .paper-box, .edu-card, .service-card, .news-item, .contact-card {
    animation: fadeInUp 0.5s ease-out backwards;
  }
  
  .paper-box:nth-child(1) { animation-delay: 0.1s; }
  .paper-box:nth-child(2) { animation-delay: 0.2s; }
  .paper-box:nth-child(3) { animation-delay: 0.3s; }
  .paper-box:nth-child(4) { animation-delay: 0.4s; }
  .paper-box:nth-child(5) { animation-delay: 0.5s; }
  
  .news-item:nth-child(1) { animation-delay: 0.05s; }
  .news-item:nth-child(2) { animation-delay: 0.1s; }
  .news-item:nth-child(3) { animation-delay: 0.15s; }
  .news-item:nth-child(4) { animation-delay: 0.2s; }
  .news-item:nth-child(5) { animation-delay: 0.25s; }
  .news-item:nth-child(6) { animation-delay: 0.3s; }

  /* ========== Theme Toggle Button ========== */
  .theme-toggle {
    position: fixed;
    top: 80px;
    right: 24px;
    z-index: 9999;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    cursor: pointer;
    box-shadow: 0 4px 15px var(--shadow-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .theme-toggle:hover {
    transform: translateY(-3px) rotate(15deg);
    box-shadow: 0 8px 25px var(--shadow-color);
    border-color: var(--accent-color);
    background: var(--accent-color);
  }

  /* ========== Remove Floating Particles for Clean Look ========== */
  .particles-container, .deco-shape, .deco-shape-1, .deco-shape-2 {
    display: none !important;
  }

  /* ========== Compact spacing layout ========== */
    .page__content { margin-top: -60px !important; padding-top: 0 !important; }
  h1:first-of-type { margin-top: -15px !important; padding-top: 0 !important; }
  .author__avatar { margin-top: 0 !important; padding-top: 10px !important; }
  .sidebar { padding-top: 20px !important; margin-top: -30px !important; }
  .page { padding-top: 0 !important; margin-top: -15px !important; }
  .page__inner-wrap { padding-top: 0 !important; margin-top: 0 !important; }
  #main { padding-top: 0 !important; margin-top: -20px !important; }
  .initial-content { padding-top: 0 !important; }
  
  /* Compact paragraph spacing */
  p { margin-bottom: 0.6em !important; }
  ul, ol { margin-bottom: 0.6em !important; }
  li { margin-bottom: 0.25em !important; }

  /* ========== News items - Modern Blue Style ========== */
  .news-item { 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color);
    border-radius: 10px !important;
    position: relative;
    overflow: hidden;
  }
  .news-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .news-item:hover::before {
    opacity: 1;
  }
  .news-item:hover { 
    transform: translateX(8px) scale(1.01);
    box-shadow: 0 8px 30px var(--shadow-color);
    border-color: var(--accent-color);
  }
  .news-item > span:last-child { 
    color: var(--text-secondary) !important;
    font-family: var(--font-body) !important;
    font-size: 15px !important;
  }

  /* ========== Education & Service cards ========== */
  .edu-card { 
    background: var(--bg-card) !important; 
    border: 1px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 12px !important;
    position: relative;
    overflow: hidden;
  }
  .edu-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.08) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .edu-card:hover::after {
    opacity: 1;
  }
  .edu-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 15px 40px var(--shadow-color);
    border-color: var(--accent-color);
  }
  
  .service-card { 
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: all 0.3s ease;
  }
  .service-card:hover {
    box-shadow: 0 8px 25px var(--shadow-color);
  }

  /* ========== Paper boxes - Modern Blue Style ========== */
  .paper-box {
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }
  .paper-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--accent-light));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  .paper-box:hover::before {
    transform: scaleX(1);
  }
  .paper-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px var(--shadow-color);
  }
  .paper-box-image {
    overflow: hidden;
    border-radius: 8px;
  }
  .paper-box-image img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .paper-box:hover .paper-box-image img {
    transform: scale(1.06);
  }

  /* ========== Badge colors - Blue Theme ========== */
  .badge-red { background: linear-gradient(135deg, #e74c3c, #c0392b) !important; }
  .badge-purple { background: linear-gradient(135deg, #9b59b6, #8e44ad) !important; }
  .badge-blue { background: linear-gradient(135deg, #3498db, #2980b9) !important; }
  .badge-orange { background: linear-gradient(135deg, #e67e22, #d35400) !important; }
  .badge-green { background: linear-gradient(135deg, #2ecc71, #27ae60) !important; }

  /* ========== Reviewer badges ========== */
  .service-card span[style*="border-radius"] {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    font-family: var(--font-body) !important;
    font-size: 13px !important;
  }
  .service-card span[style*="border-radius"]:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 18px var(--shadow-color);
  }
  
  /* ========== Custom Scrollbar - Blue Theme ========== */
  .news-container::-webkit-scrollbar {
    width: 5px;
  }
  .news-container::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 10px;
  }
  .news-container::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent-color), var(--accent-light));
    border-radius: 10px;
  }
  .news-container::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
  }
  
  /* ========== Selection Style - Blue ========== */
  ::selection {
    background: rgba(52, 152, 219, 0.25);
    color: var(--text-primary);
  }
  
  /* ========== Anchor scroll offset for fixed header ========== */
  .anchor {
    display: block;
    position: relative;
    top: -80px;
    visibility: hidden;
  }
  
  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* ========== News Container - Modern ========== */
  .news-container {
    position: relative;
    border-radius: 12px;
    background: transparent;
    border: none;
    padding: 5px;
  }

  /* ========== Author Profile Sidebar ========== */
  .author__avatar img {
    border: 3px solid var(--accent-light);
    box-shadow: 0 8px 25px var(--shadow-color);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .author__avatar img:hover {
    box-shadow: 0 15px 40px var(--shadow-color);
    transform: scale(1.05) rotate(2deg);
    border-color: var(--accent-color);
  }
  .author__name {
    font-family: var(--font-display) !important;
    font-size: 1.5em !important;
    font-weight: 500 !important;
    color: var(--text-primary) !important;
    letter-spacing: -0.01em;
  }
  .author__bio {
    font-family: var(--font-body) !important;
    color: var(--text-secondary) !important;
    font-style: normal;
    line-height: 1.65;
    font-size: 15px !important;
  }
  .author__urls-wrapper a {
    font-family: var(--font-body) !important;
    transition: all 0.25s ease;
    font-size: 15px !important;
  }
  .author__urls-wrapper a:hover {
    transform: translateX(4px);
  }

  /* ========== Masthead/Navigation ========== */
  .masthead {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)) !important;
    border-bottom: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
  }
  .masthead__inner-wrap {
    background: transparent !important;
  }
  .greedy-nav {
    background: transparent !important;
  }
  .greedy-nav__toggle {
    background: var(--bg-card) !important;
  }
  .masthead__menu-item, .greedy-nav a {
    font-family: var(--font-body) !important;
    font-size: 15px !important;
    font-weight: 400;
    letter-spacing: 0.02em;
    transition: all 0.25s ease;
    color: var(--text-secondary) !important;
    position: relative;
  }
  .greedy-nav a:hover {
    color: var(--accent-color) !important;
    transform: translateY(-1px);
  }
  .greedy-nav .visible-links a::before {
    background: linear-gradient(90deg, var(--accent-color), var(--accent-light)) !important;
  }
  
  /* Site header */
  .site-header, header, .initial-content {
    background: transparent !important;
  }

  /* ========== Strong/Bold text ========== */
  strong, b {
    font-weight: 700;
    color: var(--text-primary);
  }

  /* ========== Dark mode adjustments ========== */
  [data-theme="dark"] body,
  [data-theme="dark"] html {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end)) !important;
  }
  [data-theme="dark"] .page__content,
  [data-theme="dark"] .initial-content,
  [data-theme="dark"] .site-header,
  [data-theme="dark"] header {
    background: transparent !important;
  }
  [data-theme="dark"] .masthead,
  [data-theme="dark"] .masthead__inner-wrap,
  [data-theme="dark"] .greedy-nav {
    background: transparent !important;
    border-bottom-color: var(--border-color);
  }
  [data-theme="dark"] .greedy-nav__toggle {
    background: var(--bg-card) !important;
  }
  [data-theme="dark"] .masthead__menu-item,
  [data-theme="dark"] .greedy-nav a {
    color: var(--text-secondary) !important;
  }
  [data-theme="dark"] .greedy-nav a:hover {
    color: var(--accent-color) !important;
  }
  [data-theme="dark"] .news-item,
  [data-theme="dark"] .edu-card,
  [data-theme="dark"] .service-card,
  [data-theme="dark"] .paper-box {
    background: var(--bg-card) !important;
    border-color: var(--border-color);
  }
  [data-theme="dark"] ::selection {
    background: rgba(93, 173, 226, 0.3);
  }

  /* ========== Back to top button ========== */
  .back-to-top {
    position: fixed;
    bottom: 28px;
    right: 24px;
    z-index: 9999;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    cursor: pointer;
    box-shadow: 0 4px 18px var(--shadow-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    opacity: 0;
    visibility: hidden;
    color: white;
  }
  .back-to-top.visible {
    opacity: 1;
    visibility: visible;
    animation: float 3s ease-in-out infinite;
  }
  .back-to-top:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
  
  /* ========== Contact Card ========== */
  .contact-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .contact-card:hover::before {
    opacity: 1;
  }
  .contact-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px var(--shadow-color);
    border-color: var(--accent-color) !important;
  }
  
  /* ========== Glowing effect for interactive elements ========== */
  .theme-toggle:active,
  .back-to-top:active {
    transform: scale(0.95);
  }
  
  /* ========== Smooth transitions for all interactive elements ========== */
  *, *::before, *::after {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>

<!-- Theme Toggle Button -->
<button class="theme-toggle" onclick="toggleTheme()" title="Toggle Dark/Light Mode">
  <span id="theme-icon">🌙</span>
</button>

<!-- Back to Top Button -->
<button class="back-to-top" onclick="scrollToTop()" title="Back to Top">
  ↑
</button>


<script>
// ========== Theme Toggle ==========
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const isDark = html.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    html.removeAttribute('data-theme');
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme
(function() {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('theme-icon');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) icon.textContent = '☀️';
  }
})();

// ========== Back to Top ==========
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
});
</script>
<span class='anchor' id='about-me'></span>
<span class='anchor' id='about'></span>

# 👨‍🎓 About Me

Hi there! 👋 I'm a **First Year PhD student** at the [University of California, Santa Barbara NLP Group](http://nlp.cs.ucsb.edu/), [Department of Computer Science](https://www.cs.ucsb.edu/), advised by [Dr. Eric Xin Wang](https://eric-xw.github.io/). I graduated from the School of Engineering at the University of Liverpool.

My research interests lie in **trustworthy AI** and the **algorithmic foundations of multimodal large models**, with a focus on:
- 🎯 Multimodal reasoning and visual grounding
- 🛡️ Reliability and robustness of LLMs and VLMs
- 🔍 Autonomous agent frameworks with self-evolution

I am always open to collaboration and the exchange of ideas. If you'd like to discuss potential research opportunities or simply connect, please don't hesitate to reach out!

<div class="contact-card" style="background: var(--bg-card); padding: 16px 20px; border-radius: 12px; margin: 15px 0; border: 1px solid var(--border-color); border-left: 4px solid var(--accent-color);">
  <p style="margin: 0; font-size: 16px;">
    📧 <strong>Contact:</strong> <a href="mailto:chengzhi@ucsb.edu">chengzhi@ucsb.edu</a>
  </p>
  <p style="margin: 8px 0 0 0; font-size: 15px; color: var(--text-muted);">
    📌 I'm always happy to collaborate with graduate/undergraduate students. Please drop me an email if you want to work with me!
  </p>
</div>

---

<span class='anchor' id='news'></span>

# 🔥 News

<div class="news-container" style="max-height: 280px; overflow-y: auto; padding: 8px;">

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; margin-bottom: 6px; border-left: 4px solid #7dbce6;">
  <span style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">2026.01</span>
  <span style="line-height: 1.5; font-size: 15px;">🎉 One paper is accepted by <strong style="color:#e74c3c;">ICLR 2026</strong> 👉 Check our <a href="https://arxiv.org/pdf/2510.05571">paper</a> and <a href="https://evopresent.github.io/">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; margin-bottom: 6px; border-left: 4px solid #7dbce6;">
  <span style="background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">2025.09</span>
  <span style="line-height: 1.5; font-size: 15px;">🎉 One paper is accepted by <strong style="color:#9b59b6;">NeurIPS 2025</strong> 👉 <a href="https://arxiv.org/abs/2505.21523">paper</a> | <a href="https://mlrm-halu.github.io/">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; margin-bottom: 6px; border-left: 4px solid #7dbce6;">
  <span style="background: linear-gradient(135deg, #5ba4d4, #4a9acc); color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">2025.04</span>
  <span style="line-height: 1.5; font-size: 15px;">🎉 One paper is accepted by <strong style="color:#5ba4d4;">ACL 2025</strong> 👉 <a href="https://arxiv.org/abs/2502.11903">paper</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; margin-bottom: 6px; border-left: 4px solid #7dbce6;">
  <span style="background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">2025.04</span>
  <span style="line-height: 1.5; font-size: 15px;">🎉 One paper is accepted by <strong style="color:#27ae60;">CVPR 2025</strong> 👉 <a href="https://openaccess.thecvf.com/content/CVPR2025/html/Tang_Seeing_Far_and_Clearly_Mitigating_Hallucinations_in_MLLMs_with_Attention_CVPR_2025_paper.html">paper</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; margin-bottom: 6px; border-left: 4px solid #7dbce6;">
  <span style="background: linear-gradient(135deg, #5ba4d4, #4a9acc); color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">2025.02</span>
  <span style="line-height: 1.5; font-size: 15px;">🎉 Two papers are accepted by <strong style="color:#5ba4d4;">ICLR 2025</strong> 👉 <a href="https://arxiv.org/abs/2410.06172">MSSBench</a> & <a href="https://openreview.net/forum?id=zGb4WgCW5i">ANTRP</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; margin-bottom: 6px; border-left: 4px solid #7dbce6;">
  <span style="background: linear-gradient(135deg, #e67e22, #d35400); color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">2025.01</span>
  <span style="line-height: 1.5; font-size: 15px;">🎉 One paper is accepted by <strong style="color:#e74c3c;">AAAI 2025 Oral</strong> 👉 <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32570">paper</a></span>
</div>

</div>

---

<span class='anchor' id='publications'></span>
<span class='anchor' id='selected-publications'></span>

# 📝 Selected Publications

<p style="font-size: 15px; color: var(--text-muted); margin-bottom: 12px;">Only (co-)first author papers are listed. See more on the <a href="https://scholar.google.com/citations?user=QC1kfNYAAAAJ&hl=zh-CN">Google Scholar</a>.<br><span style="font-style: italic;">(*indicates equal contribution)</span></p> 


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-red">ICLR 2026</div>
      <img src='images/latent.png' alt="EvoPresent" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**[Reasoning Within the Mind: Dynamic Multimodal Interleaving in Latent Space](https://arxiv.org/abs/2512.12623)**

**Chengzhi Liu** <sup>*</sup>, Yuzhe Yang<sup>*</sup>, Yue Fan, Qinyue Wei, Sheng Liu, Xin Eric Wang

<span style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
  <a href="https://mllm-dmlr.github.io/" style="text-decoration: none;">🌐 Project</a>
  <a href="https://arxiv.org/abs/2512.12623" style="text-decoration: none;">📄 Paper</a>
  <a href="https://arxiv.org/abs/2512.12623" style="text-decoration: none;">📢 Talk</a>
  <a href="https://github.com/eric-ai-lab/DMLR"><img src="https://img.shields.io/github/stars/eric-ai-lab/DMLR?style=social" alt="GitHub stars"></a>
</span>

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-red">ICLR 2026</div>
      <img src='images/iclr2222.png' alt="EvoPresent" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**[Presenting a Paper is an Art: Self-Improvement Aesthetic Agents for Academic Presentations](https://arxiv.org/pdf/2510.05571)**

**Chengzhi Liu** <sup>*</sup>, Yuzhe Yang<sup>*</sup>, Kaiwen Zhou, Zhen Zhang, Yue Fan, Yanan Xie, Peng Qi, Xin Eric Wang

<span style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
  <a href="https://evopresent.github.io/" style="text-decoration: none;">🌐 Project</a>
  <a href="https://arxiv.org/pdf/2510.05571" style="text-decoration: none;">📄 Paper</a>
  <a href="https://github.com/eric-ai-lab/EvoPresent"><img src="https://img.shields.io/github/stars/eric-ai-lab/EvoPresent?style=social" alt="GitHub stars"></a>
</span>

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-purple">NeurIPS 2025</div>
      <img src='images/more.jpg' alt="MLRM-Halu" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**[More Thinking, Less Seeing? Assessing Amplified Hallucination in Multimodal Reasoning Models](https://arxiv.org/abs/2505.21523)**

**Chengzhi Liu**<sup>*</sup>, Zhongxing Xu<sup>*</sup>, Qinyue Wei, Juncheng Wu, James Zou, Xin Eric Wang, Yuyin Zhou, Sheng Liu

<span style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
  <a href="https://mlrm-halu.github.io/" style="text-decoration: none;">🌐 Project</a>
  <a href="https://arxiv.org/abs/2505.21523" style="text-decoration: none;">📄 Paper</a>
  <a href="https://github.com/MLRM-Halu/MLRM-Halu"><img src="https://img.shields.io/github/stars/MLRM-Halu/MLRM-Halu?style=social" alt="GitHub stars"></a>
</span>

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-blue">ICLR 2025</div>
      <img src='images/mssbench.jpg' alt="MSSBench" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**[Multimodal Situational Safety](https://arxiv.org/abs/2410.06172)**

Kaiwen Zhou<sup>*</sup>, **Chengzhi Liu**<sup>*</sup>, Xuandong Zhao, Anderson Compalas, Dawn Song, Xin Eric Wang

<span style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
  <a href="https://mssbench.github.io/" style="text-decoration: none;">🌐 Project</a>
  <a href="https://arxiv.org/abs/2410.06172" style="text-decoration: none;">📄 Paper</a>
  <a href="https://github.com/eric-ai-lab/MSSBench"><img src="https://img.shields.io/github/stars/eric-ai-lab/MSSBench?style=social" alt="GitHub stars"></a>
</span>

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-orange">AAAI 2025 <span style="font-size: 10px;">Oral</span></div>
      <img src='images/aaai.jpg' alt="IMDR" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**[Incomplete Modality Disentangled Representation for Ophthalmic Disease Grading and Diagnosis](https://ojs.aaai.org/index.php/AAAI/article/view/32570)**

**Chengzhi Liu**<sup>*</sup>, Zile Huang<sup>*</sup>, Zhe Chen, Feilong Tang, Yu Tian, Zhongxing Xu, Zihong Luo, Yalin Zheng, Yanda Meng

<span style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
  <a href="https://imdr-aaai.github.io/" style="text-decoration: none;">🌐 Project</a>
  <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32570" style="text-decoration: none;">📄 Paper</a>
</span>

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-blue">ICLR 2025</div>
      <img src='images/iclr.jpg' alt="ANTRP" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**[Intervening Anchor Token: Decoding Strategy in Alleviating Hallucinations for MLLMs](https://openreview.net/forum?id=zGb4WgCW5i)**

Feilong Tang<sup>*</sup>, Zile Huang<sup>*</sup>, **Chengzhi Liu**, Qiang Sun, Harry Yang, Ser-Nam Lim

<span style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px;">
  <a href="https://openreview.net/forum?id=zGb4WgCW5i" style="text-decoration: none;">📄 Paper</a>
  <a href="https://github.com/Everlyn-Labs/ANTRP"><img src="https://img.shields.io/github/stars/Everlyn-Labs/ANTRP?style=social" alt="GitHub stars"></a>
</span>

  </div>
</div>

---

<span class='anchor' id='education'></span>
<span class='anchor' id='educations'></span>

# 📖 Education

<div style="display: flex; flex-direction: column; gap: 8px;">

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 14px; padding: 14px 16px; border-left: 4px solid #5ba4d4;">
  <div style="font-size: 26px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: 600; font-size: 16px;">Ph.D. in Computer Science</p>
    <p style="margin: 4px 0 0 0; font-size: 15px;">University of California, Santa Barbara</p>
    <p style="margin: 4px 0 0 0; font-size: 14px; color: var(--text-muted);">2025.09 - 2030.06 (Expected)</p>
  </div>
</div>

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 14px; padding: 14px 16px; border-left: 4px solid #7dbce6;">
  <div style="font-size: 26px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: 600; font-size: 16px;">Bachelor of Engineering</p>
    <p style="margin: 4px 0 0 0; font-size: 15px;">University of Liverpool, United Kingdom</p>
    <p style="margin: 4px 0 0 0; font-size: 14px; color: var(--text-muted);">2021.09 - 2025.07</p>
  </div>
</div>

</div>

---

<span class='anchor' id='services'></span>
<span class='anchor' id='academic-services'></span>

# 🧑‍⚖️ Academic Services

<div class="service-card" style="padding: 16px 18px; border-radius: 12px;">

<p style="font-weight: 600; margin-bottom: 12px; font-size: 16px;">Conference Reviewer:</p>

<span style="display: inline-flex; flex-wrap: wrap; gap: 8px;">
  <span style="background: linear-gradient(135deg, #5ba4d4, #4a9acc); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">AAAI 2025</span>
  <span style="background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">ICLR 2026</span>
  <span style="background: linear-gradient(135deg, #e57373, #c0392b); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">ICML 2026</span>
  <span style="background: linear-gradient(135deg, #66bb6a, #43a047); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">CVPR 2025</span>
  <span style="background: linear-gradient(135deg, #ffb74d, #f57c00); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">ARR 2026</span>
  <span style="background: linear-gradient(135deg, #4db6ac, #26a69a); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">TCSVT</span>
  <span style="background: linear-gradient(135deg, #78909c, #546e7a); color: white; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 500;">ICME 2024-26</span>
</span>

</div>
