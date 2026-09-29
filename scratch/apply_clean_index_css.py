import subprocess

# Read target 488 (the original marquee section at step 413)
with open('scratch/target_488_full_untruncated.css', 'r', encoding='utf-8') as f:
    target_488 = f.read().strip()

# Read current index.css
with open('src/index.css', 'r', encoding='utf-8') as f:
    current = f.read()

# Let's find the marquee start
marker_start = "/* ==========================================================================\n   MarqueeStats Sticky Note Cards Behavior"
start_pos = current.find(marker_start)
header_end = current.find("*/\n", start_pos) + 4

# Let's find where the marquee ends in current index.css
marker_hero_grad = "/* Hero Bottom Gradient - Strictly Pure White and Blue"
hero_grad_pos = current.find(marker_hero_grad)

print(f"start_pos: {start_pos}, header_end: {header_end}, hero_grad_pos: {hero_grad_pos}")

part1 = current[:header_end]
part2 = target_488 + "\n\n"
part3 = current[hero_grad_pos:]

# Remove duplicate b2 block if present
marker_b2 = "/* ============================================================ */\n/* HERO SECTION"
b2_first = part3.find(marker_b2)
b2_second = part3.find(marker_b2, b2_first + 1)
print(f"b2_first: {b2_first}, b2_second: {b2_second}")
if b2_second != -1:
    print("Trimming duplicated block at the end...")
    part3 = part3[:b2_second].rstrip() + "\n"

# Revert edit 853 in part3 (hero heading uppercase)
hero_replacement = """.framer-Tesak .framer-nu8ff8 h1 {
\tcolor: #0066FF !important;
\tbackground: linear-gradient(135deg, #0052CC 0%, #0066FF 50%, #2563EB 100%) !important;
\t-webkit-background-clip: text !important;
\t-webkit-text-fill-color: transparent !important;
\tfilter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.2)) !important;
\ttext-transform: uppercase !important;
\tletter-spacing: -0.025em !important;
}

.framer-Tesak .framer-ea2r55 h1 {
\tcolor: #0B132B !important;
\t-webkit-text-fill-color: #0B132B !important;
\tfilter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08)) !important;
\ttext-transform: uppercase !important;
\tletter-spacing: -0.025em !important;
}"""

hero_target = """.framer-Tesak .framer-nu8ff8 h1 {
\tcolor: #0066FF !important;
\tbackground: linear-gradient(135deg, #0052CC 0%, #0066FF 50%, #2563EB 100%) !important;
\t-webkit-background-clip: text !important;
\t-webkit-text-fill-color: transparent !important;
\tfilter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.2)) !important;
}

.framer-Tesak .framer-ea2r55 h1 {
\tcolor: #0B132B !important;
\t-webkit-text-fill-color: #0B132B !important;
\tfilter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08)) !important;
}"""

if hero_replacement in part3:
    part3 = part3.replace(hero_replacement, hero_target)
    print("Hero heading reverted in part3.")
else:
    print("hero_replacement not found in part3, checking if already reverted or different.")

final_css = part1 + part2 + part3
with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(final_css)

print("Saved new src/index.css! Length:", len(final_css), "Lines:", len(final_css.splitlines()))
