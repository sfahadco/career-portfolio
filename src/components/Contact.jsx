/* ─── Contact ─────────────────────────────────────────────────────────────
   Pitch + working (demo) contact form + copy-email button. The form is
   client-side only (no backend) — it flips to a success state on submit.
   Links come from PORTFOLIO.identity.links.
   ──────────────────────────────────────────────────────────────────────── */
import React from 'react';
import { SectionLabel, Input, Textarea, Button } from '../ds';
import { PORTFOLIO } from '../data.js';
import { Ic } from '../icons.js';

export default function Contact() {
  const P = PORTFOLIO;
  const id = P.identity;
  const [sent, setSent] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(id.email);
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-y) 0', scrollMarginTop: 80, background: 'var(--ink-850)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 6vw, 88px)', alignItems: 'start' }}>
          {/* left — pitch */}
          <div>
            <SectionLabel index="05">Contact</SectionLabel>
            <h2 style={{ marginTop: 18, fontSize: 'var(--fs-h2)', lineHeight: 1.02 }}>Let's build<br />something solid.</h2>
            <p style={{ marginTop: 22, maxWidth: '38ch', fontSize: 'var(--fs-body-lg)', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
              Open to full-stack, backend and platform roles — and interesting consulting work. Tell me what you're building.
            </p>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <button onClick={copyEmail} style={{
                display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
                background: 'transparent', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)', padding: '13px 16px', textAlign: 'left', width: 'fit-content',
                color: 'var(--text-primary)', transition: 'border-color var(--dur-fast)',
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}>
                <span style={{ color: 'var(--accent)' }}>{copied ? <Ic.Check size={17} /> : <Ic.Mail size={17} />}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5 }}>{copied ? 'Copied to clipboard' : id.email}</span>
                {!copied && <span style={{ color: 'var(--text-tertiary)' }}><Ic.Copy size={14} /></span>}
              </button>

              <div style={{ display: 'flex', gap: 10 }}>
                {id.links.map((l) => {
                  const Icon = l.kind === 'linkedin' ? Ic.Linkedin : l.kind === 'github' ? Ic.Github : Ic.Mail;
                  return (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 15px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)', transition: 'color var(--dur-fast), border-color var(--dur-fast)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-default)'; }}>
                      <Icon size={15} /> {l.label}
                    </a>
                  );
                })}
                <a href={id.resume} download
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 15px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-secondary)', transition: 'color var(--dur-fast), border-color var(--dur-fast)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-default)'; }}>
                  <Ic.Download size={15} /> Résumé
                </a>
              </div>
            </div>
          </div>

          {/* right — form */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '30px' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: '30px 0' }}>
                <span style={{ display: 'inline-flex', width: 46, height: 46, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', alignItems: 'center', justifyContent: 'center' }}><Ic.Check size={24} /></span>
                <h3 style={{ fontSize: 'var(--fs-h4)' }}>Message sent.</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Thanks for reaching out — I'll get back to you within a day.</p>
                <Button variant="ghost" size="sm" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Input label="Name" placeholder="Jane Cooper" required />
                  <Input label="Email" type="email" placeholder="you@company.com" required />
                </div>
                <Textarea label="Message" rows={5} placeholder="Tell me about the project or role…" required />
                <Button type="submit" variant="primary" size="lg" fullWidth iconRight={<Ic.ArrowUpRight size={17} />}>Send message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
