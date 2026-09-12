import { useState, useEffect } from 'react'

const logoMarkSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0312 24V16.7612C12.0312 15.5923 12.9788 14.6447 14.1477 14.6447H23.3601C22.9319 17.9459 19.1462 23.4662 12.0312 24Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.71719 19.5896C0.376618 16.7336 -0.405644 13.4333 0.193 9.74078C6.5849 10.7332 11.5028 16.2024 11.6283 22.8424C11.629 22.9781 11.6295 23.1169 11.6299 23.2589C11.6305 23.4963 11.6017 23.7415 11.6017 23.9972C8.21352 23.8777 5.0515 22.4376 2.71719 19.5896Z" fill="url(#paint0_linear_8167_22950)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4691 14.2592C24.0678 10.5667 23.2855 7.26644 20.9449 4.41043C18.6106 1.56235 15.4486 0.122268 12.0604 0.00275803C12.0604 0.131557 12.0531 0.257702 12.0459 0.381519C12.0389 0.503514 12.0319 0.623254 12.0322 0.741055C12.0326 0.883077 12.0331 1.0219 12.0338 1.15762C12.1593 7.79763 17.0772 13.2668 23.4691 14.2592Z" fill="url(#paint1_linear_8167_22950)"/>
<path d="M9.51438 9.35527C10.6833 9.35527 11.6309 8.40769 11.6309 7.23879L11.6309 0C4.51588 0.533839 0.730181 6.05413 0.301976 9.35527H9.51438Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_8167_22950" x1="0.000128746" y1="9.74078" x2="11.6299" y2="23.9972" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear_8167_22950" x1="23.662" y1="14.2592" x2="12.0322" y2="0.00275808" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>`

const fullLogoSvg = `
<svg style="width:100%;height:100%;" viewBox="0 0 193 46">
  <use href="#svg-1141095958_3042"></use>
</svg>`

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
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
        transition: 'all 0.3s cubic-bezier(0.44, 0, 0.56, 1)'
      }}
    >
      {/* Desktop Navbar */}
      <div className="ssr-variant hidden-us4kh5 hidden-mzntmf">
        <nav
          className={`framer-e7ewR framer-15o89ul ${isScrolled ? 'framer-v-1k1mnqh' : 'framer-v-15o89ul'}`}
          data-framer-name={isScrolled ? 'Desktop - On Scroll' : 'Desktop - Primary'}
          style={{ width: '100%', transition: 'all 0.3s ease' }}
        >
          <div
            className="framer-ketp50"
            data-framer-name="Nav Layout"
            style={{
              backdropFilter: 'none',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderRadius: 0,
            }}
          >
            {/* Logo */}
            <div className="framer-153rxup" data-framer-name="Logo Wrap">
              <a
                className="framer-14ood8v framer-sfm8kt"
                data-framer-name="Nav Logo"
                data-framer-page-link-current="true"
                href="/"
                style={{
                  backgroundColor: isScrolled ? 'rgb(0, 0, 0)' : 'rgba(0, 0, 0, 0)',
                  borderRadius: isScrolled ? '20px' : '0px',
                  padding: isScrolled ? '8px' : '8px 0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease'
                }}
              >
                {isScrolled ? (
                  <div
                    className="framer-191fvz4"
                    data-framer-name="Logo Mark"
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    dangerouslySetInnerHTML={{ __html: logoMarkSvg }}
                  />
                ) : (
                  <div
                    className="framer-162yipg"
                    data-framer-component-type="SVG"
                    data-framer-name="Full Logo"
                    style={{
                      imageRendering: 'pixelated',
                      flexShrink: 0,
                      fill: 'rgba(0,0,0,1)',
                      color: 'rgba(0,0,0,1)',
                      width: 101,
                      height: 24
                    }}
                    dangerouslySetInnerHTML={{ __html: fullLogoSvg }}
                  />
                )}
              </a>
            </div>

            {/* Nav Menu Floating Pill */}
            <div
              className="framer-1k6wfnj"
              data-framer-name="Nav menu"
              style={{
                backdropFilter: 'blur(24px)',
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
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
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Home */}
              <div className="framer-11e3t92-container" data-framer-name="Navlink">
                <a
                  className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-15fiiky framer-19g2h9s"
                  data-framer-name="Active"
                  data-framer-page-link-current="true"
                  href="/"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 16px',
                    textDecoration: 'none'
                  }}
                >
                  <div
                    className="framer-zb3h4b"
                    data-framer-name="dot"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderRadius: '999px',
                      width: 6,
                      height: 6
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
                        color: 'rgb(255, 255, 255)',
                        fontWeight: 600,
                        fontSize: 14
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
                  className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s"
                  data-framer-name="Default"
                  href="#about"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    textDecoration: 'none'
                  }}
                >
                  <div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
                    <p
                      className="framer-text framer-styles-preset-yctu3a"
                      data-styles-preset="dLJsxXALZ"
                      style={{
                        margin: 0,
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14
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
                  className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s"
                  data-framer-name="Default"
                  href="#features"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    textDecoration: 'none'
                  }}
                >
                  <div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
                    <p
                      className="framer-text framer-styles-preset-yctu3a"
                      data-styles-preset="dLJsxXALZ"
                      style={{
                        margin: 0,
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14
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
                  className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s"
                  data-framer-name="Default"
                  href="#pricing"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    textDecoration: 'none'
                  }}
                >
                  <div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
                    <p
                      className="framer-text framer-styles-preset-yctu3a"
                      data-styles-preset="dLJsxXALZ"
                      style={{
                        margin: 0,
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14
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
                  className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s"
                  data-framer-name="Default"
                  href="#blog"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    textDecoration: 'none'
                  }}
                >
                  <div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
                    <p
                      className="framer-text framer-styles-preset-yctu3a"
                      data-styles-preset="dLJsxXALZ"
                      style={{
                        margin: 0,
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14
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
                  className="framer-D6Lzg framer-iDV62 framer-1p1rzua framer-v-1p1rzua framer-19g2h9s"
                  data-framer-name="Default"
                  href="#careers"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    textDecoration: 'none'
                  }}
                >
                  <div className="framer-17agl2j" data-framer-component-type="RichTextContainer">
                    <p
                      className="framer-text framer-styles-preset-yctu3a"
                      data-styles-preset="dLJsxXALZ"
                      style={{
                        margin: 0,
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14
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
                className="framer-wUDM8 framer-lq2ef0 framer-v-sjrfo4 framer-1xiloa2"
                data-framer-name="Teriary"
                data-highlight="true"
                href="#contact"
                style={{
                  background: 'linear-gradient(180deg, rgba(224, 224, 224, 0.2) 0%, rgba(224, 224, 224, 0.4) 100%)',
                  borderRadius: '22px',
                  boxShadow: '0px 10px 4px 0px rgba(194, 194, 194, 0.03), 0px 6px 3px 0px rgba(194, 194, 194, 0.11), 0px 2px 2px 0px rgba(194, 194, 194, 0.19), 0px 1px 1px 0px rgba(194, 194, 194, 0.22)',
                  display: 'block',
                  textDecoration: 'none'
                }}
              >
                <div
                  className="framer-l13tx6"
                  data-framer-name="Main"
                  style={{
                    background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '20px',
                    boxShadow: 'inset 0px -2px 1px 0px rgba(26, 20, 51, 0.25)',
                    padding: '8px 20px'
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
                            color: 'rgb(33, 33, 36)',
                            fontWeight: 700,
                            fontSize: 14
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
      <div className="ssr-variant hidden-pef12c">
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
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              width: '100%'
            }}
          >
            {/* Mobile Logo */}
            <div className="framer-153rxup" data-framer-name="Logo Wrap">
              <a
                className="framer-14ood8v framer-sfm8kt"
                data-framer-name="Nav Logo"
                href="/"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div
                  className="framer-162yipg"
                  data-framer-component-type="SVG"
                  data-framer-name="Full Logo"
                  style={{
                    imageRendering: 'pixelated',
                    flexShrink: 0,
                    fill: 'rgba(0,0,0,1)',
                    color: 'rgba(0,0,0,1)',
                    width: 88,
                    height: 21
                  }}
                  dangerouslySetInnerHTML={{ __html: fullLogoSvg }}
                />
              </a>

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
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '12px',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className="framer-w0by0h" data-framer-name="Icon" style={{ position: 'relative', width: 16, height: 16 }}>
                    <div
                      className="framer-kcrfy9"
                      data-framer-name="Line"
                      style={{
                        backgroundColor: 'rgb(18, 18, 20)',
                        borderRadius: '999px',
                        width: 16,
                        height: 2,
                        position: 'absolute',
                        top: mobileOpen ? 7 : 4,
                        transform: mobileOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.25s ease, top 0.25s ease'
                      }}
                    />
                    <div
                      className="framer-1kgz4kp"
                      data-framer-name="Line"
                      style={{
                        backgroundColor: 'rgb(18, 18, 20)',
                        borderRadius: '999px',
                        width: 16,
                        height: 2,
                        position: 'absolute',
                        top: mobileOpen ? 7 : 10,
                        transform: mobileOpen ? 'rotate(-45deg)' : 'none',
                        transition: 'transform 0.25s ease, top 0.25s ease'
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
                  backgroundColor: 'rgba(0, 0, 0, 0.25)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '20px',
                  width: '100%',
                  marginTop: 12,
                  padding: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8
                }}
              >
                <a
                  href="/"
                  style={{ color: '#fff', padding: '10px 16px', textDecoration: 'none', fontWeight: 600 }}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', padding: '10px 16px', textDecoration: 'none' }}
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </a>
                <a
                  href="#features"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', padding: '10px 16px', textDecoration: 'none' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Feature
                </a>
                <a
                  href="#pricing"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', padding: '10px 16px', textDecoration: 'none' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#blog"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', padding: '10px 16px', textDecoration: 'none' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </a>
                <a
                  href="#careers"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', padding: '10px 16px', textDecoration: 'none' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  style={{
                    backgroundColor: '#fff',
                    color: '#121214',
                    padding: '12px 16px',
                    borderRadius: 16,
                    textAlign: 'center',
                    fontWeight: 700,
                    textDecoration: 'none',
                    marginTop: 4
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact us
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}
