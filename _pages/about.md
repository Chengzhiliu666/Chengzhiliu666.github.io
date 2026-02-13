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

<!-- 🌗 Theme Toggle Styles & Script -->
<style>
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-tertiary: #f0f7ff;
    --text-primary: #2c3e50;
    --text-secondary: #7f8c8d;
    --text-muted: #95a5a6;
    --border-color: #e0e0e0;
    --card-shadow: 0 2px 15px rgba(0,0,0,0.08);
    --link-color: #3498db;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
  }

  [data-theme="dark"] {
    --bg-primary: #1a1a2e;
    --bg-secondary: #16213e;
    --bg-tertiary: #0f3460;
    --text-primary: #eaeaea;
    --text-secondary: #b0b0b0;
    --text-muted: #888888;
    --border-color: #333355;
    --card-shadow: 0 2px 15px rgba(0,0,0,0.3);
    --link-color: #64b5f6;
    --gradient-start: #834d9b;
    --gradient-end: #d04ed6;
  }

  /* Smooth transition for all elements */
  *, *::before, *::after {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* Theme Toggle Button */
  .theme-toggle {
    position: fixed;
    top: 100px;
    right: 25px;
    z-index: 9999;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .theme-toggle:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  .theme-toggle:active {
    transform: scale(0.95);
  }

  /* Custom scrollbar for dark mode */
  [data-theme="dark"] ::-webkit-scrollbar {
    width: 8px;
  }
  [data-theme="dark"] ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }
  [data-theme="dark"] ::-webkit-scrollbar-thumb {
    background: var(--gradient-start);
    border-radius: 4px;
  }

  /* Override page background */
  body, .page__content, #main, article {
    background-color: var(--bg-primary) !important;
    color: var(--text-primary) !important;
  }

  /* Links */
  a {
    color: var(--link-color) !important;
    transition: color 0.3s ease;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary) !important;
  }

  /* Tables */
  table {
    background-color: var(--bg-secondary) !important;
  }
  th, td {
    border-color: var(--border-color) !important;
    color: var(--text-primary) !important;
  }

  /* Paper boxes */
  .paper-box {
    background-color: var(--bg-secondary) !important;
    box-shadow: var(--card-shadow) !important;
  }

  /* Horizontal rules */
  hr {
    border-color: var(--border-color) !important;
    opacity: 0.5;
  }

  /* Theme-aware cards */
  .theme-card {
    background: var(--bg-secondary) !important;
    color: var(--text-primary) !important;
  }

  .theme-card-alt {
    background: var(--bg-tertiary) !important;
  }

  .theme-text {
    color: var(--text-primary) !important;
  }

  .theme-text-secondary {
    color: var(--text-secondary) !important;
  }

  .theme-text-muted {
    color: var(--text-muted) !important;
  }

  /* Animation for icon switch */
  @keyframes rotateIn {
    from {
      transform: rotate(-180deg) scale(0);
      opacity: 0;
    }
    to {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }

  .theme-toggle span {
    animation: rotateIn 0.3s ease;
  }

  /* Floating particles effect (optional decoration) */
  .theme-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gradient-start);
    opacity: 0;
    animation: float-up 1s ease-out forwards;
  }

  @keyframes float-up {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-100px) scale(0);
    }
  }
</style>

<!-- Theme Toggle Button -->
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark/light mode">
  <span id="theme-icon">🌙</span>
</button>

<!-- Particles container -->
<div class="theme-particles" id="particles"></div>

<script>
  // Check for saved theme preference or default to light
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('theme', theme);
  }

  // Toggle theme with particle effect
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Create particles effect
    createParticles();
    
    applyTheme(newTheme);
  }

  // Create floating particles on toggle
  function createParticles() {
    const container = document.getElementById('particles');
    const button = document.querySelector('.theme-toggle');
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 50) + 'px';
      particle.style.top = (rect.top + rect.height / 2) + 'px';
      particle.style.animationDelay = (Math.random() * 0.3) + 's';
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => particle.remove(), 1000);
    }
  }

  // Apply theme on page load
  document.addEventListener('DOMContentLoaded', function() {
    applyTheme(getPreferredTheme());
  });

  // Also apply immediately in case DOMContentLoaded already fired
  applyTheme(getPreferredTheme());
</script>

<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me

Hi there! 👋 I'm a **First Year PhD student** at the [University of California, Santa Barbara](https://www.ucsb.edu/), [Department of Computer Science](https://www.cs.ucsb.edu/), advised by [Dr. Eric Xin Wang](https://eric-xw.github.io/). I am also in my final year as an undergraduate student at the School of Engineering, University of Liverpool. 

My research interests lie in **trustworthy AI** and the **algorithmic foundations of multimodal large models**, with a focus on:
- 🎯 Enhancing reasoning capabilities
- 🛡️ Improving reliability and robustness  
- 🔍 Advancing interpretability across diverse input modalities

I am always open to collaboration and the exchange of ideas. If you'd like to discuss potential research opportunities or simply connect, please don't hesitate to reach out!

<div style="background: linear-gradient(135deg, var(--gradient-start, #667eea) 0%, var(--gradient-end, #764ba2) 100%); padding: 15px 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
  <p style="color: white; margin: 0; font-size: 15px;">
    📧 <strong>Contact:</strong> <a href="mailto:chengzhi@ucsb.edu" style="color: #ffd700 !important;">chengzhi@ucsb.edu</a>
  </p>
  <p style="color: white; margin: 8px 0 0 0; font-size: 14px;">
    📌 I'm always happy to collaborate with graduate/undergraduate students. Please drop me an email if you want to work with me!
  </p>
</div>

---

# 🔥 News

<div style="max-height: 320px; overflow-y: auto; padding-right: 10px; background: var(--bg-secondary); border-radius: 10px; padding: 15px;">

| Date | News |
|:-----|:-----|
| **2026.01** | 🎉 One paper is accepted by **ICLR 2026** 👉 Check our [paper](https://arxiv.org/pdf/2510.05571) and [project](https://evopresent.github.io/) |
| **2025.09** | 🎉 One paper is accepted by **NeurIPS 2025** - A paper on balancing reasoning and hallucination in multimodal reasoning models 👉 Check our [paper](https://arxiv.org/abs/2505.21523) and [project](https://mlrm-halu.github.io/) |
| **2025.04** | 🎉 One paper is accepted by **ACL 2025** 👉 Check it out [here](https://arxiv.org/abs/2502.11903) |
| **2025.04** | 🎉 One paper is accepted by **CVPR 2025** 👉 Check it out [here](https://openaccess.thecvf.com/content/CVPR2025/html/Tang_Seeing_Far_and_Clearly_Mitigating_Hallucinations_in_MLLMs_with_Attention_CVPR_2025_paper.html) |
| **2025.02** | 🎉 Two papers are accepted by **ICLR 2025** 👉 [MSSBench](https://arxiv.org/abs/2410.06172) & [ANTRP](https://openreview.net/forum?id=zGb4WgCW5i) |
| **2025.01** | 🎉 One paper is accepted by <span style="color:#e74c3c; font-weight:bold;">AAAI 2025 Oral</span> 👉 Check it out [here](https://ojs.aaai.org/index.php/AAAI/article/view/32570) |

</div>

---

# 📝 Selected Publications 

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

# 📖 Education

<div style="display: flex; flex-direction: column; gap: 15px;">

<div class="theme-card" style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: var(--bg-secondary); border-radius: 10px; border-left: 4px solid #3498db; box-shadow: var(--card-shadow);">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p class="theme-text" style="margin: 0; font-weight: bold;">Ph.D. in Computer Science</p>
    <p class="theme-text-secondary" style="margin: 5px 0 0 0;">University of California, Santa Barbara</p>
    <p class="theme-text-muted" style="margin: 5px 0 0 0; font-size: 14px;">📅 2025.09 - 2030.06 (Expected)</p>
  </div>
</div>

<div class="theme-card" style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: var(--bg-secondary); border-radius: 10px; border-left: 4px solid #e74c3c; box-shadow: var(--card-shadow);">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p class="theme-text" style="margin: 0; font-weight: bold;">Bachelor of Engineering</p>
    <p class="theme-text-secondary" style="margin: 5px 0 0 0;">University of Liverpool, United Kingdom</p>
    <p class="theme-text-muted" style="margin: 5px 0 0 0; font-size: 14px;">📅 2021.09 - 2025.07</p>
  </div>
</div>

</div>

---

# 🧑‍⚖️ Academic Services

<div class="theme-card-alt" style="background: var(--bg-tertiary); padding: 20px; border-radius: 10px; margin-top: 10px; box-shadow: var(--card-shadow);">

**Conference Reviewer:**

<span style="display: inline-flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
  <span style="background: #3498db; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(52,152,219,0.3);">AAAI 2025</span>
  <span style="background: #9b59b6; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(155,89,182,0.3);">ICLR 2026</span>
  <span style="background: #e74c3c; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(231,76,60,0.3);">ICML 2026</span>
  <span style="background: #2ecc71; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(46,204,113,0.3);">CVPR 2025</span>
  <span style="background: #f39c12; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(243,156,18,0.3);">ARR 2026</span>
  <span style="background: #1abc9c; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(26,188,156,0.3);">TCSVT</span>
  <span style="background: #34495e; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px; box-shadow: 0 2px 8px rgba(52,73,94,0.3);">ICME 2024-26</span>
</span>

</div>
