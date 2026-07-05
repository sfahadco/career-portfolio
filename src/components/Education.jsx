/* ─── Education ───────────────────────────────────────────────────────────
   Academic timeline — mirrors the Experience layout (period rail + detail
   column). Rows come from PORTFOLIO.education.
   ──────────────────────────────────────────────────────────────────────── */
import { SectionLabel } from '../ds';
import { PORTFOLIO } from '../data.js';

export default function Education() {
  const P = PORTFOLIO;
  return (
    <section id="education" style={{ padding: 'var(--section-y) 0', scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ marginBottom: 52 }}>
          <SectionLabel index="03">Education</SectionLabel>
          <h2 style={{ marginTop: 18, fontSize: 'var(--fs-h2)', maxWidth: '16ch' }}>Where it started.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 0 }}>
          {P.education.map((e, i) => (
            <div key={i} className="xp-row" style={{
              display: 'grid', gridTemplateColumns: '210px 1fr', gap: 'var(--grid-gap)',
              padding: '30px 0',
              borderTop: i === 0 ? '1px solid var(--border-default)' : '1px solid var(--border-subtle)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{e.period}</div>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--fs-h4)' }}>{e.school}</h3>
                <div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{e.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
