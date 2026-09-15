import { useEffect } from 'react'

const content = `<div class="framer-yz2610" data-framer-name="Navbar Change" id="navbar-change"></div><div class="framer-sqdl7v" data-framer-name="Hero Content"><div class="framer-1cae1md" data-framer-name="Text &amp; CTA"><div class="framer-1785cli" data-framer-name="Heading Wrap"><div class="framer-z7f9fw" data-framer-name="Hero Heading"><div class="framer-nu8ff8" data-framer-component-type="RichTextContainer" data-framer-name="Smarter Finance" style="transform:none"><h1 class="framer-text framer-styles-preset-16hkaiw" data-styles-preset="kXDaQMV3W" dir="auto" style="--framer-text-color:var(--token-a281d3d3-8074-4276-b377-59dd81ca3f41, rgb(0, 102, 255))"><span style="display:inline-block;">Master</span> <span style="display:inline-block;">Aptitude</span></h1></div><div class="framer-ea2r55" data-framer-component-type="RichTextContainer" data-framer-name="Made Simple" style="transform:none"><h1 class="framer-text framer-styles-preset-16hkaiw" data-styles-preset="kXDaQMV3W" dir="auto"><span style="display:inline-block;">Gamified</span> <span style="display:inline-block;">&amp; Proven</span></h1></div></div><div class="ssr-variant hidden-1k8ds7i"><div class="framer-164ob5c" data-framer-component-type="RichTextContainer" data-framer-name="SubHead" style="transform:none"><p class="framer-text framer-styles-preset-1tvfe9n" data-styles-preset="MRCEp2OEt" dir="auto" style="--framer-text-alignment:center">A comprehensive platform for mastering quantitative analysis, logical reasoning, and technical coding — empowering students to excel in competitive exams and campus placements.</p></div></div><div class="ssr-variant hidden-72rtr7 hidden-m2it3q"><div class="framer-164ob5c" data-framer-component-type="RichTextContainer" data-framer-name="SubHead" style="transform:none"><p class="framer-text framer-styles-preset-1tvfe9n" data-styles-preset="MRCEp2OEt" dir="auto" style="--framer-text-alignment:center">A comprehensive platform for mastering quantitative analysis, logical reasoning, and technical coding — empowering students to excel in competitive exams and campus placements.</p></div></div></div><div class="framer-3v7xp3" data-framer-name="Button Group"><div class="ssr-variant"><div class="framer-o2z1r1-container" data-framer-appear-id="o2z1r1" style="transform:translateY(50px) scale(0.5)"><!--$--><a class="framer-wUDM8 framer-lq2ef0 framer-v-lq2ef0 framer-1xiloa2" data-framer-name="Primary" data-highlight="true" href="https://www.phoneticedu.com/auth/login" style="background:linear-gradient(180deg, rgb(37, 99, 235) 0%, rgb(15, 47, 156) 100%);border-bottom-left-radius:22px;border-bottom-right-radius:22px;border-top-left-radius:22px;border-top-right-radius:22px;box-shadow:0px 1px 2px 0px rgba(15, 47, 156, 0.37), 0px 3px 3px 0px rgba(15, 47, 156, 0.32), 0px 8px 5px 0px rgba(15, 47, 156, 0.19), 0px 13px 5px 0px rgba(15, 47, 156, 0.06)" tabindex="0"><div class="framer-l13tx6" data-framer-name="Main" style="background:linear-gradient(180deg, rgb(59, 130, 246) 0%, rgb(0, 102, 255) 100%);background-color:rgba(0, 0, 0, 0);border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:inset 0px 1px 1px 0px rgb(255, 255, 255), inset 0px -2px 2px 0px rgb(15, 47, 156), inset 0px 0px 8px 0px rgba(191, 219, 254, 0.5)"><div class="framer-1vtvotg-container"><div class="framer-K5eYu framer-rXNCz framer-SvZjy framer-9mcdme framer-v-b9q4a5" data-framer-name="16"><div class="framer-gf2onz" data-framer-component-type="RichTextContainer" data-framer-name="Get started" style="--extracted-r6o4lv:var(--variable-reference-ute9ElgLN-xnlmJ4ALb);--framer-paragraph-spacing:0px;--variable-reference-ute9ElgLN-xnlmJ4ALb:var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255));transform:none"><p class="framer-text framer-styles-preset-1rgoota" data-styles-preset="nl5egLyzz" style="--framer-text-color:var(--extracted-r6o4lv, var(--variable-reference-ute9ElgLN-xnlmJ4ALb))">Start Free Journey</p></div></div></div></div></a><!--/$--></div></div><div class="ssr-variant"><div class="framer-ahily-container" data-framer-appear-id="ahily" id="ahily" style="transform:translateY(50px) scale(0.5)"><!--$--><a class="framer-wUDM8 framer-lq2ef0 framer-v-dmfmax framer-1xiloa2" data-framer-name="Secondary" data-highlight="true" style="background:linear-gradient(180deg, rgb(40, 40, 40) 0%, rgb(6, 6, 6) 100%);border-bottom-left-radius:22px;border-bottom-right-radius:22px;border-top-left-radius:22px;border-top-right-radius:22px;box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.37), 0px 3px 3px 0px rgba(0, 0, 0, 0.32), 0px 7px 4px 0px rgba(0, 0, 0, 0.19), 0px 12px 5px 0px rgba(0, 0, 0, 0.06)" tabindex="0"><div class="framer-l13tx6" data-framer-name="Main" style="background:linear-gradient(180deg, rgb(40, 40, 40) 0%, rgb(40, 40, 40) 100%);background-color:rgb(40, 40, 40);border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:inset 0px 1px 1px 0px rgba(255, 255, 255, 0.8), inset 0px -2px 2px 0px rgb(0, 0, 0)"><div class="framer-1vtvotg-container"><div class="framer-K5eYu framer-rXNCz framer-SvZjy framer-9mcdme framer-v-b9q4a5" data-framer-name="16"><div class="framer-gf2onz" data-framer-component-type="RichTextContainer" data-framer-name="Get started" style="--extracted-r6o4lv:var(--variable-reference-ute9ElgLN-xnlmJ4ALb);--framer-paragraph-spacing:0px;--variable-reference-ute9ElgLN-xnlmJ4ALb:var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255));transform:none"><p class="framer-text framer-styles-preset-1rgoota" data-styles-preset="nl5egLyzz" style="--framer-text-color:var(--extracted-r6o4lv, var(--variable-reference-ute9ElgLN-xnlmJ4ALb))">Explore Programs</p></div></div></div></div></a><!--/$--></div></div></div></div><div class="framer-1frftx4" data-framer-name="Spacer"></div><div class="ssr-variant"><div class="framer-i27nr0-container"><div class="framer-spMKf framer-16lqyou framer-v-16lqyou" data-framer-name="Variant 1" style="width:100%"><div class="framer-xyf7ed-container" data-framer-name="Logos" name="Logos"><!--$--><section style="display:flex;width:100%;height:100%;max-width:100%;max-height:100%;place-items:center;margin:0;padding:10px;list-style-type:none;text-indent:none;-webkit-mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);overflow:hidden"><ul style="display:flex;width:100%;height:100%;max-width:100%;max-height:100%;place-items:center;margin:0;padding:0;list-style-type:none;text-indent:none;gap:52px;position:relative;flex-direction:row;will-change:auto;transform:translateX(-0px)"><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-tcs.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="172"/></div></div></li><li aria-hidden="true"><div class="framer-1evzthi" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-infosys.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="278"/></div></div></li><li aria-hidden="true"><div class="framer-z6lr3g" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-capgemini.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="100"/></div></div></li><li aria-hidden="true"><div class="framer-d5vhsv" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-accenture.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="288"/></div></div></li><li aria-hidden="true"><div class="framer-1052ywg" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-cognizant.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="194"/></div></div></li><li aria-hidden="true"><div class="framer-1m4r5me" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-wipro.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="319"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-tcs.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="172"/></div></div></li><li aria-hidden="true"><div class="framer-1evzthi" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-infosys.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="278"/></div></div></li><li aria-hidden="true"><div class="framer-z6lr3g" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-capgemini.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="100"/></div></div></li><li aria-hidden="true"><div class="framer-d5vhsv" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-accenture.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="288"/></div></div></li><li aria-hidden="true"><div class="framer-1052ywg" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-cognizant.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="194"/></div></div></li><li aria-hidden="true"><div class="framer-1m4r5me" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="logo" decoding="async" height="96" src="/assets/recruiter-wipro.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="319"/></div></div></li></ul></section><!--/$--></div></div></div></div></div><div class="framer-1vvvbza" data-framer-name="Hero Illustration"><div class="framer-vfhbl3" data-framer-name="Hero Illustration Container"><div class="ssr-variant"><div class="framer-giti9r" data-framer-appear-id="giti9r" data-framer-name="Phone" style="will-change:transform;opacity:1;transform:translateY(108px)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="hero-image" decoding="async" height="2243" sizes="(min-width: 1200px) calc(max(100vw - 160px, 1200px) * 0.4), (min-width: 810px) and (max-width: 1199.98px) calc(max(100vw - 160px, 1200px) * 0.4), (max-width: 809.98px) calc(max(min((100vw - 160px) * 2.75, 1000px), 600px) * 0.4)" src="/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png" srcset="/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png 1002w,/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png 1098w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="1098"/></div></div></div><div class="ssr-variant"><div class="framer-1154f73" data-framer-appear-id="1154f73" data-framer-name="Hero Data Card (Front)" style="will-change:transform;opacity:1;transform:translateX(202px) translateY(-252px) rotate(24deg)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="aptitude-streak" decoding="async" height="456" src="/assets/hero-aptitude-card.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="525"/></div></div></div><div class="ssr-variant"><div class="framer-8ytohn" data-framer-appear-id="8ytohn" data-framer-name="Hero Data Card (Front)" style="will-change:transform;opacity:1;transform:translateX(-98px) translateY(-80px) rotate(-5deg)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="speed-math-accuracy" decoding="async" height="84" src="/assets/hero-speed-card.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="452"/></div></div></div><div class="framer-rbqmm" data-border="true" data-framer-name="Glass" style="will-change:transform;opacity:1;transform:translate(-50%, -50%)"></div><div class="ssr-variant"><div class="framer-14nwv2u" data-framer-appear-id="14nwv2u" data-framer-name="Hero Data Card (Behind)" style="will-change:transform;opacity:1;transform:translate(-50%, -50%) translateX(-221px) translateY(-67px) rotate(-37deg)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="national-percentile" decoding="async" height="538" src="/assets/hero-percentile-card.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="568"/></div></div></div><div class="ssr-variant"><div class="framer-12og78t" data-framer-appear-id="12og78t" data-framer-name="Hero Data Card (Behind)" style="will-change:transform;opacity:1;transform:translate(-50%, -50%) translateX(218px) translateY(-91px) rotate(-17deg)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="placement-offers" decoding="async" height="112" src="/assets/hero-streak-card.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="618"/></div></div></div></div></div><div class="framer-7yy0jx" data-framer-name="Gradient Overlay"><div class="framer-1c9i0wn" data-framer-name="Gradient Image"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="" decoding="async" height="1290" sizes="(min-width: 1200px) max(100vw, 1440px), (min-width: 810px) and (max-width: 1199.98px) max(100vw, 1440px), (max-width: 809.98px) max(100vw, 1440px)" src="/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png" srcset="/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 512w,/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 1024w,/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 2048w,/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 2880w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:fill" width="2880"/></div></div></div><div class="framer-86uqel" data-framer-name="Hero Background" style="transform:translateX(-50%)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="hero-texture" decoding="async" height="810" sizes="(min-width: 1200px) max(100vw, 1200px), (min-width: 810px) and (max-width: 1199.98px) max(100vw, 1200px), (max-width: 809.98px) max(100vw, 1200px)" src="/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg" srcset="/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg 512w,/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg 1024w,/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg 1440w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="1440"/></div></div><div class="framer-1rydgv2" data-framer-name="Bottom"><div class="framer-12on3yb" data-framer-name="Corner Border Bottom"></div><div class="framer-1k9pwao" data-framer-name="Corner Border Middle"></div><div class="framer-jxlrc4" data-framer-name="Corner Border Top"></div></div>`

export default function Hero() {
  useEffect(() => {
    const heroSection = document.getElementById('hero')
    if (!heroSection) return

    // Animate CTA buttons entrance
    const btnPrimary = heroSection.querySelector('.framer-o2z1r1-container')
    const btnSecondary = heroSection.querySelector('.framer-ahily-container')
    if (btnPrimary) {
      setTimeout(() => {
        btnPrimary.style.transform = 'translateY(0) scale(1)'
        btnPrimary.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }, 100)
    }
    if (btnSecondary) {
      setTimeout(() => {
        btnSecondary.style.transform = 'translateY(0) scale(1)'
        btnSecondary.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
      }, 100)
    }

    let mouseX = 0
    let mouseY = 0
    let currentScrollY = window.scrollY
    let ticking = false

    const updateHeroTransforms = () => {
      // 1. Main phone mockup parallax
      const phone = heroSection.querySelector('[data-framer-name="Phone"]')
      if (phone) {
        const phoneScrollY = 108 + currentScrollY * 0.2
        phone.style.transform = `translateY(${phoneScrollY}px) translate3d(${mouseX * 0.5}px, ${mouseY * 0.5}px, 0px)`
        phone.style.transition = 'transform 0.08s ease-out'
      }

      // 2. Front card 1 (right card): moves upward and rotates
      const cardFront1 = heroSection.querySelector('.framer-1154f73')
      if (cardFront1) {
        const c1Y = -252 - currentScrollY * 0.3
        const c1Rot = 24 + currentScrollY * 0.015
        cardFront1.style.transform = `translateX(202px) translateY(${c1Y}px) rotate(${c1Rot}deg) translate3d(${mouseX * 1.2}px, ${mouseY * 1.2}px, 0px)`
        cardFront1.style.transition = 'transform 0.08s ease-out'
      }

      // 3. Front card 2 (left card): moves downward
      const cardFront2 = heroSection.querySelector('.framer-8ytohn')
      if (cardFront2) {
        const c2Y = -80 + currentScrollY * 0.22
        const c2Rot = -5 - currentScrollY * 0.01
        cardFront2.style.transform = `translateX(-98px) translateY(${c2Y}px) rotate(${c2Rot}deg) translate3d(${-mouseX * 1.2}px, ${-mouseY * 1.2}px, 0px)`
        cardFront2.style.transition = 'transform 0.08s ease-out'
      }

      // 4. Behind card 1 (top left behind)
      const cardBehind1 = heroSection.querySelector('.framer-14nwv2u')
      if (cardBehind1) {
        const b1Y = -67 - currentScrollY * 0.15
        cardBehind1.style.transform = `translate(-50%, -50%) translateX(-221px) translateY(${b1Y}px) rotate(-37deg) translate3d(${-mouseX * 0.8}px, ${-mouseY * 0.8}px, 0px)`
        cardBehind1.style.transition = 'transform 0.08s ease-out'
      }

      // 5. Behind card 2 (top right behind)
      const cardBehind2 = heroSection.querySelector('.framer-12og78t')
      if (cardBehind2) {
        const b2Y = -91 + currentScrollY * 0.16
        cardBehind2.style.transform = `translate(-50%, -50%) translateX(218px) translateY(${b2Y}px) rotate(-17deg) translate3d(${mouseX * 0.8}px, ${mouseY * 0.8}px, 0px)`
        cardBehind2.style.transition = 'transform 0.08s ease-out'
      }

      // 6. Hero text subtle fade & upward translation when scrolling away
      const heroText = heroSection.querySelector('.framer-1cae1md')
      if (heroText && currentScrollY < 600) {
        const textOpacity = Math.max(0, 1 - currentScrollY / 550)
        const textY = -currentScrollY * 0.15
        heroText.style.transform = `translateY(${textY}px)`
        heroText.style.opacity = textOpacity
      }
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX = (clientX / innerWidth - 0.5) * 20
      mouseY = (clientY / innerHeight - 0.5) * 20
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeroTransforms()
          ticking = false
        })
        ticking = true
      }
    }

    const handleScroll = () => {
      currentScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeroTransforms()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      className="framer-1ibou1o"
      data-framer-name="Hero"
      id="hero"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
