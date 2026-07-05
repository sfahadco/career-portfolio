/* ─── Projects ────────────────────────────────────────────────────────────
   Selected work as an interactive master/detail case-study browser. Click a
   project in the left rail to load its detail. Content from PORTFOLIO.projects
   — add/remove an entry there to add/remove a case study. Self-contained state.
   ──────────────────────────────────────────────────────────────────────── */
import React from 'react';
import { SectionLabel, Tag, Card } from '../ds';
import { PORTFOLIO } from '../data.js';
import { Ic } from '../icons.js';

export default function Projects() {
  const P = PORTFOLIO;
  const [sel, setSel] = React.useState(0);
  const p = P.projects[sel];
  const accentColor = p.accent === 'flare' ? 'var(--accent-secondary)' : 'var(--accent)';

  return (
    <section id="work" style={{ padding: 'var(--section-y) 0', scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 44, flexWrap: 'wrap' }}>
          <div>
            <SectionLabel index="01">Selected work</SectionLabel>
            <h2 style={{ marginTop: 18, fontSize: 'var(--fs-h2)', maxWidth: '18ch' }}>Systems built to scale.</h2>
          </div>
          <p style={{ maxWidth: '34ch', color: 'var(--text-secondary)', fontSize: 15 }}>
            A few projects I led end to end — from architecture and infrastructure to the UI people touch.
          </p>
        </div>

        <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 'var(--grid-gap)', alignItems: 'start' }}>
          {/* master list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {P.projects.map((proj, i) => {
              const isSel = i === sel;
              const ac = proj.accent === 'flare' ? 'var(--accent-secondary)' : 'var(--accent)';
              return (
                <button key={proj.id} onClick={() => setSel(i)}
                  style={{
                    textAlign: 'left', cursor: 'pointer', width: '100%',
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '16px 18px', borderRadius: 'var(--radius-md)',
                    background: isSel ? 'var(--surface-card)' : 'transparent',
                    border: `1px solid ${isSel ? 'var(--border-default)' : 'transparent'}`,
                    transition: 'background var(--dur-fast), border-color var(--dur-fast)',
                  }}
                  onMouseEnter={(e) => { if (!isSel) e.currentTarget.style.background = 'var(--white-a4)'; }}
                  onMouseLeave={(e) => { if (!isSel) e.currentTarget.style.background = 'transparent'; }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: isSel ? ac : 'var(--text-tertiary)', width: 22, flex: 'none' }}>{'0' + (i + 1)}</span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: isSel ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{proj.name}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', marginTop: 3 }}>{proj.context}</span>
                  </span>
                  {isSel && <span style={{ width: 6, height: 6, borderRadius: '50%', background: ac, flex: 'none' }} />}
                </button>
              );
            })}
          </div>

          {/* detail */}
          <Card key={p.id} padded={false} style={{ overflow: 'hidden', animation: 'fadeUp var(--dur-slow) var(--ease-out)' }}>
            <div style={{ padding: '28px 30px', borderBottom: '1px solid var(--border-subtle)', background: `linear-gradient(120deg, color-mix(in srgb, ${accentColor} 7%, transparent), transparent 60%)` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{p.context}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: accentColor }}>{p.year}</span>
              </div>
              <h3 style={{ marginTop: 12, fontSize: 'var(--fs-h3)' }}>{p.name}</h3>
              <p style={{ marginTop: 12, color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.55, maxWidth: '54ch' }}>{p.summary}</p>
            </div>
            <div style={{ padding: '26px 30px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 16 }}>What I built</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.5, color: 'var(--paper-1)' }}>
                    <span style={{ color: accentColor, flex: 'none', marginTop: 2 }}><Ic.ArrowRight size={15} /></span>
                    {h}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 26, paddingTop: 22, borderTop: '1px solid var(--border-subtle)' }}>
                {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
