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

<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me

Hi there! 👋 I'm a **First Year PhD student** at the [University of California, Santa Barbara](https://www.ucsb.edu/), [Department of Computer Science](https://www.cs.ucsb.edu/), advised by [Dr. Eric Xin Wang](https://eric-xw.github.io/). I am also in my final year as an undergraduate student at the School of Engineering, University of Liverpool. 

My research interests lie in **trustworthy AI** and the **algorithmic foundations of multimodal large models**, with a focus on:
- 🎯 Enhancing reasoning capabilities
- 🛡️ Improving reliability and robustness  
- 🔍 Advancing interpretability across diverse input modalities

I am always open to collaboration and the exchange of ideas. If you'd like to discuss potential research opportunities or simply connect, please don't hesitate to reach out!

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px 20px; border-radius: 10px; margin: 20px 0;">
  <p style="color: white; margin: 0; font-size: 15px;">
    📧 <strong>Contact:</strong> <a href="mailto:chengzhi@ucsb.edu" style="color: #ffd700;">chengzhi@ucsb.edu</a>
  </p>
  <p style="color: white; margin: 8px 0 0 0; font-size: 14px;">
    📌 I'm always happy to collaborate with graduate/undergraduate students. Please drop me an email if you want to work with me!
  </p>
</div>

---

# 🔥 News

<div style="max-height: 320px; overflow-y: auto; padding-right: 10px;">

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

<div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #3498db;">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: bold; color: #2c3e50;">Ph.D. in Computer Science</p>
    <p style="margin: 5px 0 0 0; color: #7f8c8d;">University of California, Santa Barbara</p>
    <p style="margin: 5px 0 0 0; color: #95a5a6; font-size: 14px;">📅 2025.09 - 2030.06 (Expected)</p>
  </div>
</div>

<div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #e74c3c;">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: bold; color: #2c3e50;">Bachelor of Engineering</p>
    <p style="margin: 5px 0 0 0; color: #7f8c8d;">University of Liverpool, United Kingdom</p>
    <p style="margin: 5px 0 0 0; color: #95a5a6; font-size: 14px;">📅 2021.09 - 2025.07</p>
  </div>
</div>

</div>

---

# 🧑‍⚖️ Academic Services

<div style="background: #f0f7ff; padding: 20px; border-radius: 10px; margin-top: 10px;">

**Conference Reviewer:**

<span style="display: inline-flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
  <span style="background: #3498db; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">AAAI 2025</span>
  <span style="background: #9b59b6; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">ICLR 2026</span>
  <span style="background: #e74c3c; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">ICML 2026</span>
  <span style="background: #2ecc71; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">CVPR 2025</span>
  <span style="background: #f39c12; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">ARR 2026</span>
  <span style="background: #1abc9c; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">TCSVT</span>
  <span style="background: #34495e; color: white; padding: 4px 12px; border-radius: 15px; font-size: 13px;">ICME 2024-26</span>
</span>

</div>
