/* ─── Footer ──────────────────────────────────────────────────────────────
   Wordmark, quick links, back-to-top. Self-contained; back-to-top uses
   scrollToSection.
   ──────────────────────────────────────────────────────────────────────── */
import { Link } from '../ds';
import { PORTFOLIO, scrollToSection } from '../data.js';
import { Ic } from '../icons.js';

export default function Footer() {
  const P = PORTFOLIO;
  return (
    <footer style={{ padding: '40px 0 48px', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.03em' }}>{P.identity.name}</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-tertiary)', marginLeft: 6 }}>© {new Date().getFullYear()}</span>
        </div>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
          {P.identity.links.map((l) => <Link key={l.label} href={l.href} external muted>{l.label}</Link>)}
          <button onClick={() => scrollToSection('top')} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>
            Back to top <Ic.ArrowDown size={13} style={{ transform: 'rotate(180deg)' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
