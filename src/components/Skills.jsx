/* ─── Skills ──────────────────────────────────────────────────────────────
   Grouped tech grid. One cell per group in PORTFOLIO.skills; chips are the
   group's items, each prefixed with its technology icon. Add a group or an
   item there — the grid reflows automatically.
   ──────────────────────────────────────────────────────────────────────── */
import { SectionLabel, Tag } from '../ds';
import { PORTFOLIO } from '../data.js';
import { SKILL_ICON_PATHS, GENERIC_ICON_PATH } from '../skillIcons.js';

function SkillIcon({ name }) {
  const d = SKILL_ICON_PATHS[name] || GENERIC_ICON_PATH;
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true" style={{ flex: 'none', opacity: 0.9 }}>
      <path d={d} />
    </svg>
  );
}

export default function Skills() {
  const P = PORTFOLIO;
  return (
    <section id="skills" style={{ padding: 'var(--section-y) 0', scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel index="04">Toolkit</SectionLabel>
          <h2 style={{ marginTop: 18, fontSize: 'var(--fs-h2)', maxWidth: '20ch' }}>The stack I reach for.</h2>
        </div>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          {P.skills.map((g) => (
            <div key={g.group} style={{ background: 'var(--bg-canvas)', padding: '22px 22px 24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>{g.group}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.items.map((it) => (
                  <Tag key={it} size="sm" style={{ fontSize: 12.5, gap: 6 }}>
                    <SkillIcon name={it} />{it}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
