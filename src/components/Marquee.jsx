/* ─── Marquee ─────────────────────────────────────────────────────────────
   Expressive infinite tech strip between sections. Loop is a CSS @keyframes
   ('marq') defined in index.css.
   ──────────────────────────────────────────────────────────────────────── */
import { PORTFOLIO } from '../data.js';

export default function Marquee() {
  const P = PORTFOLIO;
  const items = [...P.marquee, ...P.marquee];
  return (
    <div style={{
      borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--ink-850)', overflow: 'hidden', padding: '18px 0',
    }}>
      <div style={{ display: 'flex', gap: 0, width: 'max-content', animation: 'marq 34s linear infinite' }}>
        {items.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 32, paddingRight: 32 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: i % 2 ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>{t}</span>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
