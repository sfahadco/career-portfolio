/* ─── Hero ────────────────────────────────────────────────────────────────
   Oversized display type + intro + primary CTAs + framed portrait, with a
   full-width stats strip below. The engineering grid behind it is a radial-
   masked CSS background — no image. Self-contained; CTAs scroll via
   scrollToSection. On < 900px the portrait stacks under the copy.
   ──────────────────────────────────────────────────────────────────────── */
import { Button, Stat, SectionLabel } from '../ds';
import { PORTFOLIO, scrollToSection } from '../data.js';
import { Ic } from '../icons.js';

export default function Hero() {
  const P = PORTFOLIO;
  const id = P.identity;
  const go = (s) => scrollToSection(s);
  return (
    <section id="top" style={{ position: 'relative', paddingTop: 132, paddingBottom: 'var(--section-y)' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 90% 70% at 30% 0%, #000 40%, transparent 78%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 0%, #000 40%, transparent 78%)',
      }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="hero-top" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(32px, 6vw, 80px)' }}>
          {/* copy */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30, flexWrap: 'wrap' }}>
              <SectionLabel>{id.role}</SectionLabel>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                <Ic.MapPin size={13} /> {id.location}
              </span>
            </div>

            <h1 style={{ fontSize: 'var(--fs-h1)', lineHeight: 0.96, letterSpacing: '-0.035em', maxWidth: 15 + 'ch' }}>
              Full-stack<br />engineer who<br /><span style={{ color: 'var(--accent)' }}>ships.</span>
            </h1>

            <p style={{ marginTop: 32, maxWidth: '46ch', fontSize: 'var(--fs-lead)', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
              {id.tagline}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
              <Button size="lg" variant="primary" iconRight={<Ic.ArrowDown size={17} />} onClick={() => go('work')}>View selected work</Button>
              <Button size="lg" variant="secondary" iconRight={<Ic.Mail size={16} />} onClick={() => go('contact')}>Get in touch</Button>
              <Button as="a" href={id.resume} download size="lg" variant="secondary" iconRight={<Ic.Download size={16} />}>Résumé</Button>
            </div>
          </div>

          {/* portrait */}
          <div className="hero-portrait" style={{ flex: 'none', width: 340 }}>
            <img
              src="/me.jpeg"
              alt={id.name}
              width="340"
              height="340"
              decoding="async"
              style={{
                display: 'block',
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                objectPosition: 'center 35%',
                borderRadius: '50%',
                border: '1px solid var(--border-strong)',
                boxShadow: 'var(--shadow-lg), var(--glow-accent-soft)',
              }}
            />
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--grid-gap)',
          marginTop: 72, paddingTop: 32, borderTop: '1px solid var(--border-subtle)',
        }} className="hero-stats">
          {P.stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </div>
    </section>
  );
}
