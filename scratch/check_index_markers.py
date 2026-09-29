import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    current_css = f.read()

with open('scratch/target_488_full_untruncated.css', 'r', encoding='utf-8') as f:
    original_target_488 = f.read()

# Let's see what is currently in index.css from "/* The Section:" or line 800
print("Length of current index.css:", len(current_css))
print("Length of target 488:", len(original_target_488))

# Find the marker in current_css where the marquee section begins
marquee_marker = "/* ==========================================================================\n   MarqueeStats Sticky Note Cards Behavior"
pos = current_css.find(marquee_marker)
print("Found marquee_marker at:", pos)
if pos != -1:
    print("Content after marker (first 500 chars):\n", current_css[pos:pos+500])

# Also check where the marquee section ends in current_css
cta_marker = "/* ─────────────────────────────────────────────────────────────────────────────\n   CTA Section Typography"
cta_pos = current_css.find(cta_marker)
print("Found cta_marker at:", cta_pos)
if cta_pos != -1:
    print("Content after cta_marker (first 300 chars):\n", current_css[cta_pos:cta_pos+300])
