'use client';

import { useState } from 'react';

const chapters = [
  { num: '01', title: 'Seed selection and genetics 101', desc: 'How to pick the right strain for your setup, climate, and experience level. Understanding indica vs sativa vs hybrid genetics and what matters for your grow.' },
  { num: '02', title: 'Germination methods compared', desc: "Paper towel, direct soil, water soak, and jiffy pellet methods tested side by side. Which works best and why, with troubleshooting for seeds that won't pop." },
  { num: '03', title: 'Indoor vs outdoor setup', desc: 'Complete setup guides for both environments. Equipment lists, space requirements, cost breakdowns, and the pros and cons of each approach.' },
  { num: '04', title: 'Nutrient schedules by growth stage', desc: 'Week-by-week feeding charts for veg and flower. NPK ratios explained simply. Organic vs synthetic nutrients and when to use each.' },
  { num: '05', title: 'Training techniques: LST, topping, SCROG', desc: 'How to shape your plants for maximum light exposure and bigger yields. Step-by-step instructions with timing for each technique.' },
  { num: '06', title: 'Harvest timing and trichome reading', desc: 'Using a loupe to read trichome color. The difference between harvesting early, on time, and late. How timing affects potency and effect.' },
  { num: '07', title: 'Drying, curing, and storage', desc: 'The steps most growers rush and regret. Proper temperature and humidity for drying. Curing schedules that maximize flavor and smoothness. Long-term storage methods.' },
];

const wallets = [
  { label: 'BTC', address: 'bc1q00k9dwa93qheg5uk2t8en96p5aexq8eukn2la6', network: 'Bitcoin' },
  { label: 'TAO', address: '5DDh51Gm9MhN9FgQd2dLjpirywHm11nFAkmUw1Z5FtRnwbuT', network: 'Bittensor' },
  { label: 'ASTER', address: '0x643a908f692208f3ce7a2e56cc47138c696b08ad', network: 'Aster Network' },
];

export default function GuidePage() {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(wallets[selectedWallet].address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 80 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 4, color: 'var(--green-bright)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 30, height: 1, background: 'var(--green-bright)', display: 'inline-block' }} />
            The Gorilla Grow Bible
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--cream)', lineHeight: 1.05, letterSpacing: -1, marginBottom: 20 }}>
            Stop guessing. Start growing.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--cream-dim)', lineHeight: 1.7 }}>
            Everything from germination to curing in one no-nonsense PDF. Seven chapters covering every stage of the grow cycle. Written for first-timers, useful for veterans. No filler, no upsells, no subscription.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 24, fontWeight: 700, color: 'var(--cream)', marginBottom: 32, textTransform: 'none' }}>
              What's inside
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {chapters.map((ch) => (
                <div key={ch.num} style={{
                  padding: '28px 0', borderBottom: '1px solid var(--border)',
                  display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--green-bright)',
                    width: 40, height: 40, borderRadius: 10, background: 'rgba(46,139,46,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{ch.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 700, color: 'var(--cream)', marginBottom: 8, textTransform: 'none' }}>{ch.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--cream-dim)' }}>{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: 48, position: 'sticky', top: 120,
          }}>
            {!showPayment ? (
              <>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--cream)', textTransform: 'uppercase', marginBottom: 8 }}>
                  The Gorilla<br />Grow Bible
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green-bright)', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 32 }}>
                  Complete Guide - V1.0
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 32 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: 'var(--green-bright)', textShadow: '0 0 40px var(--green-glow)' }}>$9.99</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: 2 }}>one-time</span>
                </div>
                <div style={{ marginBottom: 32 }}>
                  {['7 chapters, seed to harvest', 'Strain-specific grow tips', 'Nutrient calculator included', 'Free updates when the science changes', 'Pay with crypto, no account needed'].map((item, i) => (
                    <div key={i} style={{
                      padding: '12px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
                      fontSize: 14, color: 'var(--cream-dim)', display: 'flex', alignItems: 'center', gap: 12,
                    }}>
                      <span style={{ color: 'var(--green-bright)', fontSize: 16 }}>&#10003;</span>{item}
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowPayment(true)} style={{
                  display: 'block', width: '100%', textAlign: 'center', padding: '18px 32px',
                  borderRadius: 60, border: 'none', fontFamily: 'var(--font-mono)', fontSize: 14,
                  fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, cursor: 'pointer',
                  background: 'linear-gradient(135deg, var(--green-bright), var(--green))',
                  color: '#fff', boxShadow: '0 0 40px var(--green-glow-strong)',
                }}>Buy Now - $9.99</button>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', textAlign: 'center', marginTop: 16, letterSpacing: 1 }}>
                  BTC / TAO / ASTER accepted
                </p>
              </>
            ) : (
              <>
                <button onClick={() => setShowPayment(false)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', marginBottom: 24, padding: 0,
                }}>&larr; Back</button>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--cream)', textTransform: 'uppercase', marginBottom: 8 }}>
                  Pay with Crypto
                </div>
                <p style={{ fontSize: 13, color: 'var(--cream-dim)', marginBottom: 24, lineHeight: 1.6 }}>
                  Send $9.99 equivalent to one of the addresses below. Then email your transaction ID
                  to <a href="mailto:info@gorillacookies.shop" style={{ color: 'var(--green-bright)' }}>info@gorillacookies.shop</a> and
                  we'll send your PDF within 24 hours.
                </p>
                <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                  {wallets.map((w, i) => (
                    <button key={w.label} onClick={() => { setSelectedWallet(i); setCopied(false); }} style={{
                      flex: 1, padding: '12px 0', borderRadius: 10,
                      cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: 2,
                      background: selectedWallet === i ? 'var(--green-bright)' : 'rgba(255,255,255,0.04)',
                      color: selectedWallet === i ? '#fff' : 'var(--text-dim)',
                      border: selectedWallet === i ? '1px solid var(--green-bright)' : '1px solid var(--border)',
                      transition: 'all 0.2s',
                    }}>{w.label}</button>
                  ))}
                </div>
                <div style={{
                  background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: 20, marginBottom: 16,
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--text-dim)', marginBottom: 8 }}>
                    {wallets[selectedWallet].network}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cream)', wordBreak: 'break-all', lineHeight: 1.6 }}>
                    {wallets[selectedWallet].address}
                  </div>
                </div>
                <button onClick={copyAddress} style={{
                  display: 'block', width: '100%', textAlign: 'center', padding: '14px 24px',
                  borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12,
                  fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2,
                  background: copied ? 'rgba(46,139,46,0.15)' : 'rgba(255,255,255,0.04)',
                  color: copied ? 'var(--green-bright)' : 'var(--cream)',
                  border: copied ? '1px solid var(--green-bright)' : '1px solid var(--border)',
                  transition: 'all 0.3s',
                }}>{copied ? 'Copied!' : 'Copy Address'}</button>
                <div style={{
                  marginTop: 24, padding: 16, borderRadius: 10,
                  background: 'rgba(46,139,46,0.05)', border: '1px solid rgba(46,139,46,0.15)',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--green-bright)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
                    After payment
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--cream-dim)', lineHeight: 1.6, margin: 0 }}>
                    Email your tx hash to <strong style={{ color: 'var(--cream)' }}>info@gorillacookies.shop</strong> with the subject "Grow Bible". We verify and send the PDF within 24 hours.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div style={{ marginTop: 120, maxWidth: 640 }}>
          <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 24, fontWeight: 700, color: 'var(--cream)', marginBottom: 32, textTransform: 'none' }}>
            Common questions
          </h2>
          {[
            { q: 'Is this for complete beginners?', a: 'Yes. Every chapter assumes you are starting from zero. Technical terms are explained when they first appear.' },
            { q: 'Does it cover autoflowers and photoperiods?', a: 'Both. The guide covers the differences and gives separate advice where the techniques diverge.' },
            { q: 'Will it be updated?', a: 'When growing science or best practices change, the guide gets updated. You get access to future versions at no extra cost.' },
            { q: 'Why crypto only?', a: 'No middlemen, no payment processors, no data collection. You send payment, we send the PDF. Simple as it should be.' },
            { q: 'Can I get a refund?', a: 'If the guide does not meet your expectations, reach out within 30 days. We will work it out.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 700, color: 'var(--cream)', marginBottom: 8, textTransform: 'none' }}>{faq.q}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--cream-dim)' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
