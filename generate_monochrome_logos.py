import os

assets_dir = os.path.abspath("public/assets")

logos = {
    "college-bits.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- BITS Pilani Emblem: Monochrome White Gear & Torch -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <circle cx="18" cy="18" r="14.5" stroke="#FFFFFF" stroke-width="0.8" stroke-dasharray="2 1.5" stroke-opacity="0.6"/>
    <!-- Gear ticks -->
    <path d="M18 1v2.5M18 32.5v2.5M1 18h2.5M32.5 18h2.5M6 6l1.8 1.8M28.2 28.2l1.8 1.8M6 30l1.8-1.8M28.2 7.8l1.8-1.8" stroke="#FFFFFF" stroke-width="1.6" stroke-opacity="0.8"/>
    <!-- Torch & Flame -->
    <path d="M17 13h2v10h-2z" fill="#FFFFFF"/>
    <path d="M18 7c1.5 1.6 2 2.8 1.2 4.4-.6 1.2-1.8 1.2-2.4 0-.6-1.2 0-2.8 1.2-4.4z" fill="#FFFFFF"/>
    <!-- Open Book -->
    <path d="M11 23c2.4-.8 4.8 0 7 .8 2.2-.8 4.6-1.6 7-.8v-3.2c-2.4-.8-4.8 0-7 .8-2.2-.8-4.6-1.6-7-.8v3.2z" fill="#FFFFFF" fill-opacity="0.9"/>
    <!-- Motto ribbon -->
    <path d="M9 28c4.5-1.2 13.5-1.2 18 0l-1.6 2.4c-4-.8-10.8-.8-14.8 0l-1.6-2.4z" fill="#FFFFFF" fill-opacity="0.75"/>
  </g>
  <!-- Typography: Pure Monochrome White -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">BITS PILANI</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">HYDERABAD CAMPUS</text>
</svg>""",

    "college-iiith.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- IIIT-H Emblem: Monochrome White Tech Hexagon -->
  <g transform="translate(6, 6)">
    <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <polygon points="18,7 27,12 27,24 18,29 9,24 9,12" stroke="#FFFFFF" stroke-width="0.8" stroke-opacity="0.5"/>
    <circle cx="18" cy="18" r="4.5" fill="#FFFFFF"/>
    <circle cx="18" cy="2" r="2.2" fill="#FFFFFF"/>
    <circle cx="32" cy="10" r="2.2" fill="#FFFFFF"/>
    <circle cx="32" cy="26" r="2.2" fill="#FFFFFF"/>
    <circle cx="18" cy="34" r="2.2" fill="#FFFFFF"/>
    <circle cx="4" cy="26" r="2.2" fill="#FFFFFF"/>
    <circle cx="4" cy="10" r="2.2" fill="#FFFFFF"/>
    <line x1="18" y1="18" x2="18" y2="4" stroke="#FFFFFF" stroke-width="1.2" stroke-opacity="0.7"/>
    <line x1="18" y1="18" x2="30" y2="25" stroke="#FFFFFF" stroke-width="1.2" stroke-opacity="0.7"/>
    <line x1="18" y1="18" x2="6" y2="25" stroke="#FFFFFF" stroke-width="1.2" stroke-opacity="0.7"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">IIIT HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">RESEARCH INSTITUTE</text>
</svg>""",

    "college-cbit.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- CBIT Emblem: Monochrome Sunburst Crest -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- 8 Sun Rays -->
    <g stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" stroke-opacity="0.75">
      <line x1="18" y1="3" x2="18" y2="6"/>
      <line x1="18" y1="30" x2="18" y2="33"/>
      <line x1="3" y1="18" x2="6" y2="18"/>
      <line x1="30" y1="18" x2="33" y2="18"/>
      <line x1="7.4" y1="7.4" x2="9.5" y2="9.5"/>
      <line x1="26.5" y1="26.5" x2="28.6" y2="28.6"/>
      <line x1="7.4" y1="28.6" x2="9.5" y2="26.5"/>
      <line x1="26.5" y1="9.5" x2="28.6" y2="7.4"/>
    </g>
    <!-- Inner Circle -->
    <circle cx="18" cy="18" r="11" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.8"/>
    <!-- Flame of Knowledge -->
    <path d="M18 10c1 1.3 1.8 2.4 1 3.7-.5 1-1.5 1-2 0-.5-1 0-2.4 1-3.7z" fill="#FFFFFF"/>
    <!-- Open Book -->
    <path d="M13 21c1.8-.7 3.6 0 5 .7 1.4-.7 3.2-1.4 5-.7v-3.2c-1.8-.7-3.6 0-5 .7-1.4-.7-3.2-1.4-5-.7v3.2z" fill="#FFFFFF"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">CBIT HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">CHAITANYA BHARATHI</text>
</svg>""",

    "college-vnr.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- VNR VJIET Emblem: Monochrome Shield & Lamp -->
  <g transform="translate(6, 6)">
    <path d="M18 3L32 8v12c0 9-7 14-14 16-7-2-14-7-14-16V8l14-5z" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9" fill="none"/>
    <path d="M18 6L29 10v10c0 7-5.5 11-11 12.8-5.5-1.8-11-5.8-11-12.8V10l11-4z" stroke="#FFFFFF" stroke-width="0.8" stroke-opacity="0.4" fill="none"/>
    <!-- Central Lamp Flame -->
    <path d="M18 10c1.2 1.4 1.8 2.6 1 4-.6 1.1-1.6 1.1-2 0-.6-1.1 0-2.6 1-4z" fill="#FFFFFF"/>
    <!-- Lamp base -->
    <path d="M13 18c1.5 2 4.5 2 6 0l2 2c-3 2.5-7 2.5-10 0l2-2z" fill="#FFFFFF"/>
    <!-- Book -->
    <path d="M12 25c2-.6 4 0 6 .6 2-.6 4-1.2 6-.6v-2.5c-2-.6-4 0-6 .6-2-.6-4-1.2-6-.6v2.5z" fill="#FFFFFF" fill-opacity="0.8"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">VNR VJIET</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">VIGNANA JYOTHI INST.</text>
</svg>""",

    "college-vasavi.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- Vasavi Emblem: Monochrome Laurel & Diya -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- Laurel Wreath -->
    <path d="M8 12c-1.5 4-1 9 2 13 3 4 8 5 11 5 3 0 8-1 11-5 3-4 3.5-9 2-13" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 1.5" stroke-opacity="0.6"/>
    <!-- Traditional Diya / Lamp -->
    <path d="M11 20c2 4 12 4 14 0l1 2c-2.5 4-13.5 4-16 0l1-2z" fill="#FFFFFF"/>
    <path d="M18 11c1.2 1.5 1.8 2.8 1 4.2-.6 1.2-1.6 1.2-2 0-.6-1.2 0-2.7 1-4.2z" fill="#FFFFFF"/>
    <!-- Rays of light -->
    <line x1="18" y1="6" x2="18" y2="8" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="13" y1="8" x2="14.5" y2="9.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="23" y1="8" x2="21.5" y2="9.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">VASAVI HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">COLLEGE OF ENGINEERING</text>
</svg>""",

    "college-jntuh.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- JNTU-H Emblem: Monochrome University Gate & Cog -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- Gear Rim Outer -->
    <circle cx="18" cy="18" r="13.5" stroke="#FFFFFF" stroke-width="0.8" stroke-dasharray="2 1.5" stroke-opacity="0.5"/>
    <!-- University Gateway Dome -->
    <path d="M10 24v-6c0-4.5 3.5-8 8-8s8 3.5 8 8v6h-16z" stroke="#FFFFFF" stroke-width="1.2" fill="none"/>
    <path d="M14 24v-4c0-2.2 1.8-4 4-4s4 1.8 4 4v4h-8z" fill="#FFFFFF"/>
    <!-- University Pillars -->
    <line x1="8" y1="24" x2="28" y2="24" stroke="#FFFFFF" stroke-width="1.6"/>
    <line x1="6" y1="27" x2="30" y2="27" stroke="#FFFFFF" stroke-width="1.8"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">JNTU HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">PREMIER TECH UNIVERSITY</text>
</svg>""",

    "college-ou.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- Osmania University Emblem: Monochrome Historic Dome -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- Heritage Saracenic Dome & Arch -->
    <path d="M12 25v-8c0-3.3 2.7-6 6-6s6 2.7 6 6v8h-12z" stroke="#FFFFFF" stroke-width="1.2" fill="none"/>
    <path d="M18 5c1 1.5 1.5 2.5 1.5 3.5 0 1-.7 1.5-1.5 1.5s-1.5-.5-1.5-1.5c0-1 .5-2 1.5-3.5z" fill="#FFFFFF"/>
    <!-- Windows & Arches -->
    <path d="M15 25v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4h-6z" fill="#FFFFFF"/>
    <line x1="8" y1="25" x2="28" y2="25" stroke="#FFFFFF" stroke-width="1.4"/>
    <line x1="6" y1="28" x2="30" y2="28" stroke="#FFFFFF" stroke-width="1.8"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">OSMANIA UNIV</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">ESTD. 1918 • HYDERABAD</text>
</svg>""",

    "college-griet.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- GRIET Emblem: Monochrome Lotus & Torch -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <circle cx="18" cy="18" r="13" stroke="#FFFFFF" stroke-width="0.8" stroke-opacity="0.5"/>
    <!-- Central Beacon Torch -->
    <path d="M17 12h2v10h-2z" fill="#FFFFFF"/>
    <path d="M18 6c1.2 1.5 1.8 2.6 1 4-.6 1.1-1.6 1.1-2 0-.6-1.1 0-2.6 1-4z" fill="#FFFFFF"/>
    <!-- Lotus Pedestal -->
    <path d="M10 24c2.5 2 6 2 8 0 2 2 5.5 2 8 0l1 2c-3 2.5-7 2.5-10 0-3 2.5-7 2.5-10 0l1-2z" fill="#FFFFFF"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">GRIET HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">GOKARAJU RANGARAJU</text>
</svg>""",

    "college-cvr.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- CVR Emblem: Monochrome Atomic Orbitals -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- Orbital Ellipses -->
    <ellipse cx="18" cy="18" rx="14" ry="5.5" transform="rotate(30 18 18)" stroke="#FFFFFF" stroke-width="1.2" stroke-opacity="0.7" fill="none"/>
    <ellipse cx="18" cy="18" rx="14" ry="5.5" transform="rotate(-30 18 18)" stroke="#FFFFFF" stroke-width="1.2" stroke-opacity="0.7" fill="none"/>
    <!-- Center Core Diamond -->
    <polygon points="18,12 24,18 18,24 12,18" fill="#FFFFFF"/>
    <circle cx="18" cy="18" r="2.5" fill="#0B132B"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">CVR COLLEGE</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">ENGINEERING &amp; TECH</text>
</svg>""",

    "college-snist.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- SNIST Emblem: Monochrome Crest & Wreath -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <path d="M9 14c-1 3-.5 7 1.5 10 2 3 6 4 9 4s7-1 9-4c2-3 2.5-7 1.5-10" stroke="#FFFFFF" stroke-width="1.2" stroke-dasharray="2 1.5" stroke-opacity="0.6"/>
    <!-- Central Shield & Star -->
    <path d="M18 10L25 14v6c0 4-3 7-7 8-4-1-7-4-7-8v-6l7-4z" stroke="#FFFFFF" stroke-width="1.2" fill="none"/>
    <polygon points="18,13 19.5,17 23.5,17 20.5,19.5 21.5,23.5 18,21 14.5,23.5 15.5,19.5 12.5,17 16.5,17" fill="#FFFFFF"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">SNIST HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">SREENIDHI TECH CAMPUS</text>
</svg>""",

    "college-vardhaman.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- Vardhaman Emblem: Monochrome Star Compass -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- 8-Point Compass Star -->
    <polygon points="18,5 21,15 31,18 21,21 18,31 15,21 5,18 15,15" fill="#FFFFFF" fill-opacity="0.95"/>
    <circle cx="18" cy="18" r="3" fill="#0B132B"/>
    <!-- Outer ring ticks -->
    <circle cx="18" cy="18" r="13" stroke="#FFFFFF" stroke-width="0.8" stroke-opacity="0.4"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">VARDHAMAN</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">COLLEGE OF ENGINEERING</text>
</svg>""",

    "college-iare.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" width="240" height="48" fill="none">
  <!-- IARE Emblem: Monochrome Aero Chevron -->
  <g transform="translate(6, 6)">
    <circle cx="18" cy="18" r="17" stroke="#FFFFFF" stroke-width="1.8" stroke-opacity="0.9"/>
    <!-- Supersonic Jet Chevron -->
    <path d="M18 5L28 26l-10-4-10 4 10-21z" fill="#FFFFFF" fill-opacity="0.95"/>
    <path d="M18 10L24 23l-6-2.5-6 2.5 6-13z" fill="#0B132B"/>
    <!-- Orbital flight path -->
    <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.5" fill="none"/>
  </g>
  <!-- Typography -->
  <text x="54" y="22" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="15" letter-spacing="0.04em">IARE HYDERABAD</text>
  <text x="54" y="37" fill="#FFFFFF" fill-opacity="0.7" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="600" font-size="10.5" letter-spacing="0.03em">AERONAUTICAL &amp; TECH</text>
</svg>"""
}

for name, svg_content in logos.items():
    fpath = os.path.join(assets_dir, name)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Saved monochrome white logo: {name}")

print("All 12 college logos updated to clean, monochrome white!")
