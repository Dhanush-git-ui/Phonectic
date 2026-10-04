import { useEffect } from 'react'

const content = `<div class="framer-yz2610" data-framer-name="Navbar Change" id="navbar-change"></div><div class="framer-sqdl7v" data-framer-name="Hero Content"><div class="framer-1cae1md" data-framer-name="Text &amp; CTA"><div class="framer-1785cli" data-framer-name="Heading Wrap"><div class="framer-z7f9fw" data-framer-name="Hero Heading"><div class="framer-nu8ff8" data-framer-component-type="RichTextContainer" data-framer-name="Smarter Finance" style="transform:none"><h1 class="framer-text framer-styles-preset-16hkaiw" data-styles-preset="kXDaQMV3W" dir="auto" style="--framer-text-color:var(--token-a281d3d3-8074-4276-b377-59dd81ca3f41, rgb(0, 102, 255))"><span style="display:inline-block;">SMARTER</span> <span style="display:inline-block;">PREP</span></h1></div><div class="framer-ea2r55" data-framer-component-type="RichTextContainer" data-framer-name="Made Simple" style="transform:none"><h1 class="framer-text framer-styles-preset-16hkaiw" data-styles-preset="kXDaQMV3W" dir="auto"><span style="display:inline-block;">MADE</span> <span style="display:inline-block;">SIMPLE</span></h1></div></div><div class="ssr-variant hidden-1k8ds7i"><div class="framer-164ob5c" data-framer-component-type="RichTextContainer" data-framer-name="SubHead" style="transform:none"><p class="framer-text framer-styles-preset-1tvfe9n" data-styles-preset="MRCEp2OEt" dir="auto" style="--framer-text-alignment:center">A comprehensive platform for mastering quantitative analysis, logical reasoning, and technical coding — empowering students to excel in competitive exams and campus placements.</p></div></div><div class="ssr-variant hidden-72rtr7 hidden-m2it3q"><div class="framer-164ob5c" data-framer-component-type="RichTextContainer" data-framer-name="SubHead" style="transform:none"><p class="framer-text framer-styles-preset-1tvfe9n" data-styles-preset="MRCEp2OEt" dir="auto" style="--framer-text-alignment:center">A comprehensive platform for mastering quantitative analysis, logical reasoning, and technical coding — empowering students to excel in competitive exams and campus placements.</p></div></div></div><div class="framer-3v7xp3" data-framer-name="Button Group"><div class="ssr-variant"><div class="framer-o2z1r1-container" data-framer-appear-id="o2z1r1" style="transform:translateY(50px) scale(0.5)"><!--$--><a class="framer-wUDM8 framer-lq2ef0 framer-v-lq2ef0 framer-1xiloa2" data-framer-name="Primary" data-highlight="true" href="#" data-open-contact="true" style="background:linear-gradient(180deg, rgb(37, 99, 235) 0%, rgb(15, 47, 156) 100%);border-bottom-left-radius:22px;border-bottom-right-radius:22px;border-top-left-radius:22px;border-top-right-radius:22px;box-shadow:0px 1px 2px 0px rgba(15, 47, 156, 0.37), 0px 3px 3px 0px rgba(15, 47, 156, 0.32), 0px 8px 5px 0px rgba(15, 47, 156, 0.19), 0px 13px 5px 0px rgba(15, 47, 156, 0.06)" tabindex="0"><div class="framer-l13tx6" data-framer-name="Main" style="background:linear-gradient(180deg, rgb(59, 130, 246) 0%, rgb(0, 102, 255) 100%);background-color:rgba(0, 0, 0, 0);border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:inset 0px 1px 1px 0px rgb(255, 255, 255), inset 0px -2px 2px 0px rgb(15, 47, 156), inset 0px 0px 8px 0px rgba(191, 219, 254, 0.5)"><div class="framer-1vtvotg-container"><div class="framer-K5eYu framer-rXNCz framer-SvZjy framer-9mcdme framer-v-b9q4a5" data-framer-name="16"><div class="framer-gf2onz" data-framer-component-type="RichTextContainer" data-framer-name="Get started" style="--extracted-r6o4lv:var(--variable-reference-ute9ElgLN-xnlmJ4ALb);--framer-paragraph-spacing:0px;--variable-reference-ute9ElgLN-xnlmJ4ALb:var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255));transform:none"><p class="framer-text framer-styles-preset-1rgoota" data-styles-preset="nl5egLyzz" style="--framer-text-color:var(--extracted-r6o4lv, var(--variable-reference-ute9ElgLN-xnlmJ4ALb))">Start Free Journey</p></div></div></div></div></a><!--/$--></div></div><div class="ssr-variant"><div class="framer-ahily-container" data-framer-appear-id="ahily" id="ahily" style="transform:translateY(50px) scale(0.5)"><!--$--><a class="framer-wUDM8 framer-lq2ef0 framer-v-dmfmax framer-1xiloa2" data-framer-name="Secondary" data-highlight="true" style="background:linear-gradient(180deg, rgb(40, 40, 40) 0%, rgb(6, 6, 6) 100%);border-bottom-left-radius:22px;border-bottom-right-radius:22px;border-top-left-radius:22px;border-top-right-radius:22px;box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.37), 0px 3px 3px 0px rgba(0, 0, 0, 0.32), 0px 7px 4px 0px rgba(0, 0, 0, 0.19), 0px 12px 5px 0px rgba(0, 0, 0, 0.06)" tabindex="0"><div class="framer-l13tx6" data-framer-name="Main" style="background:linear-gradient(180deg, rgb(40, 40, 40) 0%, rgb(40, 40, 40) 100%);background-color:rgb(40, 40, 40);border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:inset 0px 1px 1px 0px rgba(255, 255, 255, 0.8), inset 0px -2px 2px 0px rgb(0, 0, 0)"><div class="framer-1vtvotg-container"><div class="framer-K5eYu framer-rXNCz framer-SvZjy framer-9mcdme framer-v-b9q4a5" data-framer-name="16"><div class="framer-gf2onz" data-framer-component-type="RichTextContainer" data-framer-name="Get started" style="--extracted-r6o4lv:var(--variable-reference-ute9ElgLN-xnlmJ4ALb);--framer-paragraph-spacing:0px;--variable-reference-ute9ElgLN-xnlmJ4ALb:var(--token-c5ac9015-f2e5-48a7-9317-85dc7ef59171, rgb(255, 255, 255));transform:none"><p class="framer-text framer-styles-preset-1rgoota" data-styles-preset="nl5egLyzz" style="--framer-text-color:var(--extracted-r6o4lv, var(--variable-reference-ute9ElgLN-xnlmJ4ALb))">Explore Programs</p></div></div></div></div></a><!--/$--></div></div></div></div><div class="framer-1frftx4" data-framer-name="Spacer"></div><div class="ssr-variant hero-college-ticker-wrapper"><div class="hero-college-ticker-badge">TRUSTED BY STUDENTS &amp; PLACEMENT CELLS ACROSS PREMIER INSTITUTIONS</div><div class="framer-i27nr0-container"><div class="framer-spMKf framer-16lqyou framer-v-16lqyou" data-framer-name="Variant 1" style="width:100%"><div class="framer-xyf7ed-container" data-framer-name="Logos" name="Logos"><!--$--><section style="display:flex;width:100%;height:100%;max-width:100%;max-height:100%;place-items:center;margin:0;padding:10px;list-style-type:none;text-indent:none;-webkit-mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);overflow:hidden"><ul style="display:flex;width:100%;height:100%;max-width:100%;max-height:100%;place-items:center;margin:0;padding:0;list-style-type:none;text-indent:none;gap:48px;position:relative;flex-direction:row;will-change:auto;transform:translateX(-0px)"><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="BITS Pilani Hyderabad" decoding="async" height="62" src="/assets/college-bits.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="IIIT Hyderabad" decoding="async" height="62" src="/assets/college-iiith.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="CBIT Hyderabad" decoding="async" height="62" src="/assets/college-cbit.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="VNR VJIET" decoding="async" height="62" src="/assets/college-vnr.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="Vasavi College of Engineering" decoding="async" height="62" src="/assets/college-vasavi.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="JNTU Hyderabad" decoding="async" height="62" src="/assets/college-jntuh.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="Osmania University" decoding="async" height="62" src="/assets/college-ou.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="GRIET Hyderabad" decoding="async" height="62" src="/assets/college-griet.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="CVR College of Engineering" decoding="async" height="62" src="/assets/college-cvr.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="SNIST Hyderabad" decoding="async" height="62" src="/assets/college-snist.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="Vardhaman College of Engineering" decoding="async" height="62" src="/assets/college-vardhaman.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="IARE Hyderabad" decoding="async" height="62" src="/assets/college-iare.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="BITS Pilani Hyderabad" decoding="async" height="62" src="/assets/college-bits.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="IIIT Hyderabad" decoding="async" height="62" src="/assets/college-iiith.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="CBIT Hyderabad" decoding="async" height="62" src="/assets/college-cbit.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="VNR VJIET" decoding="async" height="62" src="/assets/college-vnr.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="Vasavi College of Engineering" decoding="async" height="62" src="/assets/college-vasavi.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="JNTU Hyderabad" decoding="async" height="62" src="/assets/college-jntuh.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="Osmania University" decoding="async" height="62" src="/assets/college-ou.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="GRIET Hyderabad" decoding="async" height="62" src="/assets/college-griet.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="CVR College of Engineering" decoding="async" height="62" src="/assets/college-cvr.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="SNIST Hyderabad" decoding="async" height="62" src="/assets/college-snist.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="Vardhaman College of Engineering" decoding="async" height="62" src="/assets/college-vardhaman.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li><li aria-hidden="true"><div class="framer-18iagas" data-framer-name="Logo" style="flex-shrink:0"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="IARE Hyderabad" decoding="async" height="62" src="/assets/college-iare.svg" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="260"/></div></div></li></ul></section><!--/$--></div></div></div></div></div><div class="framer-1vvvbza" data-framer-name="Hero Illustration"><div class="framer-vfhbl3" data-framer-name="Hero Illustration Container"><div class="ssr-variant"><div class="framer-giti9r" data-framer-appear-id="giti9r" data-framer-name="Phone" style="will-change:transform;opacity:0;transform:translateY(55px) scale(0.8)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="hero-image" decoding="async" height="2243" sizes="(min-width: 1200px) calc(max(100vw - 160px, 1200px) * 0.4), (min-width: 810px) and (max-width: 1199.98px) calc(max(100vw - 160px, 1200px) * 0.4), (max-width: 809.98px) calc(max(min((100vw - 160px) * 2.75, 1000px), 600px) * 0.4)" src="/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png" srcset="/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png 1002w,/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png 1098w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="1098"/></div></div></div><div class="ssr-variant"><div class="framer-1154f73" data-framer-appear-id="1154f73" data-framer-name="Hero Data Card (Front)" style="will-change:transform;opacity:0;transform:translateX(35px) translateY(-170px) rotate(18deg) scale(0)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="aptitude-streak" decoding="async" height="456" src="/assets/hero-aptitude-card.png" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="525"/></div></div></div><div class="ssr-variant"><div class="framer-8ytohn" data-framer-appear-id="8ytohn" data-framer-name="Hero Data Card (Front)" style="will-change:transform;opacity:0;transform:translateX(20px) translateY(-20px) rotate(-8deg) scale(0)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="speed-math-accuracy" decoding="async" height="84" src="/assets/hero-speed-card.png" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="452"/></div></div></div><div class="framer-rbqmm" data-border="true" data-framer-name="Glass" style="will-change:transform;opacity:1;transform:translate(-50%, -50%)"></div><div class="ssr-variant"><div class="framer-14nwv2u" data-framer-appear-id="14nwv2u" data-framer-name="Hero Data Card (Behind)" style="will-change:transform;opacity:0;transform:translate(-50%, -50%) translateX(-110px) translateY(-50px) rotate(-28deg) scale(0)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="national-percentile" decoding="async" height="538" src="/assets/hero-percentile-card.png" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="568"/></div></div></div><div class="ssr-variant"><div class="framer-12og78t" data-framer-appear-id="12og78t" data-framer-name="Hero Data Card (Behind)" style="will-change:transform;opacity:0;transform:translate(-50%, -50%) translateX(150px) translateY(-120px) rotate(-14deg) scale(0)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="placement-offers" decoding="async" height="112" src="/assets/hero-streak-card.png" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="618"/></div></div></div></div></div><div class="framer-7yy0jx" data-framer-name="Gradient Overlay"><div class="framer-1c9i0wn" data-framer-name="Gradient Image"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="" decoding="async" height="1290" sizes="(min-width: 1200px) max(100vw, 1440px), (min-width: 810px) and (max-width: 1199.98px) max(100vw, 1440px), (max-width: 809.98px) max(100vw, 1440px)" src="/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png" srcset="/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 512w,/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 1024w,/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 2048w,/assets/2BOV7PCdHy8KOdzjtUawNXYnaoQ.png 2880w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:fill" width="2880"/></div></div></div><div class="framer-86uqel" data-framer-name="Hero Background" style="transform:translateX(-50%)"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="hero-texture" decoding="async" height="810" sizes="(min-width: 1200px) max(100vw, 1200px), (min-width: 810px) and (max-width: 1199.98px) max(100vw, 1200px), (max-width: 809.98px) max(100vw, 1200px)" src="/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg" srcset="/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg 512w,/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg 1024w,/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg 1440w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:contain" width="1440"/></div></div><div class="framer-1rydgv2" data-framer-name="Bottom"><div class="framer-12on3yb" data-framer-name="Corner Border Bottom"></div><div class="framer-1k9pwao" data-framer-name="Corner Border Middle"></div><div class="framer-jxlrc4" data-framer-name="Corner Border Top"></div></div>`

export default function Hero() {
	useEffect(() => {
		const heroSection = document.getElementById('hero')
		if (!heroSection) return

		// 1. Initial Load Staggered Text Animations
		const line1 = heroSection.querySelector('.framer-nu8ff8')
		const line2 = heroSection.querySelector('.framer-ea2r55')
		const subheads = heroSection.querySelectorAll('.framer-164ob5c')

		if (line1) {
			line1.style.opacity = '0'
			line1.style.transform = 'translateY(30px)'
			setTimeout(() => {
				line1.style.transition =
					'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
				line1.style.opacity = '1'
				line1.style.transform = 'translateY(0)'
			}, 50)
		}

		if (line2) {
			line2.style.opacity = '0'
			line2.style.transform = 'translateY(30px)'
			setTimeout(() => {
				line2.style.transition =
					'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
				line2.style.opacity = '1'
				line2.style.transform = 'translateY(0)'
			}, 50)
		}

		subheads.forEach((subhead) => {
			subhead.style.opacity = '0'
			subhead.style.transform = 'translateY(18px)'
			setTimeout(() => {
				subhead.style.transition =
					'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
				subhead.style.opacity = '1'
				subhead.style.transform = 'translateY(0)'
			}, 50)
		})

		// 2. Animate CTA buttons entrance and attach interactive hover classes
		const btnPrimaryWrap = heroSection.querySelector('.framer-o2z1r1-container')
		const btnSecondaryWrap = heroSection.querySelector('.framer-ahily-container')
		const btnPrimary = heroSection.querySelector('.framer-wUDM8[data-framer-name="Primary"]')
		const btnSecondary = heroSection.querySelector('.framer-wUDM8[data-framer-name="Secondary"]')

		if (btnPrimary) btnPrimary.classList.add('hero-btn-primary')
		if (btnSecondary) btnSecondary.classList.add('hero-btn-secondary')

		if (btnPrimaryWrap) {
			setTimeout(() => {
				btnPrimaryWrap.style.transform = 'translateY(0) scale(1)'
				btnPrimaryWrap.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
			}, 50)
		}
		if (btnSecondaryWrap) {
			setTimeout(() => {
				btnSecondaryWrap.style.transform = 'translateY(0) scale(1)'
				btnSecondaryWrap.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s'
			}, 50)
		}

		// 3. Attach Framer Loop Effects (Floating) to inner card elements
		// These keyframe animations perform ±15px hovering with slight rotation and alternate easing
		const phoneInner = heroSection.querySelector('[data-framer-name="Phone"] > div')
		if (phoneInner) phoneInner.classList.add('hero-phone-bob')

		const cardFront1Inner = heroSection.querySelector('.framer-1154f73 > div')
		if (cardFront1Inner) cardFront1Inner.classList.add('hero-card-float-front-1')

		const cardFront2Inner = heroSection.querySelector('.framer-8ytohn > div')
		if (cardFront2Inner) cardFront2Inner.classList.add('hero-card-float-front-2')

		const cardBehind1Inner = heroSection.querySelector('.framer-14nwv2u > div')
		if (cardBehind1Inner) cardBehind1Inner.classList.add('hero-card-float-behind-1')

		const cardBehind2Inner = heroSection.querySelector('.framer-12og78t > div')
		if (cardBehind2Inner) cardBehind2Inner.classList.add('hero-card-float-behind-2')

		const glowImg = heroSection.querySelector('.framer-1c9i0wn')
		if (glowImg) glowImg.classList.add('hero-glow-breathing')

		// 4. Framer Spring Appear Effect & Scroll Transform (Parallax)
		const mountTime = performance.now()
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		// Exact 2nd-order harmonic spring formula used by Framer Motion (stiffness: 140, damping: 12)
		// Produces playful Framer overshoot (~1.15x) before settling cleanly to 1.00
		const calculateFramerSpring = (now, delaySec, stiffness = 140, damping = 12) => {
			if (prefersReducedMotion) return 1.0
			const elapsed = (now - mountTime) / 1000 - delaySec
			if (elapsed <= 0) return 0
			if (elapsed >= 1.25) return 1.0
			const omega0 = Math.sqrt(stiffness)
			const zeta = damping / (2 * omega0)
			if (zeta < 1.0) {
				const omega_d = omega0 * Math.sqrt(1 - zeta * zeta)
				const decay = Math.exp(-zeta * omega0 * elapsed)
				return (
					1.0 -
					decay *
						(Math.cos(omega_d * elapsed) + (zeta / Math.sqrt(1 - zeta * zeta)) * Math.sin(omega_d * elapsed))
				)
			}
			return 1.0
		}

		let targetMouseX = 0
		let targetMouseY = 0
		let mouseX = 0
		let mouseY = 0
		let rafId = null

		const updateHeroTransforms = (timestamp) => {
			const now = timestamp || performance.now()
			const currentScrollY = window.scrollY || window.pageYOffset || 0

			// Smooth interpolation for subtle mouse parallax
			mouseX += (targetMouseX - mouseX) * 0.1
			mouseY += (targetMouseY - mouseY) * 0.1

			// 1) Background Phone Mockup:
			// Centered, top ~165px, sinks downward smoothly on scroll with parallax
			const phone = heroSection.querySelector('[data-framer-name="Phone"]')
			if (phone) {
				const spring = calculateFramerSpring(now, 0.06, 140, 12)
				const elapsed = (now - mountTime) / 1000 - 0.06
				const baseOpacity = prefersReducedMotion ? 1 : Math.min(1, Math.max(0, elapsed / 0.22))
				const scrollFade = Math.max(0, 1 - Math.max(0, currentScrollY - 400) / 300)
				const phoneScale = (prefersReducedMotion ? 1 : 0.8 + 0.2 * spring) * (1 - Math.min(0.08, currentScrollY * 0.00015))
				const appearOffsetY = prefersReducedMotion ? 0 : (1 - Math.min(1, spring)) * 40
				const phoneScrollY = 15 + appearOffsetY + currentScrollY * 0.42
				phone.style.opacity = `${baseOpacity * scrollFade}`
				phone.style.transform = `translateY(${phoneScrollY}px) scale(${phoneScale}) translate3d(${mouseX * 0.5}px, ${mouseY * 0.5}px, 0px)`
			}

			// 2) Behind Card 1 (National Percentile - Top Left):
			// Tucked behind left shoulder, blooms UP and LEFT on scroll
			const cardBehind1 = heroSection.querySelector('.framer-14nwv2u')
			if (cardBehind1) {
				const spring = calculateFramerSpring(now, 0.18, 140, 12)
				const elapsed = (now - mountTime) / 1000 - 0.18
				const baseOpacity = prefersReducedMotion ? 0.85 : Math.min(0.85, Math.max(0, (elapsed / 0.22) * 0.85))
				const scrollFade = Math.max(0, 1 - Math.max(0, currentScrollY - 420) / 280)
				const appearOffsetY = prefersReducedMotion ? 0 : (1 - Math.min(1, spring)) * 45
				const b1X = -110 - currentScrollY * 0.28
				const b1Y = -50 + appearOffsetY + currentScrollY * 0.70
				const b1Rot = -28 - currentScrollY * 0.02
				const b1Scale = prefersReducedMotion ? 1 : spring
				cardBehind1.style.opacity = `${baseOpacity * scrollFade}`
				cardBehind1.style.transform = `translate(-50%, -50%) translateX(${b1X}px) translateY(${b1Y}px) rotate(${b1Rot}deg) scale(${b1Scale}) translate3d(${-mouseX * 0.8}px, ${-mouseY * 0.8}px, 0px)`
			}

			// 3) Behind Card 2 (Placement Offers - Top Right):
			// Peeks out above right front card, blooms UP and RIGHT on scroll
			const cardBehind2 = heroSection.querySelector('.framer-12og78t')
			if (cardBehind2) {
				const spring = calculateFramerSpring(now, 0.28, 140, 12)
				const elapsed = (now - mountTime) / 1000 - 0.28
				const baseOpacity = prefersReducedMotion ? 0.85 : Math.min(0.85, Math.max(0, (elapsed / 0.22) * 0.85))
				const scrollFade = Math.max(0, 1 - Math.max(0, currentScrollY - 420) / 280)
				const appearOffsetY = prefersReducedMotion ? 0 : (1 - Math.min(1, spring)) * 45
				const b2X = 150 + currentScrollY * 0.25
				const b2Y = -120 + appearOffsetY + currentScrollY * 0.65
				const b2Rot = -14 + currentScrollY * 0.01
				const b2Scale = prefersReducedMotion ? 1 : spring
				cardBehind2.style.opacity = `${baseOpacity * scrollFade}`
				cardBehind2.style.transform = `translate(-50%, -50%) translateX(${b2X}px) translateY(${b2Y}px) rotate(${b2Rot}deg) scale(${b2Scale}) translate3d(${mouseX * 0.8}px, ${mouseY * 0.8}px, 0px)`
			}

			// 4) Front Card 1 (Aptitude Streak / Total Expense - Right Foreground):
			// Overlaps right side of phone by ~40%, blooms UP and RIGHT on scroll
			const cardFront1 = heroSection.querySelector('.framer-1154f73')
			if (cardFront1) {
				const spring = calculateFramerSpring(now, 0.38, 140, 12)
				const elapsed = (now - mountTime) / 1000 - 0.38
				const baseOpacity = prefersReducedMotion ? 1 : Math.min(1, Math.max(0, elapsed / 0.2))
				const scrollFade = Math.max(0, 1 - Math.max(0, currentScrollY - 420) / 280)
				const appearOffsetY = prefersReducedMotion ? 0 : (1 - Math.min(1, spring)) * 50
				const c1X = 35 + currentScrollY * 0.32
				const c1Y = -170 + appearOffsetY + currentScrollY * 0.55
				const c1Rot = 18 + currentScrollY * 0.02
				const c1Scale = prefersReducedMotion ? 1 : spring
				cardFront1.style.opacity = `${baseOpacity * scrollFade}`
				cardFront1.style.transform = `translateX(${c1X}px) translateY(${c1Y}px) rotate(${c1Rot}deg) scale(${c1Scale}) translate3d(${mouseX * 1.3}px, ${mouseY * 1.3}px, 0px)`
			}

			// 5) Front Card 2 (Speed Math / Pay Pill - Left Foreground):
			// Straddles left edge of phone at coin rim level, blooms DOWN and LEFT on scroll
			const cardFront2 = heroSection.querySelector('.framer-8ytohn')
			if (cardFront2) {
				const spring = calculateFramerSpring(now, 0.48, 140, 12)
				const elapsed = (now - mountTime) / 1000 - 0.48
				const baseOpacity = prefersReducedMotion ? 1 : Math.min(1, Math.max(0, elapsed / 0.2))
				const scrollFade = Math.max(0, 1 - Math.max(0, currentScrollY - 420) / 280)
				const appearOffsetY = prefersReducedMotion ? 0 : (1 - Math.min(1, spring)) * 45
				const c2X = 20 - currentScrollY * 0.26
				const c2Y = -20 + appearOffsetY + currentScrollY * 0.95
				const c2Rot = -8 - currentScrollY * 0.015
				const c2Scale = prefersReducedMotion ? 1 : spring
				cardFront2.style.opacity = `${baseOpacity * scrollFade}`
				cardFront2.style.transform = `translateX(${c2X}px) translateY(${c2Y}px) rotate(${c2Rot}deg) scale(${c2Scale}) translate3d(${-mouseX * 1.3}px, ${-mouseY * 1.3}px, 0px)`
			}

			// Hero text stays 100% visible, bold, and prominent
			const heroText = heroSection.querySelector('.framer-1cae1md')
			if (heroText) {
				heroText.style.opacity = '1'
				heroText.style.transform = 'none'
			}

			rafId = requestAnimationFrame(updateHeroTransforms)
		}

		const handleMouseMove = (e) => {
			const { clientX, clientY } = e
			const { innerWidth, innerHeight } = window
			targetMouseX = (clientX / innerWidth - 0.5) * 25
			targetMouseY = (clientY / innerHeight - 0.5) * 25
		}

		const handleScroll = () => {
			updateHeroTransforms()
		}

		window.addEventListener('mousemove', handleMouseMove, { passive: true })
		window.addEventListener('scroll', handleScroll, { passive: true })
		rafId = requestAnimationFrame(updateHeroTransforms)

		return () => {
			if (rafId) cancelAnimationFrame(rafId)
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
