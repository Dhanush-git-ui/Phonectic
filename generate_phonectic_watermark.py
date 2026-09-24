import subprocess
import os
from PIL import Image
import numpy as np

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cwd = os.path.abspath(".")

# Design A: Full width massive PHONECTIC (similar to ONEFIN typography height)
svg_a = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5376 1267" width="5376" height="1267">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&amp;display=swap');
      .watermark-text {
        font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 900;
        fill: #FFFFFF;
        text-anchor: middle;
      }
    </style>
  </defs>
  <text x="2688" y="1040" font-size="1180" class="watermark-text" textLength="5100" lengthAdjust="spacingAndGlyphs">PHONECTIC</text>
</svg>"""

# Design B: Iconic Circular Emblem on left + PHONECTIC (Exact OneFin layout symmetry)
# In OneFin: Circle diameter was ~1234px on left, then letters on right.
svg_b = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5376 1267" width="5376" height="1267">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&amp;display=swap');
      .watermark-text {
        font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 900;
        fill: #FFFFFF;
      }
    </style>
    <!-- Metallic gradient for the emblem quadrants -->
    <linearGradient id="metal1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#CCCCCC"/>
      <stop offset="100%" stop-color="#333333"/>
    </linearGradient>
    <linearGradient id="metal2" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#999999"/>
      <stop offset="100%" stop-color="#222222"/>
    </linearGradient>
  </defs>

  <!-- Left Iconic Phonectic Brand Monogram Medallion (Center (630, 633), radius 580) -->
  <g transform="translate(60, 30)">
    <!-- Outer precision rim -->
    <circle cx="580" cy="600" r="580" fill="url(#metal1)"/>
    <circle cx="580" cy="600" r="530" fill="#121214"/>
    
    <!-- Inner glowing disc -->
    <circle cx="580" cy="600" r="480" fill="url(#metal2)"/>
    
    <!-- Bold 3D Geometric 'P' cutout in center -->
    <path d="M 440 290 H 680 C 790 290 870 370 870 480 C 870 590 790 670 680 670 H 550 V 910 H 440 Z M 550 390 V 570 H 660 C 720 570 760 530 760 480 C 760 430 720 390 660 390 Z" fill="#FFFFFF"/>
    
    <!-- 4-point star aperture in P loop -->
    <path d="M 660 430 Q 660 480 710 480 Q 660 480 660 530 Q 660 480 610 480 Q 660 480 660 430 Z" fill="#121214"/>
  </g>

  <!-- PHONECTIC Wordmark on right -->
  <text x="1380" y="1040" font-size="1180" class="watermark-text" textLength="3850" lengthAdjust="spacingAndGlyphs">PHONECTIC</text>
</svg>"""

# Design C: OneFin Star-Circle as the 'O' in PHONECTIC (P H [Star] N E C T I C)
svg_c = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5376 1267" width="5376" height="1267">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&amp;display=swap');
      .watermark-text {
        font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 900;
        fill: #FFFFFF;
      }
    </style>
    <linearGradient id="q1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#111111"/>
    </linearGradient>
    <linearGradient id="q2" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#222222"/>
    </linearGradient>
  </defs>

  <!-- 'PH' -->
  <text x="80" y="1040" font-size="1180" class="watermark-text" textLength="1150" lengthAdjust="spacingAndGlyphs">PH</text>

  <!-- The OneFin Iconic Star-Circle as 'O' -->
  <g transform="translate(1320, 80)">
    <!-- 4 quadrants (diameter 1100) -->
    <!-- Top-left -->
    <path d="M 550 0 A 550 550 0 0 0 0 550 C 190 550 360 380 550 360 Z" fill="url(#q1)"/>
    <!-- Top-right -->
    <path d="M 1100 550 A 550 550 0 0 0 550 0 C 550 190 720 360 740 550 Z" fill="url(#q2)"/>
    <!-- Bottom-left -->
    <path d="M 0 550 A 550 550 0 0 0 550 1100 C 550 910 380 740 360 550 Z" fill="url(#q2)"/>
    <!-- Bottom-right -->
    <path d="M 550 1100 A 550 550 0 0 0 1100 550 C 910 550 740 720 550 740 Z" fill="url(#q1)"/>
    <!-- Center white 4-point star -->
    <path d="M 550 360 Q 550 550 740 550 Q 550 550 550 740 Q 550 550 360 550 Q 550 550 550 360 Z" fill="#FFFFFF"/>
  </g>

  <!-- 'NECTIC' -->
  <text x="2500" y="1040" font-size="1180" class="watermark-text" textLength="2800" lengthAdjust="spacingAndGlyphs">NECTIC</text>
</svg>"""

with open("test_a.svg", "w", encoding="utf-8") as f: f.write(svg_a)
with open("test_b.svg", "w", encoding="utf-8") as f: f.write(svg_b)
with open("test_c.svg", "w", encoding="utf-8") as f: f.write(svg_c)

print("Generated test_a.svg, test_b.svg, test_c.svg")
