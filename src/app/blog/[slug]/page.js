import { getPostBySlug, getPostSlugs } from '../../../lib/posts';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt || post.title,
    keywords: post.keywords || [],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      url: `https://gorillacookies.shop/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article style={{ padding: '80px 0 120px' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <a href="/blog" style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            textTransform: 'uppercase', letterSpacing: 2,
            color: 'var(--green-bright)', display: 'inline-flex',
            alignItems: 'center', gap: 8, marginBottom: 32,
          }}>
            ← Back to Grow Log
          </a>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--green-bright)', marginBottom: 16 }}>
            {post.category || 'Blog'} · {post.date}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)',
            color: 'var(--cream)', lineHeight: 1.1, letterSpacing: -1,
            textTransform: 'uppercase',
          }}>
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {/* CTA */}
        <div style={{
          marginTop: 64, padding: 40, borderRadius: 'var(--radius)',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: 'var(--green-bright)', marginBottom: 12 }}>
            Ready to grow?
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--cream)', marginBottom: 16, textTransform: 'uppercase' }}>
            Get the Gorilla Grow Bible
          </h3>
          <p style={{ color: 'var(--cream-dim)', marginBottom: 24, fontSize: 15 }}>
            Seven chapters. Seed to harvest. Everything you need in one PDF.
          </p>
          <a href="/guide" style={{
            display: 'inline-flex', padding: '14px 28px', borderRadius: 60,
            fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: 2,
            background: 'linear-gradient(135deg, var(--green-bright), var(--green))',
            color: '#fff',
          }}>Download - €14.99</a>
        </div>
      </div>
    </article>
  );
}
