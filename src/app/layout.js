import '../styles/globals.css';

export const metadata = {
  title: {
    default: 'Gorilla Cookies - Elevate Your Grow | Seeds, Guides & Merch',
    template: '%s | Gorilla Cookies',
  },
  description: 'Curated cannabis strain reviews, grow guides, and gorilla-approved merch. Honest breakdowns, no sponsored takes.',
  keywords: ['gorilla cookies strain', 'cannabis seeds', 'grow guide', 'strain reviews', 'autoflower seeds', 'seed bank reviews'],
  authors: [{ name: 'Gorilla Cookies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gorillacookies.shop',
    siteName: 'Gorilla Cookies',
    title: 'Gorilla Cookies - Elevate Your Grow',
    description: 'Curated cannabis strain reviews, grow guides, and gorilla-approved merch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gorilla Cookies - Elevate Your Grow',
    description: 'Curated cannabis strain reviews, grow guides, and gorilla-approved merch.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '16px 0',
          background: 'rgba(10,10,10,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img src="/images/logo.png" alt="Gorilla Cookies" style={{
                height: '48px', width: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(46,139,46,0.2))',
              }} />
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '18px',
                  color: 'var(--cream)', textTransform: 'uppercase', letterSpacing: '1px',
                }}>
                  Gorilla<span style={{ color: 'var(--green-bright)' }}>Cookies</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  textTransform: 'uppercase', letterSpacing: '3px',
                  color: 'var(--gold)', marginTop: '2px',
                }}>
                  Elevate Your Grow
                </div>
              </div>
            </a>
            <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/strains', label: 'Strains' },
                { href: '/guide', label: 'Grow Guide' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    textTransform: 'uppercase', letterSpacing: '2px',
                    color: 'var(--text-dim)', transition: 'color 0.3s',
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>

        <footer style={{ padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>
              © 2026 Gorilla Cookies. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '24px' }}>
              {['Twitter', 'Telegram', 'Instagram'].map((s) => (
                <a key={s} href="#" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: 'var(--text-dim)', letterSpacing: '1px',
                }}>{s}</a>
              ))}
            </div>
          </div>
          <div className="container" style={{ marginTop: '16px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '1px' }}>
              All seeds are strictly sold as souvenirs or collectibles. They are not legal to germinate in most countries.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
