export default function FloatingTemplatePill() {
	return (
		<a
			href="https://framer.com"
			target="_blank"
			rel="noopener noreferrer"
			className="floating-template-pill"
			aria-label="Get this Template"
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M4 16l6-6 4 4 6-6" />
				<path d="M14 4h6v6" />
			</svg>
			<span>Get this Template</span>
		</a>
	)
}
