import React from 'react';

/**
 * Link — inline text link with an animated accent underline that wipes in on hover.
 * `external` appends a small ↗ glyph.
 */
export function Link({
  children,
  href = '#',
  external = false,
  muted = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      color: muted ? 'var(--text-secondary)' : 'var(--text-primary)',
      fontWeight: 'var(--fw-medium)',
      textDecoration: 'none',
      backgroundImage: 'linear-gradient(var(--accent), var(--accent))',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 100%',
      backgroundSize: hover ? '100% 1.5px' : '0% 1.5px',
      transition: 'background-size var(--dur-base) var(--ease-out), color var(--dur-fast)',
      ...style,
    },
    ...rest,
  },
    children,
    external && React.createElement('span', {
      'aria-hidden': true,
      style: { fontSize: '0.8em', color: 'var(--accent)' },
    }, '↗'),
  );
}
