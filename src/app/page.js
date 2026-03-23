import { getAllPosts } from '../lib/posts';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 700, background: 'radial-gradient(circle, var(--green-glow) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 4, color: 'var(--green-bright)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 1, background: 'var(--green-bright)', display: 'inline-block' }} />
              Elevate Your Grow
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 0.95, color: 'var(--cream)', marginBottom: 28, letterSpacing: -2 }}>
              Seeds.<br />
              <span style={{ color: 'var(--green-bright)' }}>Knowledge.</span><br />
              <span style={{ color: 'var(--gold)' }}>Culture.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--cream-dim)', maxWidth: 480, marginBottom: 40 }}>
              Curated strain reviews with honest breakdowns. A grow guide that actually teaches you something. And merch that hits different.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="/strains" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 60,
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 2,
                background: 'linear-gradient(135deg, var(--green-bright), var(--green))',
                color: '#fff', boxShadow: '0 0 40px var(--green-glow-strong)',
              }}>Browse Strains →</a>
              <a href="/guide" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 60,
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 2,
                background: 'transparent', color: 'var(--cream)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}>Get The Grow Guide</a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/logo.png" alt="Gorilla Cookies" style={{ width: 360, maxWidth: '100%', filter: 'drop-shadow(0 0 60px var(--green-glow-strong))' }} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ padding: '48px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { value: '50+', label: 'Strains Reviewed' },
            { value: '12', label: 'Seed Banks' },
            { value: '100%', label: 'Honest Reviews' },
            { value: '0', label: 'Sponsored Takes' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 16 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--green-bright)', textShadow: '0 0 30px var(--green-glow)' }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 3, color: 'var(--text-dim)', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT POSTS */}
      {recentPosts.length > 0 && (
        <section style={{ padding: '120px 0' }}>
          <div className="container">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 4, color: 'var(--green-bright)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 30, height: 1, background: 'var(--green-bright)', display: 'inline-block' }} />
              Latest from the Grow Log
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--cream)', lineHeight: 1.05, letterSpacing: -1, marginBottom: 56 }}>
              Fresh reads.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
              {recentPosts.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: 32,
                  transition: 'all 0.4s', display: 'block',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--green-bright)', marginBottom: 12 }}>
                    {post.category || 'Blog'}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--cream)', textTransform: 'uppercase', marginBottom: 12, lineHeight: 1.2 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--cream-dim)' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', marginTop: 16 }}>
                    {post.date}
                  </div>
                </a>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="/blog" style={{
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 2,
                color: 'var(--green-bright)',
              }}>View All Posts →</a>
            </div>
          </div>
        </section>
      )}

      {/* EMAIL CAPTURE */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: 64, textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, var(--green-glow) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--cream)', marginBottom: 16, position: 'relative' }}>
              Get the free mini-guide
            </h2>
            <p style={{ fontSize: 16, color: 'var(--cream-dim)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7, position: 'relative' }}>
              "5 Mistakes Every First-Time Grower Makes" - a free 8-page PDF straight to your inbox. No spam, no fluff.
            </p>
            <div style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', position: 'relative' }}>
              <input type="email" placeholder="your@email.com" style={{
                flex: 1, padding: '16px 24px', borderRadius: 60,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.5)', color: 'var(--cream)',
                fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none',
              }} />
              <button style={{
                padding: '16px 32px', borderRadius: 60, border: 'none',
                fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 2, cursor: 'pointer',
                background: 'linear-gradient(135deg, var(--green-bright), var(--green))',
                color: '#fff', whiteSpace: 'nowrap',
              }}>Send It →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
