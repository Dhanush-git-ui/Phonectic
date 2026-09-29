with open('src/components/Testimonials.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

is_crlf = '\r\n' in content
content_lf = content.replace('\r\n', '\n')

old_configs = """		const cardConfigs = [
			{
				sel: '.framer-18hgfpp',
				base: 'translate(-50%, -50%) translateX(240px) translateY(-106px) rotate(6deg)',
				dx: 380, dy: -40, dr: 10,
			},
			{
				sel: '.framer-6idmd8',
				base: 'translate(-50%, -50%) translateX(142px) translateY(-43px) rotate(-7deg)',
				dx: 450, dy: -50, dr: 10,
			},
			{
				sel: '.framer-1j99ufo',
				base: 'translate(-50%, -50%) translateX(53px) translateY(131px) rotate(-5deg)',
				dx: 460, dy: 100, dr: 6,
			},
			{
				sel: '.framer-1q8094n',
				base: 'translate(-50%, -50%) translateX(-265px) translateY(53px) rotate(9deg)',
				dx: -290, dy: 90, dr: 4,
			},
			{
				sel: '.framer-1k18mro',
				base: 'translate(-50%, -50%) translateX(-62px) translateY(-40px) rotate(-16deg)',
				dx: -450, dy: -60, dr: -8,
			},
		]"""

new_configs = """		const cardConfigs = [
			{
				sel: '.framer-18hgfpp',
				base: 'translate(-50%, -50%) translateX(240px) translateY(-106px) rotate(6deg)',
				dx: -360, dy: -40, dr: -8,
			},
			{
				sel: '.framer-6idmd8',
				base: 'translate(-50%, -50%) translateX(142px) translateY(-43px) rotate(-7deg)',
				dx: -400, dy: 60, dr: -6,
			},
			{
				sel: '.framer-1j99ufo',
				base: 'translate(-50%, -50%) translateX(53px) translateY(131px) rotate(-5deg)',
				dx: -280, dy: 160, dr: 4,
			},
			{
				sel: '.framer-1q8094n',
				base: 'translate(-50%, -50%) translateX(-265px) translateY(53px) rotate(9deg)',
				dx: 380, dy: -30, dr: 8,
			},
			{
				sel: '.framer-1k18mro',
				base: 'translate(-50%, -50%) translateX(-62px) translateY(-40px) rotate(-16deg)',
				dx: 380, dy: 70, dr: 6,
			},
		]"""

assert old_configs in content_lf, "old_configs not found in Testimonials.jsx"
content_lf = content_lf.replace(old_configs, new_configs)
final_content = content_lf.replace('\n', '\r\n') if is_crlf else content_lf

with open('src/components/Testimonials.jsx', 'wb') as f:
    f.write(final_content.encode('utf-8'))
print("SUCCESS: Updated card direction offsets in Testimonials.jsx")
