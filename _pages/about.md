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
  /* ========== CSS Variables - Warm Editorial Theme ========== */
  :root {
    --bg-primary: #faf9f7;
    --bg-secondary: #f5f3f0;
    --bg-card: #ffffff;
    --text-primary: #1a1a1a;
    --text-secondary: #3d3d3d;
    --text-muted: #6b6b6b;
    --border-color: #e8e6e3;
    --shadow-color: rgba(26, 26, 26, 0.04);
    --accent-color: #8b4513;
    --accent-light: #a0522d;
    --link-color: #8b4513;
    --link-hover: #5c2e0d;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Source Serif 4', Georgia, serif;
  }

  [data-theme="dark"] {
    --bg-primary: #141414;
    --bg-secondary: #1e1e1e;
    --bg-card: #1e1e1e;
    --text-primary: #f5f5f5;
    --text-secondary: #c9c9c9;
    --text-muted: #8c8c8c;
    --border-color: #2e2e2e;
    --shadow-color: rgba(0,0,0,0.35);
    --accent-color: #d4a574;
    --accent-light: #e6c9a8;
    --link-color: #d4a574;
    --link-hover: #f0dcc6;
  }

  /* ========== Global Font Styles ========== */
  body, .page__content, .author__bio, p, li, span, div {
    font-family: var(--font-body) !important;
    font-size: 16px;
    line-height: 1.75;
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
  
  h1 { font-size: 2.4em !important; margin-bottom: 0.5em !important; font-weight: 400 !important; }
  h2 { font-size: 1.8em !important; font-weight: 500 !important; }
  h3 { font-size: 1.4em !important; font-weight: 500 !important; }
  
  /* ========== Section Headers - Editorial Style ========== */
  .page__content > h1 {
    position: relative;
    display: block;
    padding-bottom: 16px;
    margin-top: 0 !important;
    margin-bottom: 1.5em !important;
  }
  .page__content > h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 1px;
    background: var(--accent-color);
  }
  
  /* Horizontal rule - editorial */
  hr {
    border: none;
    height: 1px;
    background: var(--border-color);
    margin: 45px 0;
    max-width: 120px;
  }

  /* ========== Link Styles ========== */
  a {
    color: var(--link-color) !important;
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;
  }
  a:hover {
    color: var(--link-hover) !important;
    border-bottom-color: var(--link-hover);
    text-decoration: none !important;
  }

  /* ========== Background ========== */
  body, html {
    background: var(--bg-primary) !important;
  }
  
  .page, .page__content, .sidebar, .author__content, .wrapper {
    background: transparent !important;
  }
  
  .page__inner-wrap, .archive, .entries-list {
    background: transparent !important;
  }

  /* ========== Theme Toggle Button ========== */
  .theme-toggle {
    position: fixed;
    top: 80px;
    right: 24px;
    z-index: 9999;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    box-shadow: 0 2px 12px var(--shadow-color);
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .theme-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--shadow-color);
    border-color: var(--accent-color);
  }

  /* ========== Remove Floating Particles for Clean Look ========== */
  .particles-container, .deco-shape, .deco-shape-1, .deco-shape-2 {
    display: none !important;
  }

  /* ========== Reduce spacing for compact layout ========== */
  .page__content { margin-top: -30px !important; padding-top: 0 !important; }
  h1:first-of-type { margin-top: 0 !important; padding-top: 0 !important; }
  .author__avatar { margin-top: -20px !important; }
  
  /* Compact paragraph spacing */
  p { margin-bottom: 0.8em !important; }
  ul, ol { margin-bottom: 0.8em !important; }
  li { margin-bottom: 0.3em !important; }

  /* ========== Simple Fade Animation ========== */
  .reveal {
    opacity: 1;
    transform: none;
  }

  /* ========== News items - Editorial Style ========== */
  .news-item { 
    transition: all 0.25s ease;
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color);
    border-radius: 3px !important;
    position: relative;
  }
  .news-item:hover { 
    transform: translateX(6px);
    box-shadow: 0 6px 24px var(--shadow-color);
    border-color: var(--accent-color);
  }
  .news-item > span:last-child { 
    color: var(--text-secondary) !important;
    font-family: var(--font-body) !important;
  }

  /* ========== Education & Service cards ========== */
  .edu-card { 
    background: var(--bg-card) !important; 
    border: 1px solid var(--border-color);
    transition: all 0.25s ease;
    border-radius: 3px !important;
  }
  .edu-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px var(--shadow-color);
  }
  
  .service-card { 
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color);
    border-radius: 3px;
  }

  /* ========== Paper boxes - Editorial Style ========== */
  .paper-box {
    transition: all 0.25s ease;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    overflow: hidden;
  }
  .paper-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px var(--shadow-color);
  }
  .paper-box-image {
    overflow: hidden;
    border-radius: 2px;
  }
  .paper-box-image img {
    transition: transform 0.4s ease;
  }
  .paper-box:hover .paper-box-image img {
    transform: scale(1.04);
  }

  /* ========== Badge colors - Refined ========== */
  .badge-red { background: #9b2c2c !important; }
  .badge-purple { background: #6b46c1 !important; }
  .badge-blue { background: #2b6cb0 !important; }
  .badge-orange { background: #c05621 !important; }
  .badge-green { background: #276749 !important; }

  /* ========== Reviewer badges ========== */
  .service-card span[style*="border-radius"] {
    transition: all 0.2s ease;
    cursor: default;
    font-family: var(--font-body) !important;
  }
  .service-card span[style*="border-radius"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-color);
  }
  
  /* ========== Custom Scrollbar - Subtle ========== */
  .news-container::-webkit-scrollbar {
    width: 4px;
  }
  .news-container::-webkit-scrollbar-track {
    background: var(--border-color);
    border-radius: 2px;
  }
  .news-container::-webkit-scrollbar-thumb {
    background: var(--text-muted);
    border-radius: 2px;
  }
  
  /* ========== Selection Style ========== */
  ::selection {
    background: rgba(180, 80, 80, 0.2);
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
  
  /* ========== News Container - Clean ========== */
  .news-container {
    position: relative;
    border-radius: 8px;
    background: transparent;
    border: none;
  }

  /* ========== Author Profile Sidebar ========== */
  .author__avatar img {
    border: 2px solid var(--border-color);
    box-shadow: 0 6px 20px var(--shadow-color);
    transition: all 0.25s ease;
  }
  .author__avatar img:hover {
    box-shadow: 0 10px 30px var(--shadow-color);
    transform: scale(1.02);
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
    font-size: 14px !important;
  }
  .author__urls-wrapper a {
    font-family: var(--font-body) !important;
    transition: all 0.2s ease;
    font-size: 14px !important;
  }

  /* ========== Masthead/Navigation ========== */
  .masthead {
    background: var(--bg-primary) !important;
    border-bottom: 1px solid var(--border-color);
  }
  .masthead__inner-wrap {
    background: var(--bg-primary) !important;
  }
  .greedy-nav {
    background: var(--bg-primary) !important;
  }
  .greedy-nav__toggle {
    background: var(--bg-primary) !important;
  }
  .masthead__menu-item, .greedy-nav a {
    font-family: var(--font-body) !important;
    font-size: 14px !important;
    font-weight: 400;
    letter-spacing: 0.02em;
    transition: all 0.2s ease;
    color: var(--text-secondary) !important;
  }
  .greedy-nav a:hover {
    color: var(--accent-color) !important;
  }
  .greedy-nav .visible-links a::before {
    background: var(--accent-color) !important;
  }
  
  /* Site header */
  .site-header, header, .initial-content {
    background: var(--bg-primary) !important;
  }

  /* ========== Strong/Bold text ========== */
  strong, b {
    font-weight: 700;
    color: var(--text-primary);
  }

  /* ========== Dark mode adjustments ========== */
  [data-theme="dark"] body,
  [data-theme="dark"] html,
  [data-theme="dark"] .page__content,
  [data-theme="dark"] .initial-content,
  [data-theme="dark"] .site-header,
  [data-theme="dark"] header {
    background: var(--bg-primary) !important;
  }
  [data-theme="dark"] .masthead,
  [data-theme="dark"] .masthead__inner-wrap,
  [data-theme="dark"] .greedy-nav,
  [data-theme="dark"] .greedy-nav__toggle {
    background: var(--bg-primary) !important;
    border-bottom-color: var(--border-color);
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
    background: rgba(212, 165, 116, 0.25);
  }

  /* ========== Back to top button ========== */
  .back-to-top {
    position: fixed;
    bottom: 28px;
    right: 24px;
    z-index: 9999;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    box-shadow: 0 2px 12px var(--shadow-color);
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    opacity: 0;
    visibility: hidden;
  }
  .back-to-top.visible {
    opacity: 1;
    visibility: visible;
  }
  .back-to-top:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px var(--shadow-color);
    border-color: var(--accent-color);
  }
  
  /* ========== Contact Card ========== */
  .contact-card {
    transition: all 0.25s ease;
  }
  .contact-card:hover {
    box-shadow: 0 6px 24px var(--shadow-color);
  }
  
  /* ========== Selection ========== */
  ::selection {
    background: rgba(139, 69, 19, 0.15);
    color: var(--text-primary);
  }
</style>

<!-- Theme Toggle Button -->
<button class="theme-toggle" onclick="toggleTheme()" title="Toggle Dark/Light Mode">
  <span id="theme-icon">🌙</span>
</button>

<!-- Back to Top Button -->
<button class="back-to-top" onclick="scrollToTop()" title="Back to Top">
  ⬆️
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

<div class="contact-card" style="background: var(--bg-card); padding: 16px 20px; border-radius: 8px; margin: 20px 0; border: 1px solid var(--border-color); border-left: 3px solid var(--accent-color);">
  <p style="margin: 0; font-size: 14px;">
    📧 <strong>Contact:</strong> <a href="mailto:chengzhi@ucsb.edu">chengzhi@ucsb.edu</a>
  </p>
  <p style="margin: 8px 0 0 0; font-size: 13px; color: var(--text-muted);">
    📌 I'm always happy to collaborate with graduate/undergraduate students. Please drop me an email if you want to work with me!
  </p>
</div>

---

<span class='anchor' id='news'></span>

# 🔥 News

<div class="news-container" style="max-height: 300px; overflow-y: auto; padding: 5px 10px 5px 5px;">

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin-bottom: 8px; border-left: 3px solid #c0392b;">
  <span style="background: #c0392b; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; white-space: nowrap;">2026.01</span>
  <span style="line-height: 1.5; font-size: 14px;">🎉 One paper is accepted by <strong style="color:#c0392b;">ICLR 2026</strong> 👉 Check our <a href="https://arxiv.org/pdf/2510.05571">paper</a> and <a href="https://evopresent.github.io/">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin-bottom: 8px; border-left: 3px solid #8e44ad;">
  <span style="background: #8e44ad; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; white-space: nowrap;">2025.09</span>
  <span style="line-height: 1.5; font-size: 14px;">🎉 One paper is accepted by <strong style="color:#8e44ad;">NeurIPS 2025</strong> 👉 <a href="https://arxiv.org/abs/2505.21523">paper</a> | <a href="https://mlrm-halu.github.io/">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin-bottom: 8px; border-left: 3px solid #2980b9;">
  <span style="background: #2980b9; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; white-space: nowrap;">2025.04</span>
  <span style="line-height: 1.5; font-size: 14px;">🎉 One paper is accepted by <strong style="color:#2980b9;">ACL 2025</strong> 👉 <a href="https://arxiv.org/abs/2502.11903">paper</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin-bottom: 8px; border-left: 3px solid #27ae60;">
  <span style="background: #27ae60; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; white-space: nowrap;">2025.04</span>
  <span style="line-height: 1.5; font-size: 14px;">🎉 One paper is accepted by <strong style="color:#27ae60;">CVPR 2025</strong> 👉 <a href="https://openaccess.thecvf.com/content/CVPR2025/html/Tang_Seeing_Far_and_Clearly_Mitigating_Hallucinations_in_MLLMs_with_Attention_CVPR_2025_paper.html">paper</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin-bottom: 8px; border-left: 3px solid #2980b9;">
  <span style="background: #2980b9; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; white-space: nowrap;">2025.02</span>
  <span style="line-height: 1.5; font-size: 14px;">🎉 Two papers are accepted by <strong style="color:#2980b9;">ICLR 2025</strong> 👉 <a href="https://arxiv.org/abs/2410.06172">MSSBench</a> & <a href="https://openreview.net/forum?id=zGb4WgCW5i">ANTRP</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin-bottom: 8px; border-left: 3px solid #d35400;">
  <span style="background: #d35400; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; white-space: nowrap;">2025.01</span>
  <span style="line-height: 1.5; font-size: 14px;">🎉 One paper is accepted by <strong style="color:#c0392b;">AAAI 2025 Oral</strong> 👉 <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32570">paper</a></span>
</div>

</div>

---

<span class='anchor' id='publications'></span>
<span class='anchor' id='selected-publications'></span>

# 📝 Selected Publications

<p style="font-size: 13px; color: var(--text-muted); margin-bottom: 15px;">Only (co-)first author papers are listed. See more on the <a href="/publications/">Publications</a> page or <a href="https://scholar.google.com/">Google Scholar</a>.<br><span style="font-style: italic;">(*indicates equal contribution)</span></p> 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge badge-red">ICLR 2026</div>
      <img src='images/evopresent.png' alt="EvoPresent" width="100%">
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

<div style="display: flex; flex-direction: column; gap: 10px;">

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border-left: 3px solid #2980b9;">
  <div style="font-size: 24px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: 600; font-size: 14px;">Ph.D. in Computer Science</p>
    <p style="margin: 3px 0 0 0; font-size: 13px;">University of California, Santa Barbara</p>
    <p style="margin: 3px 0 0 0; font-size: 12px; color: var(--text-muted);">2025.09 - 2030.06 (Expected)</p>
  </div>
</div>

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border-left: 3px solid #c0392b;">
  <div style="font-size: 24px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: 600; font-size: 14px;">Bachelor of Engineering</p>
    <p style="margin: 3px 0 0 0; font-size: 13px;">University of Liverpool, United Kingdom</p>
    <p style="margin: 3px 0 0 0; font-size: 12px; color: var(--text-muted);">2021.09 - 2025.07</p>
  </div>
</div>

</div>

---

<span class='anchor' id='services'></span>
<span class='anchor' id='academic-services'></span>

# 🧑‍⚖️ Academic Services

<div class="service-card" style="padding: 14px 16px; border-radius: 6px;">

<p style="font-weight: 600; margin-bottom: 10px; font-size: 14px;">Conference Reviewer:</p>

<span style="display: inline-flex; flex-wrap: wrap; gap: 6px;">
  <span style="background: #2980b9; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">AAAI 2025</span>
  <span style="background: #8e44ad; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">ICLR 2026</span>
  <span style="background: #c0392b; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">ICML 2026</span>
  <span style="background: #27ae60; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">CVPR 2025</span>
  <span style="background: #d35400; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">ARR 2026</span>
  <span style="background: #16a085; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">TCSVT</span>
  <span style="background: #34495e; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">ICME 2024-26</span>
</span>

</div>
****
