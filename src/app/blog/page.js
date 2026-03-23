import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: 'The Grow Log - Blog',
  description: 'Cannabis strain reviews, grow guides, seed bank comparisons, and cultivation tips from Gorilla Cookies.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="container">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 4, color: 'var(--green-bright)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 30, height: 1, background: 'var(--green-bright)', display: 'inline-block' }} />
          The Grow Log
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--cream)', lineHeight: 1.05, letterSpacing: -1, marginBottom: 20 }}>
          All Posts
        </h1>
        <p style={{ fontSize: 17, color: 'var(--cream-dim)', maxWidth: 560, marginBottom: 56, lineHeight: 1.7 }}>
          Strain reviews, grow guides, seed bank comparisons, and everything you need to grow better.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: 32,
              transition: 'all 0.4s', display: 'block',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--green-bright)', marginBottom: 12 }}>
                {post.category || 'Blog'}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--cream)', textTransform: 'uppercase', marginBottom: 12, lineHeight: 1.2 }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--cream-dim)', marginBottom: 16 }}>
                {post.excerpt}
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>
                {post.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
