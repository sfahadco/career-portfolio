/* ─── Nav ─────────────────────────────────────────────────────────────────
   Fixed top bar. Self-contained: runs its own scroll-spy against the section
   ids in PORTFOLIO.nav and smooth-scrolls via scrollToSection. Below 900px the
   desktop links collapse into a hamburger drop-panel. No props — mount it.
   ──────────────────────────────────────────────────────────────────────── */
import React from 'react';
import { Badge, Button } from '../ds';
import { PORTFOLIO, scrollToSection } from '../data.js';
import { Ic } from '../icons.js';

export default function Nav() {
  const P = PORTFOLIO;
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('top');
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const ids = P.nav.map((n) => n.id);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      let cur = 'top';
      ids.forEach((id) => {
        const el = id === 'top' ? null : document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile panel if the viewport grows back to desktop width.
  React.useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const go = (id) => { scrollToSection(id); setMenuOpen(false); };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 var(--gutter)', height: 66,
      background: (scrolled || menuOpen) ? 'color-mix(in srgb, var(--ink-900) 82%, transparent)' : 'transparent',
      backdropFilter: (scrolled || menuOpen) ? 'var(--blur-panel)' : 'none',
      borderBottom: `1px solid ${(scrolled || menuOpen) ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background var(--dur-base), border-color var(--dur-base)',
    }}>
      <a href="#top" onClick={(e) => { e.preventDefault(); go('top'); }}
         style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>{P.identity.name}</span>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
      </a>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-links">
        {P.nav.filter((n) => n.id !== 'top' && n.id !== 'contact').map((n) => (
          <a key={n.id} href={'#' + n.id}
             onClick={(e) => { e.preventDefault(); go(n.id); }}
             style={{
               fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.04em',
               padding: '8px 12px', borderRadius: 'var(--radius-sm)',
               color: active === n.id ? 'var(--accent)' : 'var(--text-secondary)',
               transition: 'color var(--dur-fast)', cursor: 'pointer',
             }}
             onMouseEnter={(e) => { if (active !== n.id) e.currentTarget.style.color = 'var(--text-primary)'; }}
             onMouseLeave={(e) => { if (active !== n.id) e.currentTarget.style.color = 'var(--text-secondary)'; }}>
            {n.label}
          </a>
        ))}
      </nav>

      {/* desktop right cluster */}
      <div className="nav-desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {P.identity.available && (
          <span className="nav-avail"><Badge style={{fontSize: 12}} tone="accent" dot>Immediately Available</Badge></span>
        )}
        <Button as="a" href={P.identity.resume} download size="sm" variant="secondary" iconRight={<Ic.Download size={15} />}>Résumé</Button>
        <Button size="sm" variant="primary" onClick={() => go('contact')}>Get in touch</Button>
      </div>

      {/* mobile hamburger */}
      <button
        className="nav-menu-btn"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
        style={{
          alignItems: 'center', justifyContent: 'center', width: 40, height: 40,
          background: 'transparent', border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', cursor: 'pointer',
        }}>
        {menuOpen ? <Ic.X size={19} /> : <Ic.Menu size={19} />}
      </button>

      {/* mobile drop panel */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: 66, left: 0, right: 0, zIndex: 49,
          background: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-default)',
          boxShadow: 'var(--shadow-lg)',
          padding: '8px var(--gutter) 22px',
          display: 'flex', flexDirection: 'column',
        }}>
          {P.nav.filter((n) => n.id !== 'top').map((n) => (
            <a key={n.id} href={'#' + n.id}
               onClick={(e) => { e.preventDefault(); go(n.id); }}
               style={{
                 padding: '15px 6px', fontFamily: 'var(--font-mono)', fontSize: 14, letterSpacing: '0.03em',
                 color: active === n.id ? 'var(--accent)' : 'var(--text-secondary)',
                 borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer',
               }}>
              {n.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <Button as="a" href={P.identity.resume} download variant="secondary" iconRight={<Ic.Download size={16} />} style={{ flex: 1 }}>Résumé</Button>
            <Button variant="primary" onClick={() => go('contact')} style={{ flex: 1 }}>Get in touch</Button>
          </div>
        </div>
      )}
    </header>
  );
}
