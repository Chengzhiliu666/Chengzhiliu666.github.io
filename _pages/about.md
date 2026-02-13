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

<style>
  /* Reduce top spacing */
  .page__content:first-child, article:first-child { margin-top: 0 !important; padding-top: 0 !important; }
  #about-me { scroll-margin-top: 80px; }
  
  /* News items styling */
  .news-item { transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .news-item:hover { transform: translateX(5px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

  /* Education & Service cards */
  .edu-card { background: rgba(255,255,255,0.05) !important; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); }
  .service-card { background: rgba(255,255,255,0.05) !important; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); }

  /* Contact card gradient */
  .contact-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4); }

  /* Paper box text color fix */
  .paper-box-text p, .paper-box-text span, .paper-box-text strong { color: #e0e0e0 !important; }
  .paper-box-text a { color: #64b5f6 !important; }

  /* Badge colors */
  .badge-red { background: linear-gradient(135deg, #e74c3c, #c0392b) !important; }
  .badge-purple { background: linear-gradient(135deg, #9b59b6, #8e44ad) !important; }
  .badge-blue { background: linear-gradient(135deg, #3498db, #2980b9) !important; }
  .badge-orange { background: linear-gradient(135deg, #f39c12, #e67e22) !important; }
  .badge-green { background: linear-gradient(135deg, #2ecc71, #27ae60) !important; }
</style>
<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me

Hi there! 👋 I'm a **First Year PhD student** at the [University of California, Santa Barbara](https://www.ucsb.edu/), [Department of Computer Science](https://www.cs.ucsb.edu/), advised by [Dr. Eric Xin Wang](https://eric-xw.github.io/). I am also in my final year as an undergraduate student at the School of Engineering, University of Liverpool. 

My research interests lie in **trustworthy AI** and the **algorithmic foundations of multimodal large models**, with a focus on:
- 🎯 Enhancing reasoning capabilities
- 🛡️ Improving reliability and robustness  
- 🔍 Advancing interpretability across diverse input modalities

I am always open to collaboration and the exchange of ideas. If you'd like to discuss potential research opportunities or simply connect, please don't hesitate to reach out!

<div class="contact-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);">
  <p style="color: white; margin: 0; font-size: 15px;">
    📧 <strong>Contact:</strong> <a href="mailto:chengzhi@ucsb.edu" style="color: #ffd700 !important; text-decoration: none;">chengzhi@ucsb.edu</a>
  </p>
  <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">
    📌 I'm always happy to collaborate with graduate/undergraduate students. Please drop me an email if you want to work with me!
  </p>
</div>

---

# 🔥 News

<div class="news-container" style="max-height: 350px; overflow-y: auto; padding: 5px 15px 5px 5px;">

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #e74c3c;">
  <span style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2026.01</span>
  <span style="color: #e0e0e0; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#fff;">ICLR 2026</strong> 👉 Check our <a href="https://arxiv.org/pdf/2510.05571" style="color:#64b5f6;">paper</a> and <a href="https://evopresent.github.io/" style="color:#64b5f6;">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #9b59b6;">
  <span style="background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.09</span>
  <span style="color: #e0e0e0; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#fff;">NeurIPS 2025</strong> - Balancing reasoning and hallucination in multimodal reasoning models 👉 <a href="https://arxiv.org/abs/2505.21523" style="color:#64b5f6;">paper</a> | <a href="https://mlrm-halu.github.io/" style="color:#64b5f6;">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #3498db;">
  <span style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.04</span>
  <span style="color: #e0e0e0; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#fff;">ACL 2025</strong> 👉 Check it out <a href="https://arxiv.org/abs/2502.11903" style="color:#64b5f6;">here</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #2ecc71;">
  <span style="background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.04</span>
  <span style="color: #e0e0e0; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#fff;">CVPR 2025</strong> 👉 Check it out <a href="https://openaccess.thecvf.com/content/CVPR2025/html/Tang_Seeing_Far_and_Clearly_Mitigating_Hallucinations_in_MLLMs_with_Attention_CVPR_2025_paper.html" style="color:#64b5f6;">here</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #3498db;">
  <span style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.02</span>
  <span style="color: #e0e0e0; line-height: 1.6;">🎉 Two papers are accepted by <strong style="color:#fff;">ICLR 2025</strong> 👉 <a href="https://arxiv.org/abs/2410.06172" style="color:#64b5f6;">MSSBench</a> & <a href="https://openreview.net/forum?id=zGb4WgCW5i" style="color:#64b5f6;">ANTRP</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #f39c12;">
  <span style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.01</span>
  <span style="color: #e0e0e0; line-height: 1.6;">🎉 One paper is accepted by <span style="color:#e74c3c; font-weight:bold;">AAAI 2025 Oral</span> 👉 Check it out <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32570" style="color:#64b5f6;">here</a></span>
</div>

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

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid #3498db;">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: bold; color: #ffffff;">Ph.D. in Computer Science</p>
    <p style="margin: 5px 0 0 0; color: #a0a0a0;">University of California, Santa Barbara</p>
    <p style="margin: 5px 0 0 0; font-size: 14px; color: #808080;">📅 2025.09 - 2030.06 (Expected)</p>
  </div>
</div>

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; border-left: 4px solid #e74c3c;">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: bold; color: #ffffff;">Bachelor of Engineering</p>
    <p style="margin: 5px 0 0 0; color: #a0a0a0;">University of Liverpool, United Kingdom</p>
    <p style="margin: 5px 0 0 0; font-size: 14px; color: #808080;">📅 2021.09 - 2025.07</p>
  </div>
</div>

</div>

---

# 🧑‍⚖️ Academic Services

<div class="service-card" style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-top: 10px;">

<p style="color: #ffffff; font-weight: bold; margin-bottom: 12px;">Conference Reviewer:</p>

<span style="display: inline-flex; flex-wrap: wrap; gap: 8px;">
  <span style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(52,152,219,0.4);">AAAI 2025</span>
  <span style="background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(155,89,182,0.4);">ICLR 2026</span>
  <span style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(231,76,60,0.4);">ICML 2026</span>
  <span style="background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(46,204,113,0.4);">CVPR 2025</span>
  <span style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(243,156,18,0.4);">ARR 2026</span>
  <span style="background: linear-gradient(135deg, #1abc9c, #16a085); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(26,188,156,0.4);">TCSVT</span>
  <span style="background: linear-gradient(135deg, #34495e, #2c3e50); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(52,73,94,0.4);">ICME 2024-26</span>
</span>

</div>
