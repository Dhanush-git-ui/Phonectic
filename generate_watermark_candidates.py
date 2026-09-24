import os
import subprocess
import time

html_template = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&family=Plus+Jakarta+Sans:wght@800&family=Inter:wght@900&family=Syne:wght@800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 5376px;
    height: 1267px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .container {
    width: 5376px;
    height: 1267px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>
</head>
<body>
  __CONTENT__
</body>
</html>
"""

# Candidate 1: Full-width bold geometric PHONECTIC
c1_content = """
<div class="container" style="justify-content: center;">
  <span style="
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1100px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.035em;
    line-height: 1;
    text-transform: uppercase;
    display: block;
    transform: translateY(20px);
  ">PHONECTIC</span>
</div>
"""

# Candidate 2: Emblem on left + PHONECTIC
c2_content = """
<div class="container" style="justify-content: space-between; padding: 0 120px;">
  <!-- Emblem: Circular metallic medallion with 3D/geometric P -->
  <svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none">
    <circle cx="540" cy="540" r="520" stroke="white" stroke-width="36" opacity="0.9"/>
    <!-- 4 quadrant curved petals like OneFin with metallic gradients -->
    <defs>
      <radialGradient id="g1" cx="0%" cy="0%" r="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#444444" />
      </radialGradient>
      <radialGradient id="g2" cx="100%" cy="100%" r="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#444444" />
      </radialGradient>
    </defs>
    <!-- Background disc -->
    <circle cx="540" cy="540" r="480" fill="white" opacity="0.08"/>
    <!-- Stylized geometric P monogram -->
    <path d="M380 240 H640 C760 240 840 320 840 440 C840 560 760 640 640 640 H520 V840 H380 V240 Z M520 370 V510 H620 C680 510 710 480 710 440 C710 400 680 370 620 370 H520 Z" fill="white"/>
    <!-- Star sparkle in loop -->
    <path d="M620 400 Q620 440 640 440 Q620 440 620 480 Q620 440 600 440 Q620 440 620 400 Z" fill="#121214"/>
  </svg>
  <span style="
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1000px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.04em;
    line-height: 1;
    text-transform: uppercase;
    margin-left: 80px;
    transform: translateY(20px);
  ">PHONECTIC</span>
</div>
"""

# Candidate 3: Emblem as 'O' inside PHONECTIC (P H [Star-O] N E C T I C)
c3_content = """
<div class="container" style="justify-content: center; gap: 30px;">
  <span style="
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1080px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.035em;
    line-height: 1;
    transform: translateY(20px);
  ">PH</span>
  <!-- Metallic Star-O -->
  <svg width="1020" height="1020" viewBox="0 0 1020 1020" fill="none" style="margin: 0 10px; transform: translateY(10px);">
    <defs>
      <linearGradient id="q1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#222222"/>
      </linearGradient>
      <linearGradient id="q2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#333333"/>
      </linearGradient>
    </defs>
    <!-- Top-left quadrant -->
    <path d="M 510 0 A 510 510 0 0 0 0 510 C 180 510 330 360 510 330 Z" fill="url(#q1)"/>
    <!-- Top-right quadrant -->
    <path d="M 1020 510 A 510 510 0 0 0 510 0 C 510 180 660 330 690 510 Z" fill="url(#q2)"/>
    <!-- Bottom-left quadrant -->
    <path d="M 0 510 A 510 510 0 0 0 510 1020 C 510 840 360 690 330 510 Z" fill="url(#q2)"/>
    <!-- Bottom-right quadrant -->
    <path d="M 510 1020 A 510 510 0 0 0 1020 510 C 840 510 690 660 510 690 Z" fill="url(#q1)"/>
    <!-- Center 4-point star -->
    <path d="M 510 330 Q 510 510 690 510 Q 510 510 510 690 Q 510 510 330 510 Q 510 510 510 330 Z" fill="#FFFFFF"/>
  </svg>
  <span style="
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1080px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.035em;
    line-height: 1;
    transform: translateY(20px);
  ">NECTIC</span>
</div>
"""

# Candidate 4: Stylized 'P' Emblem + HONECTIC
c4_content = """
<div class="container" style="justify-content: center; gap: 40px;">
  <!-- Metallic P Medallion -->
  <svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" style="margin-right: 20px; transform: translateY(10px);">
    <defs>
      <linearGradient id="gp1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#2a2a2e"/>
      </linearGradient>
      <linearGradient id="gp2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#404048"/>
      </linearGradient>
    </defs>
    <!-- Outer circle -->
    <circle cx="540" cy="540" r="520" fill="url(#gp1)"/>
    <!-- Stylized negative space cut for P -->
    <path d="M 280 200 H 620 C 760 200 860 290 860 440 C 860 590 760 680 620 680 H 460 V 900 H 280 Z" fill="#000000"/>
    <path d="M 460 340 H 600 C 670 340 720 380 720 440 C 720 500 670 540 600 540 H 460 Z" fill="url(#gp2)"/>
  </svg>
  <span style="
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 1100px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.035em;
    line-height: 1;
    transform: translateY(20px);
  ">HONECTIC</span>
</div>
"""

candidates = [
    ("c1.html", c1_content, "candidate_1.png"),
    ("c2.html", c2_content, "candidate_2.png"),
    ("c3.html", c3_content, "candidate_3.png"),
    ("c4.html", c4_content, "candidate_4.png")
]

for html_file, content, png_file in candidates:
    full_html = html_template.replace("__CONTENT__", content)
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"Wrote {html_file}")
