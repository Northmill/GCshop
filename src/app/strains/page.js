export const metadata = {
  title: 'Strain Reviews - Honest Cannabis Strain Breakdowns',
  description: 'In-depth cannabis strain reviews covering genetics, THC levels, flavor, effects, and grow difficulty. No sponsored takes, no hype.',
  keywords: ['cannabis strain reviews', 'best strains 2026', 'gorilla cookies strain', 'strain comparison'],
};

const strains = [
  {
    name: 'Gorilla Cookies',
    type: 'Hybrid',
    typeColor: '#3DA63D',
    thc: '28%',
    yield: '550g/m²',
    flower: '9 wks',
    difficulty: 'Easy',
    desc: 'The namesake. Gorilla Glue #4 crossed with Thin Mint GSC. Heavy resin production, diesel-cookie terpene profile. Forgiving on grow errors and consistently delivers big yields.',
    slug: 'gorilla-cookies-strain-definitive-review',
    affiliate: 'https://ilgm.com/products/gorilla-glue-autoflower-seeds?aff=8067&variant=UHJvZHVjdFZhcmlhbnQ6MjUw&aff=8067',
  },
  {
    name: 'Gorilla Glue #4',
    type: 'Hybrid',
    typeColor: '#3DA63D',
    thc: '30%',
    yield: '500g/m²',
    flower: '8 wks',
    difficulty: 'Moderate',
    desc: 'Chem Sister x Sour Dubb x Chocolate Diesel. One of the stickiest strains ever created. Absurd trichome coverage and a heavy, sedative high that locks you to the couch.',
    slug: 'gorilla-glue-4-strain-review',
    affiliate: 'https://ilgm.com/products/gorilla-glue-autoflower-seeds?aff=8067&variant=UHJvZHVjdFZhcmlhbnQ6MjUw&aff=8067',
  },
  {
    name: 'Purple Punch',
    type: 'Indica',
    typeColor: '#a78bfa',
    thc: '25%',
    yield: '450g/m²',
    flower: '8 wks',
    difficulty: 'Easy',
    desc: 'Larry OG x Granddaddy Purple. Grape candy terps with a knockout body high. Gorgeous purple fan leaves when temps drop at night. Excellent for extracts.',
    slug: null,
    affiliate: 'https://ilgm.com/products/purple-punch-feminized-seeds?variant=UHJvZHVjdFZhcmlhbnQ6ODgz&aff=8067',
  },
  {
    name: 'Amnesia Haze',
    type: 'Sativa',
    typeColor: '#C9A96E',
    thc: '22%',
    yield: '600g/m²',
    flower: '11 wks',
    difficulty: 'Moderate',
    desc: 'Amsterdam classic with South Asian, Jamaican, and Afghani genetics. Citrus-forward with an energetic cerebral high. Long flower time but the yield makes up for it.',
    slug: null,
    affiliate: 'https://ilgm.com/products/amnesia-haze-feminized-seeds?variant=UHJvZHVjdFZhcmlhbnQ6ODQw&aff=8067',
  },
  {
    name: 'Wedding Cake',
    type: 'Hybrid',
    typeColor: '#3DA63D',
    thc: '27%',
    yield: '500g/m²',
    flower: '9 wks',
    difficulty: 'Easy',
    desc: 'Triangle Kush x Animal Mints. Rich vanilla and tangy flavor. Produces dense, trichome-coated buds. A relaxing high with a euphoric edge that works well for pain management.',
    slug: null,
    affiliate: 'https://ilgm.com/products/wedding-cake-feminized-seeds?variant=UHJvZHVjdFZhcmlhbnQ6MjY0&aff=8067',
  },
  {
    name: 'Gelato',
    type: 'Hybrid',
    typeColor: '#3DA63D',
    thc: '26%',
    yield: '450g/m²',
    flower: '9 wks',
    difficulty: 'Moderate',
    desc: 'Sunset Sherbet x Thin Mint GSC. Sweet and fruity with a creamy finish. Compact plants that produce colorful, resinous buds. Strong body relaxation with a clear head.',
    slug: null,
    affiliate: 'https://ilgm.com/products/gelato-autoflower-seeds?variant=UHJvZHVjdFZhcmlhbnQ6MTEw&aff=8067',
  },
  {
    name: 'Blue Dream',
    type: 'Hybrid',
    typeColor: '#3DA63D',
    thc: '21%',
    yield: '550g/m²',
    flower: '10 wks',
    difficulty: 'Easy',
    desc: 'Blueberry x Haze. The most popular strain in the US for a reason. Sweet berry flavor, balanced effects, huge yields, and practically impossible to mess up growing.',
    slug: null,
    affiliate: 'https://ilgm.com/products/blue-dream-autoflower-seeds?variant=UHJvZHVjdFZhcmlhbnQ6NzI=&aff=8067',
  },
  {
    name: 'Northern Lights',
    type: 'Indica',
    typeColor: '#a78bfa',
    thc: '18%',
    yield: '500g/m²',
    flower: '7 wks',
    difficulty: 'Easy',
    desc: 'One of the most famous indica strains ever bred. Fast flowering, low odor, resilient genetics. The benchmark for relaxation and sleep support.',
    slug: null,
    affiliate: 'https://ilgm.com/products/northern-lights-autoflower-seeds?variant=UHJvZHVjdFZhcmlhbnQ6NzAw&aff=8067',
  },
];

export default function StrainsPage() {
  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="container">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 4, color: 'var(--green-bright)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 30, height: 1, background: 'var(--green-bright)', display: 'inline-block' }} />
          Strain Reviews
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--cream)', lineHeight: 1.05, letterSpacing: -1, marginBottom: 20 }}>
          Know what you're growing.
        </h1>
        <p style={{ fontSize: 17, color: 'var(--cream-dim)', maxWidth: 560, marginBottom: 56, lineHeight: 1.7 }}>
          Every strain broken down by genetics, grow difficulty, yield, and effects. No paid placements, no sponsored rankings. Just honest assessments.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {strains.map((strain, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: 32,
              transition: 'all 0.4s',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--cream)', textTransform: 'uppercase' }}>
                  {strain.name}
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
                  letterSpacing: 2, padding: '5px 12px', borderRadius: 40,
                  border: `1px solid ${strain.typeColor}33`, color: strain.typeColor,
                  background: `${strain.typeColor}0D`, whiteSpace: 'nowrap',
                }}>{strain.type}</span>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
                margin: '20px 0', padding: '20px 0',
                borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
              }}>
                {[
                  { label: 'THC', val: strain.thc },
                  { label: 'Yield', val: strain.yield },
                  { label: 'Flower', val: strain.flower },
                  { label: 'Level', val: strain.difficulty },
                ].map((s, j) => (
                  <div key={j}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--text-dim)', marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--cream)' }}>{s.val}</div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--cream-dim)', marginBottom: 24 }}>
                {strain.desc}
              </p>

              <div style={{ display: 'flex', gap: 12 }}>
                <a href={strain.affiliate} target="_blank" rel="noopener noreferrer" style={{
                  flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: 10,
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: 1.5,
                  background: 'linear-gradient(135deg, var(--green-bright), var(--green))', color: '#fff',
                }}>Find Seeds</a>
                {strain.slug ? (
                  <a href={`/blog/${strain.slug}`} style={{
                    flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: 10,
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 1.5,
                    background: 'rgba(255,255,255,0.04)', color: 'var(--cream-dim)',
                    border: '1px solid var(--border)',
                  }}>Full Review</a>
                ) : (
                  <span style={{
                    flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: 10,
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 1.5,
                    background: 'rgba(255,255,255,0.02)', color: 'var(--text-dim)',
                    border: '1px solid var(--border)',
                  }}>Review Coming</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
