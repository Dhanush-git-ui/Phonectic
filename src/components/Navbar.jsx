import { useEffect, useState } from 'react'

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll, { passive: true })
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			className="framer-1ukj2tp-container"
			data-framer-appear-id="1ukj2tp"
			data-framer-layout-hint-center-x="true"
			style={{
				opacity: 1,
				transform: 'translateX(-50%) translateY(0px)',
				position: 'fixed',
				top: 0,
				left: '50%',
				zIndex: 100,
				transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
			}}
		>
			{/* Desktop Navbar */}
			<div className="ssr-variant hidden-us4kh5 hidden-mzntmf nav-desktop-wrapper">
				<nav
					className={`framer-e7ewR framer-15o89ul ${isScrolled ? 'framer-v-1k1mnqh' : 'framer-v-15o89ul'}`}
					data-framer-name={isScrolled ? 'Desktop - On Scroll' : 'Desktop - Primary'}
					style={{
						width: '100%',
						transition:
							'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
					}}
				>
					<div
						className="framer-ketp50"
						data-framer-name="Nav Layout"
						style={{
							backdropFilter: isScrolled ? 'blur(20px)' : 'none',
							WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
							backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(0, 0, 0, 0)',
							border: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid transparent',
							borderRadius: isScrolled ? '24px' : '0px',
							padding: isScrolled ? '6px 20px' : '10px 0px',
							boxShadow: isScrolled
								? '0 10px 30px -10px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)'
								: 'none',
							transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
						}}
					>
						{/* Logo */}
						<div className="framer-153rxup" data-framer-name="Logo Wrap" style={{ overflow: 'visible', width: 'auto' }}>
							<a
								className="framer-14ood8v framer-sfm8kt"
								data-framer-name="Nav Logo"
								data-framer-page-link-current="true"
								href="/"
								style={{
									backgroundColor: 'rgba(0, 0, 0, 0)',
									borderRadius: '20px',
									padding: '6px 0px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									textDecoration: 'none',
									transition: 'all 0.25s ease',
									overflow: 'visible',
									width: 'auto',
								}}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '10px',
										height: '100%',
										textDecoration: 'none',
										whiteSpace: 'nowrap',
										width: 'auto',
									}}
								>
									<img
										src="/assets/phonectic-logo-transparent.png"
										alt="Phonectic Logo"
										style={{
											height: isScrolled ? '28px' : '32px',
											width: 'auto',
											display: 'block',
											filter: isScrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(0, 102, 255, 0.45))',
											transition: 'height 0.25s ease',
										}}
									/>
									<span
										style={{
											color: isScrolled ? '#0f172a' : '#ffffff',
											fontSize: isScrolled ? '20px' : '22px',
											fontWeight: 800,
											letterSpacing: '-0.02em',
											fontFamily: '"Outfit", "Inter", sans-serif',
											whiteSpace: 'nowrap',
											lineHeight: 1,
											transition: 'color 0.25s ease, font-size 0.25s ease',
										}}
									>
										Phonectic
									</span>
								</div>
							</a>
						</div>

						{/* Nav Menu Floating Pill */}
						<div
							className="framer-1k6wfnj"
							data-framer-name="Nav menu"
							style={{
								backdropFilter: 'blur(24px)',
								backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.15)',
								border: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
								WebkitBackdropFilter: 'blur(24px)',
								borderRadius: '20px',
								transform: isScrolled ? 'none' : 'translate(-50%, -50%)',
								position: isScrolled ? 'relative' : 'absolute',
								left: isScrolled ? 'unset' : '50%',
								top: isScrolled ? 'unset' : '50%',
								display: 'flex',
								alignItems: 'center',
								gap: 4,
								padding: '4px',
								boxShadow: isScrolled ? 'none' : '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
								transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
							}}
						>
							{/* Home */}
							<div className="framer-11e3t92-container" data-framer-name="Navlink">
								<a
									className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-15fiiky framer-19g2h9s nav-link-item"
									data-framer-name="Active"
									data-framer-page-link-current="true"
									href="/"
									style={{
										backgroundColor: isScrolled ? '#0f172a' : 'rgba(255, 255, 255, 0.2)',
										height: '100%',
										borderRadius: '16px',
										display: 'flex',
										alignItems: 'center',
										gap: 6,
										padding: '8px 16px',
										textDecoration: 'none',
										transition: 'all 0.25s ease',
									}}
								>
									<div
										className="framer-zb3h4b nav-dot-pulse"
										data-framer-name="dot"
										style={{
											backgroundColor: isScrolled ? '#38bdf8' : 'rgb(255, 255, 255)',
											borderRadius: '999px',
											width: 6,
											height: 6,
										}}
									/>
									<div
										className="framer-17agl2j"
										data-framer-component-type="RichTextContainer"
										data-framer-name="About"
									>
										<p
											className="framer-text framer-styles-preset-yctu3a"
											data-styles-preset="dLJsxXALZ"
											style={{
												margin: 0,
												color: '#ffffff',
												fontWeight: 600,
												fontSize: 14,
											}}
										>
											Home
										</p>
									</div>
								</a>
							</div>

							{/* About */}
							<div className="framer-9ump65-container" data-framer-name="Navlink">
								<a
									className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s nav-link-item"
									data-framer-name="Default"
									href="#benefit"
									style={{
										backgroundColor: 'rgba(0, 0, 0, 0)',
										height: '100%',
										borderRadius: '16px',
										display: 'flex',
										alignItems: 'center',
										padding: '8px 16px',
										textDecoration: 'none',
									}}
								>
									<div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
										<p
											className="framer-text framer-styles-preset-yctu3a"
											data-styles-preset="dLJsxXALZ"
											style={{
												margin: 0,
												color: isScrolled ? '#334155' : '#ffffff',
												fontSize: 14,
												fontWeight: isScrolled ? 500 : 400,
												transition: 'color 0.25s ease',
											}}
										>
											About
										</p>
									</div>
								</a>
							</div>

							{/* Feature */}
							<div className="framer-forzzi-container">
								<a
									className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s nav-link-item"
									data-framer-name="Default"
									href="#about"
									style={{
										backgroundColor: 'rgba(0, 0, 0, 0)',
										height: '100%',
										borderRadius: '16px',
										display: 'flex',
										alignItems: 'center',
										padding: '8px 16px',
										textDecoration: 'none',
									}}
								>
									<div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
										<p
											className="framer-text framer-styles-preset-yctu3a"
											data-styles-preset="dLJsxXALZ"
											style={{
												margin: 0,
												color: isScrolled ? '#334155' : '#ffffff',
												fontSize: 14,
												fontWeight: isScrolled ? 500 : 400,
												transition: 'color 0.25s ease',
											}}
										>
											Feature
										</p>
									</div>
								</a>
							</div>

							{/* Pricing */}
							<div className="framer-1baj7k4-container">
								<a
									className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s nav-link-item"
									data-framer-name="Default"
									href="#pricing"
									style={{
										backgroundColor: 'rgba(0, 0, 0, 0)',
										height: '100%',
										borderRadius: '16px',
										display: 'flex',
										alignItems: 'center',
										padding: '8px 16px',
										textDecoration: 'none',
									}}
								>
									<div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
										<p
											className="framer-text framer-styles-preset-yctu3a"
											data-styles-preset="dLJsxXALZ"
											style={{
												margin: 0,
												color: isScrolled ? '#334155' : '#ffffff',
												fontSize: 14,
												fontWeight: isScrolled ? 500 : 400,
												transition: 'color 0.25s ease',
											}}
										>
											Pricing
										</p>
									</div>
								</a>
							</div>

							{/* Blog */}
							<div className="framer-jiylz6-container">
								<a
									className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s nav-link-item"
									data-framer-name="Default"
									href="#blog"
									style={{
										backgroundColor: 'rgba(0, 0, 0, 0)',
										height: '100%',
										borderRadius: '16px',
										display: 'flex',
										alignItems: 'center',
										padding: '8px 16px',
										textDecoration: 'none',
									}}
								>
									<div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
										<p
											className="framer-text framer-styles-preset-yctu3a"
											data-styles-preset="dLJsxXALZ"
											style={{
												margin: 0,
												color: isScrolled ? '#334155' : '#ffffff',
												fontSize: 14,
												fontWeight: isScrolled ? 500 : 400,
												transition: 'color 0.25s ease',
											}}
										>
											Blog
										</p>
									</div>
								</a>
							</div>

							{/* Careers */}
							<div className="framer-1sfmy0-container">
								<a
									className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s nav-link-item"
									data-framer-name="Default"
									href="#faq"
									style={{
										backgroundColor: 'rgba(0, 0, 0, 0)',
										height: '100%',
										borderRadius: '16px',
										display: 'flex',
										alignItems: 'center',
										padding: '8px 16px',
										textDecoration: 'none',
									}}
								>
									<div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
										<p
											className="framer-text framer-styles-preset-yctu3a"
											data-styles-preset="dLJsxXALZ"
											style={{
												margin: 0,
												color: isScrolled ? '#334155' : '#ffffff',
												fontSize: 14,
												fontWeight: isScrolled ? 500 : 400,
												transition: 'color 0.25s ease',
											}}
										>
											Careers
										</p>
									</div>
								</a>
							</div>
						</div>

						{/* Contact Us CTA Button */}
						<div className="framer-1qrocwq-container">
							<a
								className="framer-wUDM8 framer-lq2ef0 framer-v-sjrfo4 framer-1xiloa2 nav-contact-btn"
								data-framer-name="Teriary"
								data-highlight="true"
								href="https://www.phoneticedu.com/auth/login"
								style={{
									background: isScrolled
										? 'none'
										: 'linear-gradient(180deg, rgba(224, 224, 224, 0.2) 0%, rgba(224, 224, 224, 0.4) 100%)',
									borderRadius: '22px',
									boxShadow: isScrolled ? '0 4px 14px rgba(15, 23, 42, 0.15)' : 'none',
									display: 'block',
									textDecoration: 'none',
									transition: 'all 0.25s ease',
								}}
							>
								<div
									className="framer-l13tx6"
									data-framer-name="Main"
									style={{
										background: isScrolled
											? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
											: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
										backgroundColor: isScrolled ? '#0f172a' : 'rgb(255, 255, 255)',
										borderRadius: '20px',
										boxShadow: isScrolled ? 'none' : 'inset 0px -2px 1px 0px rgba(15, 23, 42, 0.25)',
										padding: '8px 20px',
										transition: 'all 0.25s ease',
									}}
								>
									<div className="framer-1vtvotg-container">
										<div className="framer-K5eYu framer-rXNCz framer-SvZjy framer-9mcdme framer-v-b9q4a5">
											<div className="framer-gf2onz" data-framer-component-type="RichTextContainer">
												<p
													className="framer-text framer-styles-preset-1rgoota"
													data-styles-preset="nl5egLyzz"
													style={{
														margin: 0,
														color: isScrolled ? '#ffffff' : 'rgb(33, 33, 36)',
														fontWeight: 700,
														fontSize: 14,
														transition: 'color 0.25s ease',
													}}
												>
													Contact us
												</p>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</nav>
			</div>

			{/* Mobile Navbar */}
			<div className="ssr-variant hidden-pef12c nav-mobile-wrapper">
				<nav
					className={`framer-e7ewR framer-15o89ul ${mobileOpen ? 'framer-v-kx5ue2' : 'framer-v-1ntxijd'}`}
					data-framer-name={mobileOpen ? 'Mobile - Open' : 'Mobile - Close'}
					style={{ width: '100%', transition: 'all 0.3s ease' }}
				>
					<div
						className="framer-ketp50"
						data-framer-name="Nav Layout"
						style={{
							backdropFilter: 'blur(24px)',
							backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(0, 0, 0, 0.2)',
							WebkitBackdropFilter: 'blur(24px)',
							border: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
							boxShadow: isScrolled ? '0 8px 24px -6px rgba(0, 0, 0, 0.1)' : 'none',
							borderRadius: '20px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '12px 16px',
							width: '100%',
							transition: 'all 0.25s ease',
						}}
					>
						{/* Mobile Logo */}
						<div className="framer-153rxup" data-framer-name="Logo Wrap" style={{ overflow: 'visible', width: 'auto' }}>
							<a
								className="framer-14ood8v framer-sfm8kt"
								data-framer-name="Nav Logo"
								href="/"
								style={{
									backgroundColor: 'rgba(0, 0, 0, 0)',
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
									textDecoration: 'none',
									overflow: 'visible',
									width: 'auto',
								}}
							>
								<img
									src="/assets/phonectic-logo-transparent.png"
									alt="Phonectic"
									style={{
										height: '24px',
										width: 'auto',
										display: 'block',
										filter: isScrolled ? 'none' : 'drop-shadow(0 2px 6px rgba(0, 102, 255, 0.35))',
									}}
								/>
								<span
									style={{
										color: isScrolled ? '#0f172a' : '#ffffff',
										fontSize: '19px',
										fontWeight: 800,
										letterSpacing: '-0.02em',
										fontFamily: '"Outfit", "Inter", sans-serif',
										whiteSpace: 'nowrap',
										lineHeight: 1,
										transition: 'color 0.25s ease',
									}}
								>
									Phonectic
								</span>
							</a>
						</div>

						{/* Hamburger / Close Toggle Button */}
						<div
							className="framer-ad7xu3-container"
							onClick={() => setMobileOpen(!mobileOpen)}
							style={{ cursor: 'pointer' }}
						>
							<div
								className="framer-78iO7 framer-7uygxq framer-v-7uygxq"
								data-framer-name="Close"
								style={{
									backgroundColor: isScrolled ? '#0f172a' : 'rgb(255, 255, 255)',
									borderRadius: '12px',
									width: 36,
									height: 36,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									transition: 'background-color 0.25s ease',
								}}
							>
								<div
									className="framer-w0by0h"
									data-framer-name="Icon"
									style={{ position: 'relative', width: 16, height: 16 }}
								>
									<div
										className="framer-kcrfy9"
										data-framer-name="Line"
										style={{
											backgroundColor: isScrolled ? '#ffffff' : 'rgb(18, 18, 20)',
											borderRadius: '999px',
											width: 16,
											height: 2,
											position: 'absolute',
											top: mobileOpen ? 7 : 4,
											transform: mobileOpen ? 'rotate(45deg)' : 'none',
											transition: 'transform 0.25s ease, top 0.25s ease, background-color 0.25s ease',
										}}
									/>
									<div
										className="framer-1kgz4kp"
										data-framer-name="Line"
										style={{
											backgroundColor: isScrolled ? '#ffffff' : 'rgb(18, 18, 20)',
											borderRadius: '999px',
											width: 16,
											height: 2,
											position: 'absolute',
											top: mobileOpen ? 7 : 10,
											transform: mobileOpen ? 'rotate(-45deg)' : 'none',
											transition: 'transform 0.25s ease, top 0.25s ease, background-color 0.25s ease',
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Drawer Menu */}
					{mobileOpen && (
						<div
							className="framer-1k6wfnj"
							data-framer-name="Nav menu"
							style={{
								backdropFilter: 'blur(24px)',
								backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 0, 0, 0.25)',
								border: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
								WebkitBackdropFilter: 'blur(24px)',
								borderRadius: '20px',
								width: '100%',
								marginTop: 12,
								padding: 8,
								display: 'flex',
								flexDirection: 'column',
								gap: 8,
								boxShadow: isScrolled ? '0 12px 32px rgba(0, 0, 0, 0.1)' : 'none',
							}}
						>
							<a
								href="/"
								style={{
									color: isScrolled ? '#0f172a' : '#fff',
									padding: '10px 16px',
									textDecoration: 'none',
									fontWeight: 600,
								}}
								onClick={() => setMobileOpen(false)}
							>
								Home
							</a>
							<a
								href="#benefit"
								style={{
									color: isScrolled ? '#334155' : 'rgba(255, 255, 255, 0.85)',
									padding: '10px 16px',
									textDecoration: 'none',
								}}
								onClick={() => setMobileOpen(false)}
							>
								About
							</a>
							<a
								href="#about"
								style={{
									color: isScrolled ? '#334155' : 'rgba(255, 255, 255, 0.85)',
									padding: '10px 16px',
									textDecoration: 'none',
								}}
								onClick={() => setMobileOpen(false)}
							>
								Feature
							</a>
							<a
								href="#pricing"
								style={{
									color: isScrolled ? '#334155' : 'rgba(255, 255, 255, 0.85)',
									padding: '10px 16px',
									textDecoration: 'none',
								}}
								onClick={() => setMobileOpen(false)}
							>
								Pricing
							</a>
							<a
								href="#blog"
								style={{
									color: isScrolled ? '#334155' : 'rgba(255, 255, 255, 0.85)',
									padding: '10px 16px',
									textDecoration: 'none',
								}}
								onClick={() => setMobileOpen(false)}
							>
								Blog
							</a>
							<a
								href="#faq"
								style={{
									color: isScrolled ? '#334155' : 'rgba(255, 255, 255, 0.85)',
									padding: '10px 16px',
									textDecoration: 'none',
								}}
								onClick={() => setMobileOpen(false)}
							>
								Careers
							</a>
							<a
								href="https://www.phoneticedu.com/auth/login"
								style={{
									backgroundColor: isScrolled ? '#0f172a' : '#fff',
									color: isScrolled ? '#ffffff' : '#121214',
									padding: '12px 16px',
									borderRadius: 16,
									textAlign: 'center',
									fontWeight: 700,
									textDecoration: 'none',
									marginTop: 4,
								}}
								onClick={() => setMobileOpen(false)}
							>
								Contact us
							</a>
						</div>
					)}
				</nav>
			</div>
		</div>
	)
}
