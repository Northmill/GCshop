export const metadata = {
  title: 'Merch - Gorilla Cookies Gear',
  description: 'Limited drops. Print-on-demand. No overstock, no waste. Gorilla Cookies tees, hoodies, stickers, and rolling trays.',
  keywords: ['gorilla cookies merch', 'cannabis merch', 'weed clothing', 'gorilla cookies tshirt'],
};

const products = [
  { name: 'OG Gorilla Tee', price: '€29.99', emoji: '🦍', desc: 'Classic gorilla-star logo on heavyweight cotton. Available in black and forest green.', tag: 'Bestseller' },
  { name: 'Elevate Hoodie', price: '€54.99', emoji: '🧥', desc: 'Oversized fit, embroidered logo on chest. Lined hood. Built for cold grow room nights.', tag: 'New' },
  { name: 'Unleash the Beast Tee', price: '€29.99', emoji: '💪', desc: 'Back print with full gorilla-star graphic. Front left chest logo. Unisex fit.', tag: null },
  { name: 'Sticker Pack (6x)', price: '€8.99', emoji: '✦', desc: 'Six die-cut vinyl stickers. Waterproof. Perfect for laptops, grow room gear, and jars.', tag: 'Popular' },
  { name: 'Rolling Tray - Neon', price: '€19.99', emoji: '🌿', desc: 'Metal rolling tray with green neon gorilla graphic. Curved edges. 18x14cm.', tag: null },
  { name: 'Grinder - Matte Black', price: '€24.99', emoji: '⚙️', desc: 'Four-piece aluminum grinder with laser-etched gorilla logo on the lid. Magnetic closure.', tag: null },
  { name: 'Grow Room Poster', price: '€14.99', emoji: '🖼️', desc: 'A2 poster with the full Gorilla Cookies logo. Matte finish. Looks clean on any wall.', tag: null },
  { name: 'Snapback Cap', price: '€34.99', emoji: '🧢', desc: 'Structured six-panel cap with embroidered gorilla logo. Adjustable snap closure.', tag: 'New' },
];

export default function MerchPage() {
  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="container">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 4, color: 'var(--green-bright)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 30, height: 1, background: 'var(--green-bright)', display: 'inline-block' }} />
          Merch
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--cream)', lineHeight: 1.05, letterSpacing: -1, marginBottom: 20 }}>
          Wear the culture.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--cream-dim)', maxWidth: 560, marginBottom: 56, lineHeight: 1.7 }}>
          Limited drops. Print-on-demand. No overstock, no waste. Every piece ships directly to you with no middleman inventory sitting in a warehouse.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {products.map((product, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', overflow: 'hidden',
              transition: 'all 0.4s',
            }}>
              {/* Image placeholder */}
              <div style={{
                height: 260,
                background: 'linear-gradient(135deg, #141414, #0d0d0d)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
              }}>
                <span style={{ fontSize: 72, filter: 'grayscale(0.2)' }}>{product.emoji}</span>
                {product.tag && (
                  <span style={{
                    position: 'absolute', top: 16, right: 16,
                    fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 2,
                    padding: '5px 12px', borderRadius: 40,
                    background: product.tag === 'Bestseller' ? 'var(--green-bright)' : product.tag === 'New' ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                    color: product.tag === 'Bestseller' || product.tag === 'New' ? 'var(--bg)' : 'var(--cream)',
                  }}>{product.tag}</span>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: 24 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--cream)', textTransform: 'uppercase', marginBottom: 6 }}>
                  {product.name}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--cream-dim)', marginBottom: 16 }}>
                  {product.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--green-bright)', fontWeight: 700 }}>
                    {product.price}
                  </span>
                  <a href="#" style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 1.5,
                    padding: '10px 20px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)', color: 'var(--cream-dim)',
                    border: '1px solid var(--border)',
                  }}>Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Print on demand explanation */}
        <div style={{
          marginTop: 80, padding: 48, borderRadius: 'var(--radius)',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40,
        }}>
          {[
            { icon: '🌍', title: 'Made to order', desc: 'Every item is printed when you order it. No wasted inventory, no deadstock. Better for the planet.' },
            { icon: '📦', title: 'Ships worldwide', desc: 'Printed and shipped from the facility closest to your address. Typical delivery is 5-12 business days.' },
            { icon: '✨', title: 'Quality guaranteed', desc: 'Premium blanks, professional printing. If something arrives damaged, we replace it. No hassle.' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 700, color: 'var(--cream)', marginBottom: 8, textTransform: 'none' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--cream-dim)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
