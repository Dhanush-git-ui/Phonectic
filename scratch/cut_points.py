# Let's reconstruct index.css as it was at step 413:
# Part 1: lines 1 to 801 from current index.css (up to "/* ==========================================================================\n   MarqueeStats Sticky Note Cards Behavior & Positioning (OneFin Exact Spec)\n   ========================================================================== */\n")
# Part 2: scratch/target_488_full_untruncated.css
# Part 3: lines from "/* Hero Bottom Gradient - Strictly Pure White and Blue" down to end, BUT without:
#         - the CTA styles (which were added in 488)
#         - the darkfeatures backdrop (which was added in 1035)
#         - the hero heading uppercase/letter-spacing (which was added in 853)

with open('src/index.css', 'r', encoding='utf-8') as f:
    current = f.read()

with open('scratch/target_488_full_untruncated.css', 'r', encoding='utf-8') as f:
    target_488 = f.read()

# Let's find the exact cut points
start_marker = "/* ==========================================================================\n   MarqueeStats Sticky Note Cards Behavior"
end_marker = "/* Hero Bottom Gradient - Strictly Pure White and Blue"

start_idx = current.find(start_marker)
end_idx = current.find(end_marker)

print("start_idx:", start_idx)
print("end_idx:", end_idx)

# Find header of section
header_end = current.find("*/\n", start_idx) + 4
print("header_end:", header_end)
print("Snippet before header_end:\n", current[start_idx:header_end])
print("Snippet at end_idx:\n", current[end_idx:end_idx+100])
