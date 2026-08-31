export default function Footer() {
  const mainPages = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#benefits' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
  ]

  const legalLinks = [
    { label: 'Contact', href: '#pricing' },
    { label: 'FAQs', href: '#faq' },
    { label: '404 Page', href: '#home' },
    { label: 'Changelog', href: '#home' },
    { label: 'Terms of Service', href: '#home' },
    { label: 'Privacy Policy', href: '#home' },
  ]

  const socialLinks = [
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Twitter / X', href: 'https://twitter.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ]

  return (
    <footer id="footer" className="w-full bg-[#121214] text-white pt-20 pb-12 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-[#121214]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                </svg>
              </div>
              <span>ONEFIN</span>
            </a>
            <p className="text-neutral-400 text-sm mt-4 max-w-sm leading-relaxed">
              A modern finance SaaS platform that simplifies money management by unifying tools for spending, payments, investing, and financial forecasting.
            </p>
            <div className="text-xs font-semibold text-[#bebeff] mt-4 tracking-wider uppercase">
              Clarity. Confidence. Control.
            </div>
          </div>

          {/* Column 1: Main Pages */}
          <div>
            <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-4">
              Main Pages
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              {mainPages.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal & Utilities */}
          <div>
            <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-4">
              Legal & Utilities
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-4">
              Social Links
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-medium gap-4">
          <div>
            © {new Date().getFullYear()} OneFin Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Created with precision</span>
            <span>•</span>
            <span className="text-neutral-400">OneFin Finance SaaS</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
