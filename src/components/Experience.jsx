/* ─── Experience ──────────────────────────────────────────────────────────
   Vertical career timeline + an education footnote. Rows come from
   PORTFOLIO.experience; education from PORTFOLIO.education.
   ──────────────────────────────────────────────────────────────────────── */
import { SectionLabel, Badge } from '../ds';
import { PORTFOLIO } from '../data.js';
import { Ic } from '../icons.js';

export default function Experience() {
  const P = PORTFOLIO;
  return (
    <section id="experience" style={{ padding: 'var(--section-y) 0', scrollMarginTop: 80, background: 'var(--ink-850)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ marginBottom: 52 }}>
          <SectionLabel index="02">Experience</SectionLabel>
          <h2 style={{ marginTop: 18, fontSize: 'var(--fs-h2)', maxWidth: '18ch' }}>Seven years, four teams.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 0 }}>
          {P.experience.map((job, i) => (
            <div key={i} className="xp-row" style={{
              display: 'grid', gridTemplateColumns: '210px 1fr', gap: 'var(--grid-gap)',
              padding: '30px 0',
              borderTop: i === 0 ? '1px solid var(--border-default)' : '1px solid var(--border-subtle)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)' }}>{job.period}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', marginTop: 6 }}>{job.location}</div>
                {job.current && <div style={{ marginTop: 12 }}><Badge tone="accent" dot>Current</Badge></div>}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 'var(--fs-h4)' }}>{job.role}</h3>
                  {job.company && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)' }}>@ {job.company}</span>}
                </div>
                <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {job.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', gap: 11, fontSize: 15, lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--text-tertiary)', flex: 'none', marginTop: 1 }}>—</span>{pt}
                    </li>
                  ))}
                </ul>
                {job.award && (
                  job.awardCert ? (
                    <a href={job.awardCert} download
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, color: 'var(--status-warning)', fontFamily: 'var(--font-mono)', fontSize: 12.5, cursor: 'pointer', transition: 'opacity var(--dur-fast)' }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 0.7}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 1}>
                      <Ic.Award size={15} className="award-blink" /> <span style={{ fontWeight: 'var(--fw-bold)' }}>{job.award}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--text-tertiary)' }}><Ic.Download size={13} /> Certificate</span>
                    </a>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, color: 'var(--status-warning)', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>
                      <Ic.Award size={15} className="award-blink" /> <span style={{ fontWeight: 'var(--fw-bold)' }}>{job.award}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
