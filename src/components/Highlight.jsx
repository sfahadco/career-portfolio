/* ─── Highlight ───────────────────────────────────────────────────────────
   The "why me" callout gallery — a carousel of high-signal differentiators
   between the marquee and the work. Slides come from PORTFOLIO.highlights;
   navigate with the arrows or the dots. Content (statement, accent phrases,
   facets) is fully data-driven.
   ──────────────────────────────────────────────────────────────────────── */
import React from 'react';
import { PORTFOLIO } from '../data.js';
import { Ic } from '../icons.js';

// Wrap each emphasis phrase found in `text` in an accent-coloured span.
function renderStatement(text, emphasis = []) {
  if (!emphasis.length) return text;
  const escaped = emphasis.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp('(' + escaped.join('|') + ')', 'g');
  return text.split(re).map((part, i) =>
    emphasis.includes(part)
      ? <span key={i} style={{ color: 'var(--accent)' }}>{part}</span>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

function ArrowButton({ label, onClick, children }) {
  return (
    <button aria-label={label} onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 40, height: 40, flex: 'none',
      background: 'transparent', border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', cursor: 'pointer',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--white-a8)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}>
      {children}
    </button>
  );
}

export default function Highlight() {
  const items = PORTFOLIO.highlights;
  const [idx, setIdx] = React.useState(0);
  if (!items || !items.length) return null;
  const item = items[idx];
  const go = (n) => setIdx((n + items.length) % items.length);

  return (
    <section id="highlight" style={{ padding: 'clamp(56px, 8vw, 112px) 0' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(120deg, var(--accent-soft), transparent 58%), var(--surface-card)',
          padding: 'clamp(30px, 5vw, 60px)',
        }}>
          {/* faint grid texture, masked toward the accent corner */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(120% 120% at 0% 0%, #000 10%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(120% 120% at 0% 0%, #000 10%, transparent 60%)',
          }} />

          <div style={{ position: 'relative' }}>
            {/* slide content — keyed so it re-animates on change; min-height keeps
                the controls from jumping between slides of different lengths */}
            <div key={idx} style={{ minHeight: 'clamp(210px, 24vw, 250px)', animation: 'fadeUp var(--dur-slow) var(--ease-out)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-mono-xs)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-mono)', textTransform: 'uppercase', color: 'var(--accent)' }}>
                <Ic.Terminal size={15} /> {item.eyebrow}
              </div>

              <p style={{ marginTop: 22, maxWidth: '26ch', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-h3)', lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                {renderStatement(item.statement, item.emphasis)}
              </p>

              {item.facets && (
                <div style={{ marginTop: 26, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-mono-sm)', color: 'var(--text-secondary)' }}>
                  {item.facets.map((f, i) => (
                    <React.Fragment key={f}>
                      {i > 0 && <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flex: 'none' }} />}
                      <span>{f}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            {/* controls — dots + arrows */}
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {items.map((_, i) => (
                  <button key={i} aria-label={`Go to highlight ${i + 1}`} aria-current={i === idx} onClick={() => setIdx(i)} style={{
                    height: 8, width: i === idx ? 24 : 8, padding: 0, flex: 'none',
                    borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
                    background: i === idx ? 'var(--accent)' : 'var(--border-strong)',
                    transition: 'width var(--dur-base) var(--ease-out), background var(--dur-fast)',
                  }} />
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ArrowButton label="Previous highlight" onClick={() => go(idx - 1)}><Ic.ArrowLeft size={18} /></ArrowButton>
                <ArrowButton label="Next highlight" onClick={() => go(idx + 1)}><Ic.ArrowRight size={18} /></ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
