/* ─── Skills ──────────────────────────────────────────────────────────────
   Grouped tech grid. One cell per group in PORTFOLIO.skills; chips are the
   group's items, each prefixed with its technology icon. Add a group or an
   item there — the grid reflows automatically.
   ──────────────────────────────────────────────────────────────────────── */
import { SectionLabel, Tag } from '../ds';
import { PORTFOLIO } from '../data.js';
import { SKILL_ICONS, SKILL_ICON_SVGS, GENERIC_ICON_PATH } from '../skillIcons.js';

// Brand hex is used as-is unless its WCAG contrast against the near-black canvas
// is too low to read (Next.js/Symfony are black, AWS is dark navy, OpenAI is dark
// purple), in which case we fall back to a light tone. Using contrast rather than
// raw luminance keeps vivid-but-darkish brand colours (e.g. Oracle red) intact.
const LIGHT_ICON = '#e6e7e1';
function relLuminance(hex) {
  const lin = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}
const BG_LUMINANCE = relLuminance('#08090a'); // --ink-900 (page canvas)
function iconColor(hex) {
  const l = relLuminance(hex);
  const contrast = (Math.max(l, BG_LUMINANCE) + 0.05) / (Math.min(l, BG_LUMINANCE) + 0.05);
  return contrast < 2.5 ? LIGHT_ICON : hex;
}

function SkillIcon({ name }) {
  // Full multi-path / multi-colour brand SVGs (e.g. gRPC) render verbatim.
  const raw = SKILL_ICON_SVGS[name];
  if (raw) {
    return (
      <svg className="skill-icon" viewBox={raw.viewBox} width={raw.width || 14} height={raw.height || 14}
        aria-hidden="true" style={{ flex: 'none' }} dangerouslySetInnerHTML={{ __html: raw.inner }} />
    );
  }
  const icon = SKILL_ICONS[name];
  const d = icon ? icon.path : GENERIC_ICON_PATH;
  const fill = icon ? iconColor(icon.hex) : 'currentColor';
  return (
    <svg className="skill-icon" viewBox="0 0 24 24" width="13" height="13" fill={fill} aria-hidden="true" style={{ flex: 'none' }}>
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
                  <Tag key={it} size="sm" className="skill-chip" style={{ fontSize: 12.5, gap: 6 }}>
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
