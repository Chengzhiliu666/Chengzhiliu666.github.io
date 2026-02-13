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

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

<style>
  /* ========== CSS Variables for Theme ========== */
  :root {
    --bg-primary: #fdf6f0;
    --bg-secondary: #f8f0e8;
    --bg-card: #fff9f5;
    --text-primary: #2c2c2c;
    --text-secondary: #4a4a4a;
    --text-muted: #777;
    --border-color: #e8ddd4;
    --shadow-color: rgba(139, 90, 43, 0.1);
    --accent-glow: rgba(163, 94, 94, 0.3);
    --link-color: #a35e5e;
    --link-hover: #8b4545;
    --font-heading: 'Crimson Pro', Georgia, 'Times New Roman', serif;
    --font-body: 'Source Sans Pro', 'Segoe UI', Tahoma, sans-serif;
  }

  [data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #242424;
    --bg-card: #2d2d2d;
    --text-primary: #e8e0d8;
    --text-secondary: #c4bbb2;
    --text-muted: #9a9088;
    --border-color: #3d3d3d;
    --shadow-color: rgba(0,0,0,0.4);
    --accent-glow: rgba(200, 150, 150, 0.3);
    --link-color: #d4a0a0;
    --link-hover: #e8b8b8;
  }

  /* ========== Global Font Styles ========== */
  body, .page__content, .author__bio, p, li, span {
    font-family: var(--font-body) !important;
    font-size: 16px;
    line-height: 1.7;
  }
  
  h1, h2, h3, h4, h5, h6,
  .page__title, .archive__item-title {
    font-family: var(--font-heading) !important;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  
  h1 { font-size: 2.2em !important; }
  h2 { font-size: 1.8em !important; }
  h3 { font-size: 1.4em !important; }
  
  /* ========== Section Headers with Decoration ========== */
  .page__content > h1 {
    position: relative;
    display: inline-block;
    padding-bottom: 12px;
  }
  .page__content > h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #a35e5e 0%, #c98b6e 100%);
    border-radius: 2px;
  }
  
  /* Horizontal rule styling */
  hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(163, 94, 94, 0.3) 20%, rgba(163, 94, 94, 0.3) 80%, transparent 100%);
    margin: 40px 0;
  }
  
  [data-theme="dark"] hr {
    background: linear-gradient(90deg, transparent 0%, rgba(200, 150, 150, 0.2) 20%, rgba(200, 150, 150, 0.2) 80%, transparent 100%);
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

  /* ========== Body Background with Texture ========== */
  body, html {
    background: var(--bg-primary) !important;
  }
  
  /* Main background with gradient and texture */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: 
      /* Subtle grain texture */
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"),
      /* Warm gradient */
      linear-gradient(135deg, #fdf6f0 0%, #f5ebe0 50%, #faf4ed 100%);
    opacity: 0.4;
  }
  
  /* Decorative corner accents */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    z-index: -1;
    background: radial-gradient(circle at top right, rgba(163, 94, 94, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  .page, .page__content {
    background: transparent !important;
  }
  
  /* Subtle geometric decoration */
  .page__content::before {
    content: '';
    position: fixed;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 300px;
    z-index: -1;
    background: radial-gradient(circle at bottom left, rgba(200, 155, 110, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  /* Dark mode background adjustments */
  [data-theme="dark"] body::before {
    background: 
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"),
      linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #1f1f1f 100%);
    opacity: 0.3;
  }
  [data-theme="dark"] body::after {
    background: radial-gradient(circle at top right, rgba(200, 150, 150, 0.06) 0%, transparent 60%);
  }
  [data-theme="dark"] .page__content::before {
    background: radial-gradient(circle at bottom left, rgba(180, 140, 100, 0.05) 0%, transparent 50%);
  }

  /* ========== Theme Toggle Button ========== */
  .theme-toggle {
    position: fixed;
    top: 80px;
    right: 25px;
    z-index: 9999;
    background: linear-gradient(135deg, #a35e5e 0%, #8b4545 100%);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(163, 94, 94, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }
  .theme-toggle:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 6px 25px rgba(163, 94, 94, 0.6);
  }

  /* ========== Floating Particles ========== */
  .particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }
  .particle {
    position: absolute;
    border-radius: 50%;
    animation: float-particle linear infinite;
    opacity: 0.35;
    filter: blur(1px);
  }
  @keyframes float-particle {
    0% { transform: translateY(100vh) rotate(0deg) scale(0.8); opacity: 0; }
    15% { opacity: 0.35; }
    85% { opacity: 0.35; }
    100% { transform: translateY(-100vh) rotate(360deg) scale(1.2); opacity: 0; }
  }
  
  /* Subtle floating shapes */
  .deco-shape {
    position: fixed;
    pointer-events: none;
    z-index: -1;
    opacity: 0.04;
  }
  .deco-shape-1 {
    top: 20%;
    left: 10%;
    width: 120px;
    height: 120px;
    border: 2px solid #a35e5e;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morph 15s ease-in-out infinite;
  }
  .deco-shape-2 {
    bottom: 30%;
    right: 15%;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #c98b6e 0%, #a35e5e 100%);
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
  }
  @keyframes morph {
    0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  /* ========== Reduce top spacing ========== */
  .page__content { margin-top: -50px !important; padding-top: 0 !important; }
  h1:first-of-type { margin-top: -20px !important; padding-top: 0 !important; }
  .author__avatar { margin-top: -30px !important; }

  /* ========== Scroll Reveal Animation ========== */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* ========== Glowing Cards ========== */
  .glow-card {
    position: relative;
    transition: all 0.3s ease;
  }
  .glow-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #a35e5e, #c98b6e, #d4a574, #8b4545, #a35e5e);
    background-size: 400%;
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: glow-rotate 3s linear infinite;
  }
  .glow-card:hover::before {
    opacity: 1;
  }
  @keyframes glow-rotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* ========== Typing Effect ========== */
  .typing-text {
    display: inline-block;
    overflow: hidden;
    border-right: 3px solid #a35e5e;
    white-space: nowrap;
    animation: typing 3s steps(40) 1s forwards, blink-caret 0.75s step-end infinite;
  }
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #a35e5e; }
  }

  /* ========== News items styling ========== */
  .news-item { 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 252, 248, 0.7) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(232, 221, 212, 0.5);
  }
  .news-item:hover { 
    transform: translateX(8px) scale(1.01); 
    box-shadow: 0 12px 35px rgba(139, 90, 43, 0.12);
    background: rgba(255, 255, 255, 0.85) !important;
  }
  .news-item > span:last-child { color: var(--text-primary) !important; }
  
  [data-theme="dark"] .news-item {
    background: rgba(45, 45, 45, 0.7) !important;
    border: 1px solid rgba(61, 61, 61, 0.5);
  }
  [data-theme="dark"] .news-item:hover {
    background: rgba(55, 55, 55, 0.85) !important;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }

  /* ========== Education & Service cards ========== */
  .edu-card { 
    background: rgba(255, 252, 248, 0.8) !important; 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(232, 221, 212, 0.6);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  .edu-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .edu-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(139, 90, 43, 0.15);
  }
  .edu-card:hover::before {
    opacity: 1;
  }
  
  [data-theme="dark"] .edu-card {
    background: rgba(45, 45, 45, 0.8) !important;
    border: 1px solid rgba(61, 61, 61, 0.6);
  }
  [data-theme="dark"] .edu-card:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  }
  [data-theme="dark"] .edu-card::before {
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 100%);
  }
  
  .service-card { 
    background: rgba(248, 240, 232, 0.7) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(232, 221, 212, 0.5);
  }
  
  [data-theme="dark"] .service-card {
    background: rgba(36, 36, 36, 0.8) !important;
    border: 1px solid rgba(61, 61, 61, 0.5);
  }

  /* ========== Paper boxes animation ========== */
  .paper-box {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 252, 248, 0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(232, 221, 212, 0.4);
    border-radius: 12px;
    overflow: hidden;
  }
  .paper-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(139, 90, 43, 0.18);
    background: rgba(255, 255, 255, 0.8);
  }
  .paper-box-image {
    overflow: hidden;
    border-radius: 8px;
  }
  .paper-box-image img {
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .paper-box:hover .paper-box-image img {
    transform: scale(1.08);
  }
  
  [data-theme="dark"] .paper-box {
    background: rgba(45, 45, 45, 0.6);
    border: 1px solid rgba(61, 61, 61, 0.4);
  }
  [data-theme="dark"] .paper-box:hover {
    background: rgba(55, 55, 55, 0.8);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }

  /* ========== Badge colors ========== */
  .badge-red { background: linear-gradient(135deg, #e74c3c, #c0392b) !important; }
  .badge-purple { background: linear-gradient(135deg, #9b59b6, #8e44ad) !important; }
  .badge-blue { background: linear-gradient(135deg, #3498db, #2980b9) !important; }
  .badge-orange { background: linear-gradient(135deg, #f39c12, #e67e22) !important; }
  .badge-green { background: linear-gradient(135deg, #2ecc71, #27ae60) !important; }

  /* ========== Reviewer badges bounce ========== */
  .service-card span[style*="border-radius: 20px"] {
    transition: all 0.3s ease;
    cursor: default;
  }
  .service-card span[style*="border-radius: 20px"]:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
  
  /* ========== Custom Scrollbar ========== */
  .news-container::-webkit-scrollbar {
    width: 6px;
  }
  .news-container::-webkit-scrollbar-track {
    background: rgba(163, 94, 94, 0.1);
    border-radius: 3px;
  }
  .news-container::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #c98b6e 0%, #a35e5e 100%);
    border-radius: 3px;
  }
  .news-container::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a35e5e 0%, #8b4545 100%);
  }
  
  [data-theme="dark"] .news-container::-webkit-scrollbar-track {
    background: rgba(200, 150, 150, 0.1);
  }
  [data-theme="dark"] .news-container::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8b6b6b 0%, #6b4545 100%);
  }
  
  /* ========== Selection Style ========== */
  ::selection {
    background: rgba(163, 94, 94, 0.3);
    color: var(--text-primary);
  }
  [data-theme="dark"] ::selection {
    background: rgba(200, 150, 150, 0.3);
  }
  
  /* ========== News Container Decoration ========== */
  .news-container {
    position: relative;
    border-radius: 12px;
    background: rgba(255, 252, 248, 0.3);
    border: 1px solid rgba(232, 221, 212, 0.3);
  }
  [data-theme="dark"] .news-container {
    background: rgba(45, 45, 45, 0.3);
    border: 1px solid rgba(61, 61, 61, 0.3);
  }

  /* ========== Author Profile Sidebar ========== */
  .author__avatar img {
    border: 3px solid rgba(163, 94, 94, 0.3);
    box-shadow: 0 8px 25px rgba(139, 90, 43, 0.15);
    transition: all 0.3s ease;
  }
  .author__avatar img:hover {
    border-color: rgba(163, 94, 94, 0.5);
    box-shadow: 0 12px 35px rgba(139, 90, 43, 0.2);
    transform: scale(1.02);
  }
  .author__name {
    font-family: var(--font-heading) !important;
    font-size: 1.4em !important;
    font-weight: 600 !important;
    color: var(--text-primary) !important;
  }
  .author__bio {
    font-family: var(--font-body) !important;
    color: var(--text-secondary) !important;
    font-style: italic;
    line-height: 1.6;
  }
  .author__urls-wrapper a {
    font-family: var(--font-body) !important;
    transition: all 0.2s ease;
  }
  .author__urls-wrapper a:hover {
    padding-left: 5px;
  }
  
  [data-theme="dark"] .author__avatar img {
    border-color: rgba(200, 150, 150, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
  [data-theme="dark"] .author__avatar img:hover {
    border-color: rgba(200, 150, 150, 0.5);
  }

  /* ========== Masthead/Navigation ========== */
  .masthead {
    background: rgba(248, 240, 232, 0.9) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(232, 221, 212, 0.5);
  }
  .masthead__menu-item {
    font-family: var(--font-body) !important;
    transition: color 0.2s ease;
  }
  .greedy-nav a {
    transition: all 0.2s ease !important;
  }
  .greedy-nav a:hover {
    color: var(--link-color) !important;
  }
  
  [data-theme="dark"] .masthead {
    background: rgba(36, 36, 36, 0.9) !important;
    border-bottom: 1px solid rgba(61, 61, 61, 0.5);
  }

  /* ========== Strong/Bold text ========== */
  strong, b {
    font-weight: 700;
    color: var(--text-primary);
  }

  /* ========== Dark mode specific adjustments ========== */
  [data-theme="dark"] body,
  [data-theme="dark"] .page__content {
    background: var(--bg-primary) !important;
    color: var(--text-primary) !important;
  }
  [data-theme="dark"] h1, 
  [data-theme="dark"] h2, 
  [data-theme="dark"] h3 {
    color: var(--text-primary) !important;
  }
  [data-theme="dark"] p,
  [data-theme="dark"] li {
    color: var(--text-secondary) !important;
  }
  [data-theme="dark"] a {
    color: var(--link-color) !important;
  }
  [data-theme="dark"] a:hover {
    color: var(--link-hover) !important;
  }
  [data-theme="dark"] .masthead {
    background: var(--bg-secondary) !important;
  }
  [data-theme="dark"] .author__content,
  [data-theme="dark"] .author__bio,
  [data-theme="dark"] .author__name {
    color: var(--text-secondary) !important;
  }
  [data-theme="dark"] .sidebar,
  [data-theme="dark"] .author__avatar {
    background: transparent !important;
  }

  /* ========== Smooth scroll ========== */
  html {
    scroll-behavior: smooth;
  }

  /* ========== Back to top button ========== */
  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 25px;
    z-index: 9999;
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    opacity: 0;
    visibility: hidden;
  }
  .back-to-top.visible {
    opacity: 1;
    visibility: visible;
  }
  .back-to-top:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(46, 204, 113, 0.6);
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

<!-- Floating Particles Background -->
<div class="particles-container" id="particles"></div>

<!-- Decorative Shapes -->
<div class="deco-shape deco-shape-1"></div>
<div class="deco-shape deco-shape-2"></div>

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

// ========== Floating Particles ==========
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const colors = ['#a35e5e', '#c98b6e', '#d4a574', '#b8926a', '#d9b896', '#e8d4c4'];
  
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 6 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDuration = (Math.random() * 30 + 25) + 's';
    particle.style.animationDelay = (Math.random() * 15) + 's';
    container.appendChild(particle);
  }
}

// ========== Scroll Reveal ==========
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

// ========== Back to Top ==========
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  
  // Add reveal class to sections
  document.querySelectorAll('.paper-box, .edu-card, .news-item').forEach(el => {
    el.classList.add('reveal');
  });
  
  // Initial check
  revealOnScroll();
  toggleBackToTop();
});

window.addEventListener('scroll', function() {
  revealOnScroll();
  toggleBackToTop();
});
</script>
<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me

Hi there! 👋 I'm a **First Year PhD student** at the [University of California, Santa Barbara NLP Group](http://nlp.cs.ucsb.edu/), [Department of Computer Science](https://www.cs.ucsb.edu/), advised by [Dr. Eric Xin Wang](https://eric-xw.github.io/). I graduated from the School of Engineering at the University of Liverpool.

My research interests lie in **trustworthy AI** and the **algorithmic foundations of multimodal large models**, with a focus on:
- 🎯 Multimodal reasoning and visual grounding
- 🛡️ Reliability and robustness of LLMs and VLMs
- 🔍 Autonomous agent frameworks with self-evolution

I am always open to collaboration and the exchange of ideas. If you'd like to discuss potential research opportunities or simply connect, please don't hesitate to reach out!

<div class="contact-card" style="position: relative; background: linear-gradient(135deg, rgba(163, 94, 94, 0.95) 0%, rgba(139, 69, 69, 0.95) 100%); padding: 20px 25px; border-radius: 16px; margin: 25px 0; box-shadow: 0 8px 32px rgba(163, 94, 94, 0.35), inset 0 1px 0 rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); overflow: hidden;">
  <div style="position: absolute; top: -50%; right: -20%; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); pointer-events: none;"></div>
  <p style="color: white; margin: 0; font-size: 15px; font-family: var(--font-body); position: relative; z-index: 1;">
    📧 <strong>Contact:</strong> <a href="mailto:chengzhi@ucsb.edu" style="color: #ffd9b3 !important; text-decoration: none; border-bottom: 1px dashed rgba(255,217,179,0.5); padding-bottom: 1px;">chengzhi@ucsb.edu</a>
  </p>
  <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; font-family: var(--font-body); line-height: 1.6; position: relative; z-index: 1;">
    📌 I'm always happy to collaborate with graduate/undergraduate students. Please drop me an email if you want to work with me!
  </p>
</div>

---

# 🔥 News

<div class="news-container" style="max-height: 350px; overflow-y: auto; padding: 5px 15px 5px 5px;">

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #e74c3c;">
  <span style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2026.01</span>
  <span style="color: #000 !important; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#e74c3c;">ICLR 2026</strong> 👉 Check our <a href="https://arxiv.org/pdf/2510.05571">paper</a> and <a href="https://evopresent.github.io/">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #9b59b6;">
  <span style="background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.09</span>
  <span style="color: #000 !important; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#9b59b6;">NeurIPS 2025</strong> - Balancing reasoning and hallucination in multimodal reasoning models 👉 <a href="https://arxiv.org/abs/2505.21523">paper</a> | <a href="https://mlrm-halu.github.io/">project</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #3498db;">
  <span style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.04</span>
  <span style="color: #000 !important; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#3498db;">ACL 2025</strong> 👉 Check it out <a href="https://arxiv.org/abs/2502.11903">here</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #2ecc71;">
  <span style="background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.04</span>
  <span style="color: #000 !important; line-height: 1.6;">🎉 One paper is accepted by <strong style="color:#2ecc71;">CVPR 2025</strong> 👉 Check it out <a href="https://openaccess.thecvf.com/content/CVPR2025/html/Tang_Seeing_Far_and_Clearly_Mitigating_Hallucinations_in_MLLMs_with_Attention_CVPR_2025_paper.html">here</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #3498db;">
  <span style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.02</span>
  <span style="color: #000 !important; line-height: 1.6;">🎉 Two papers are accepted by <strong style="color:#3498db;">ICLR 2025</strong> 👉 <a href="https://arxiv.org/abs/2410.06172">MSSBench</a> & <a href="https://openreview.net/forum?id=zGb4WgCW5i">ANTRP</a></span>
</div>

<div class="news-item" style="display: flex; align-items: flex-start; gap: 15px; padding: 12px 15px; margin-bottom: 10px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #f39c12;">
  <span style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-weight: bold; white-space: nowrap;">2025.01</span>
  <span style="color: #000 !important; line-height: 1.6;">🎉 One paper is accepted by <span style="color:#e74c3c; font-weight:bold;">AAAI 2025 Oral</span> 👉 Check it out <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32570">here</a></span>
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

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #3498db;">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: bold; color: #2c3e50;">Ph.D. in Computer Science</p>
    <p style="margin: 5px 0 0 0; color: #555;">University of California, Santa Barbara</p>
    <p style="margin: 5px 0 0 0; font-size: 14px; color: #888;">📅 2025.09 - 2030.06 (Expected)</p>
  </div>
</div>

<div class="edu-card" style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #e74c3c;">
  <div style="font-size: 30px;">🎓</div>
  <div>
    <p style="margin: 0; font-weight: bold; color: #2c3e50;">Bachelor of Engineering</p>
    <p style="margin: 5px 0 0 0; color: #555;">University of Liverpool, United Kingdom</p>
    <p style="margin: 5px 0 0 0; font-size: 14px; color: #888;">📅 2021.09 - 2025.07</p>
  </div>
</div>

</div>

---

# 🧑‍⚖️ Academic Services

<div class="service-card" style="background: #f0f7ff; padding: 20px; border-radius: 10px; margin-top: 10px;">

<p style="color: #2c3e50; font-weight: bold; margin-bottom: 12px;">Conference Reviewer:</p>

<span style="display: inline-flex; flex-wrap: wrap; gap: 8px;">
  <span style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(52,152,219,0.3);">AAAI 2025</span>
  <span style="background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(155,89,182,0.3);">ICLR 2026</span>
  <span style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(231,76,60,0.3);">ICML 2026</span>
  <span style="background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(46,204,113,0.3);">CVPR 2025</span>
  <span style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(243,156,18,0.3);">ARR 2026</span>
  <span style="background: linear-gradient(135deg, #1abc9c, #16a085); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(26,188,156,0.3);">TCSVT</span>
  <span style="background: linear-gradient(135deg, #34495e, #2c3e50); color: white; padding: 5px 14px; border-radius: 20px; font-size: 13px; box-shadow: 0 3px 10px rgba(52,73,94,0.3);">ICME 2024-26</span>
</span>

</div>
