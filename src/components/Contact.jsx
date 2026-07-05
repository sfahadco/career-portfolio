/* ─── Contact ─────────────────────────────────────────────────────────────
   Pitch + working contact form + copy-email button.

   The form submits to Web3Forms (https://web3forms.com) — a client-side
   form-to-email service, so no backend is required. It posts to their API and
   emails the message to the address the access key is registered to.

   Setup: put your public access key in `.env` as VITE_WEB3FORMS_ACCESS_KEY
   (the key is designed to be public / committed). Without it, the form shows a
   "not configured" message and points visitors to the email button instead.

   Links come from PORTFOLIO.identity.links.
   ──────────────────────────────────────────────────────────────────────── */
import React from 'react';
import { SectionLabel, Input, Textarea, Button } from '../ds';
import { PORTFOLIO } from '../data.js';
import { Ic } from '../icons.js';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const CONFIGURED = Boolean(ACCESS_KEY) && ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE';

export default function Contact() {
  const P = PORTFOLIO;
  const id = P.identity;
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = React.useState('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const [copiedField, setCopiedField] = React.useState(null);

  const copy = (field, value) => {
    if (navigator.clipboard) navigator.clipboard.writeText(value);
    setCopiedField(field); setTimeout(() => setCopiedField(null), 1600);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!CONFIGURED) {
      setStatus('error');
      setErrorMsg(`The form isn't wired up yet — please email me directly at ${id.email}.`);
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const formData = new FormData(form);
      formData.append('access_key', ACCESS_KEY);
      formData.append('subject', `Portfolio contact — ${formData.get('name') || 'someone'}`);
      formData.append('from_name', `${id.name} portfolio`);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg(`Network error — please email me directly at ${id.email}.`);
    }
  };

  const sending = status === 'sending';

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
              <button onClick={() => copy('email', id.email)} style={{
                display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
                background: 'transparent', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)', padding: '13px 16px', textAlign: 'left', width: 'fit-content',
                color: 'var(--text-primary)', transition: 'border-color var(--dur-fast)',
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}>
                <span style={{ color: 'var(--accent)' }}>{copiedField === 'email' ? <Ic.Check size={17} /> : <Ic.Mail size={17} />}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5 }}>{copiedField === 'email' ? 'Copied to clipboard' : id.email}</span>
                {copiedField !== 'email' && <span style={{ color: 'var(--text-tertiary)' }}><Ic.Copy size={14} /></span>}
              </button>

              <button onClick={() => copy('phone', id.phone)} style={{
                display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
                background: 'transparent', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)', padding: '13px 16px', textAlign: 'left', width: 'fit-content',
                color: 'var(--text-primary)', transition: 'border-color var(--dur-fast)',
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}>
                <span style={{ color: 'var(--accent)' }}>{copiedField === 'phone' ? <Ic.Check size={17} /> : <Ic.Phone size={17} />}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5 }}>{copiedField === 'phone' ? 'Copied to clipboard' : id.phone}</span>
                {copiedField !== 'phone' && <span style={{ color: 'var(--text-tertiary)' }}><Ic.Copy size={14} /></span>}
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
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14, padding: '30px 0' }}>
                <span style={{ display: 'inline-flex', width: 46, height: 46, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', alignItems: 'center', justifyContent: 'center' }}><Ic.Check size={24} /></span>
                <h3 style={{ fontSize: 'var(--fs-h4)' }}>Message sent.</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Thanks for reaching out — I'll get back to you within a day.</p>
                <Button variant="ghost" size="sm" onClick={() => setStatus('idle')}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {/* honeypot — hidden from users; bots that fill it are rejected by Web3Forms */}
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Input label="Name" name="name" placeholder="Jane Cooper" required disabled={sending} />
                  <Input label="Email" name="email" type="email" placeholder="you@company.com" required disabled={sending} />
                </div>
                <Textarea label="Message" name="message" rows={5} placeholder="Tell me about the project or role…" required disabled={sending} />

                {status === 'error' && (
                  <div role="alert" style={{
                    display: 'flex', gap: 9, alignItems: 'flex-start',
                    padding: '11px 14px', borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,92,77,0.1)', border: '1px solid var(--status-danger)',
                    color: 'var(--status-danger)', fontSize: 13.5, lineHeight: 1.45,
                  }}>
                    <span style={{ flex: 'none', marginTop: 1 }}><Ic.X size={15} /></span>
                    <span>{errorMsg}</span>
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" fullWidth disabled={sending}
                  iconRight={sending ? null : <Ic.ArrowUpRight size={17} />}>
                  {sending ? 'Sending…' : 'Send message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
