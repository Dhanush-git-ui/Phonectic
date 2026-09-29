with open('src/index.css', 'r', encoding='utf-8') as f:
    current = f.read()

with open('scratch/target_488_full_untruncated.css', 'r', encoding='utf-8') as f:
    target_488 = f.read()

# 1. Replace block 20981 to 28575
start = 20981
end = 28575

reconstructed = current[:start] + target_488.strip() + "\n\n" + current[end:]

# 2. Revert hero heading 853
hero_target = """.framer-Tesak .framer-nu8ff8 h1 {
	color: #0066FF !important;
	background: linear-gradient(135deg, #0052CC 0%, #0066FF 50%, #2563EB 100%) !important;
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: transparent !important;
	filter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.2)) !important;
}

.framer-Tesak .framer-ea2r55 h1 {
	color: #0B132B !important;
	-webkit-text-fill-color: #0B132B !important;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08)) !important;
}"""

hero_replacement = """.framer-Tesak .framer-nu8ff8 h1 {
	color: #0066FF !important;
	background: linear-gradient(135deg, #0052CC 0%, #0066FF 50%, #2563EB 100%) !important;
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: transparent !important;
	filter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.2)) !important;
	text-transform: uppercase !important;
	letter-spacing: -0.025em !important;
}

.framer-Tesak .framer-ea2r55 h1 {
	color: #0B132B !important;
	-webkit-text-fill-color: #0B132B !important;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08)) !important;
	text-transform: uppercase !important;
	letter-spacing: -0.025em !important;
}"""

if hero_replacement in reconstructed:
    reconstructed = reconstructed.replace(hero_replacement, hero_target)
    print("Replaced hero heading successfully!")
else:
    print("WARNING: hero_replacement not found!")

lines = reconstructed.splitlines()
print(f"Reconstructed lines: {len(lines)}")
with open('scratch/reconstructed_index.css', 'w', encoding='utf-8') as out:
    out.write(reconstructed)
print("Saved scratch/reconstructed_index.css")
