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

<!-- Google Fonts - Clean Academic Style -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

<style>
  /* ========== CSS Variables for Theme - Light Blue ========== */
  :root {
    --bg-primary: #f5f8fc;
    --bg-secondary: #edf2f7;
    --bg-card: #ffffff;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --text-muted: #718096;
    --border-color: #e2e8f0;
    --shadow-color: rgba(66, 103, 178, 0.08);
    --accent-color: #b45050;
    --accent-light: #c96868;
    --link-color: #b45050;
    --link-hover: #943c3c;
    --font-heading: 'Libre Baskerville', Georgia, serif;
    --font-body: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  [data-theme="dark"] {
    --bg-primary: #0f1419;
    --bg-secondary: #192028;
    --bg-card: #1e2732;
    --text-primary: #e7e9ea;
    --text-secondary: #a8b3c0;
    --text-muted: #6e7a8a;
    --border-color: #2f3940;
    --shadow-color: rgba(0,0,0,0.3);
    --accent-color: #d47070;
    --accent-light: #e08888;
    --link-color: #d47070;
    --link-hover: #e8a0a0;
  }

  /* ========== Global Font Styles ========== */
  body, .page__content, .author__bio, p, li, span, div {
    font-family: var(--font-body) !important;
    font-size: 15px;
    line-height: 1.65;
    color: var(--text-secondary);
  }
  
  h1, h2, h3, h4, h5, h6,
  .page__title, .archive__item-title {
    font-family: var(--font-heading) !important;
    font-weight: 700;
    color: var(--text-primary) !important;
    letter-spacing: -0.01em;
  }
  
  h1 { font-size: 1.9em !important; margin-bottom: 0.6em !important; }
  h2 { font-size: 1.5em !important; }
  h3 { font-size: 1.2em !important; }
  
  /* ========== Section Headers - Clean Style ========== */
  .page__content > h1 {
    position: relative;
    display: inline-block;
    padding-bottom: 8px;
    margin-top: 0 !important;
  }
  .page__content > h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--accent-color);
    border-radius: 1px;
  }
  
  /* Horizontal rule - minimal */
  hr {
    border: none;
    height: 1px;
    background: var(--border-color);
    margin: 25px 0;
  }

  /* ========== Link Styles ========== */
  a {
    color: var(--link-color) !important;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover {
    color: var(--link-hover) !important;
    text-decoration: underline;
  }

  /* ========== Clean Background ========== */
  body, html {
    background: var(--bg-primary) !important;
  }
  
  .page, .page__content, .sidebar, .author__content, .wrapper {
    background: transparent !important;
  }
  
  /* Ensure entire page wrapper follows theme */
  .page__inner-wrap, .archive, .entries-list {
    background: var(--bg-primary) !important;
  }
  
  /* Remove all pseudo-element decorations for cleaner look */
  body::before, body::after, .page__content::before {
    display: none !important;
  }

  /* ========== Theme Toggle Button ========== */
  .theme-toggle {
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 9999;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    cursor: pointer;
    box-shadow: 0 2px 8px var(--shadow-color);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .theme-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px var(--shadow-color);
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

  /* ========== News items - Clean Style ========== */
  .news-item { 
    transition: all 0.2s ease;
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color);
    border-radius: 6px !important;
  }
  .news-item:hover { 
    transform: translateX(4px); 
    box-shadow: 0 4px 12px var(--shadow-color);
  }
  .news-item > span:last-child { color: var(--text-secondary) !important; }

  /* ========== Education & Service cards - Clean Style ========== */
  .edu-card { 
    background: var(--bg-card) !important; 
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
    border-radius: 8px !important;
  }
  .edu-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px var(--shadow-color);
  }
  
  .service-card { 
    background: var(--bg-card) !important;
    border: 1px solid var(--border-color);
  }

  /* ========== Paper boxes - Clean Style ========== */
  .paper-box {
    transition: all 0.2s ease;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
  }
  .paper-box:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--shadow-color);
  }
  .paper-box-image {
    overflow: hidden;
    border-radius: 6px;
  }
  .paper-box-image img {
    transition: transform 0.3s ease;
  }
  .paper-box:hover .paper-box-image img {
    transform: scale(1.03);
  }

  /* ========== Badge colors - Muted tones ========== */
  .badge-red { background: #c0392b !important; }
  .badge-purple { background: #8e44ad !important; }
  .badge-blue { background: #2980b9 !important; }
  .badge-orange { background: #d35400 !important; }
  .badge-green { background: #27ae60 !important; }

  /* ========== Reviewer badges ========== */
  .service-card span[style*="border-radius: 20px"] {
    transition: all 0.2s ease;
    cursor: default;
  }
  .service-card span[style*="border-radius: 20px"]:hover {
    transform: translateY(-2px);
    opacity: 0.9;
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
    box-shadow: 0 4px 12px var(--shadow-color);
    transition: all 0.2s ease;
  }
  .author__avatar img:hover {
    box-shadow: 0 6px 16px var(--shadow-color);
  }
  .author__name {
    font-family: var(--font-heading) !important;
    font-size: 1.3em !important;
    font-weight: 700 !important;
    color: var(--text-primary) !important;
  }
  .author__bio {
    font-family: var(--font-body) !important;
    color: var(--text-secondary) !important;
    font-style: normal;
    line-height: 1.5;
    font-size: 14px !important;
  }
  .author__urls-wrapper a {
    font-family: var(--font-body) !important;
    transition: color 0.2s ease;
    font-size: 14px !important;
  }

  /* ========== Masthead/Navigation - Clean ========== */
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
    transition: color 0.2s ease;
    color: var(--text-secondary) !important;
  }
  .greedy-nav a:hover {
    color: var(--link-color) !important;
  }
  .greedy-nav .visible-links a::before {
    background: var(--accent-color) !important;
  }
  
  /* Site header top bar */
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
    color: var(--link-color) !important;
  }
  [data-theme="dark"] .news-item,
  [data-theme="dark"] .edu-card,
  [data-theme="dark"] .service-card,
  [data-theme="dark"] .paper-box {
    background: var(--bg-card) !important;
    border-color: var(--border-color);
  }

  /* ========== Back to top button - Clean ========== */
  .back-to-top {
    position: fixed;
    bottom: 25px;
    right: 20px;
    z-index: 9999;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    box-shadow: 0 2px 8px var(--shadow-color);
    transition: all 0.2s ease;
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
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-color);
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
