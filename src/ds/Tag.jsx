import React from 'react';

/**
 * Tag — tech/skill chip. Uses mono type. `active` highlights with accent.
 * Ideal for skill lists and tech stacks on project cards.
 */
export function Tag({
  children,
  active = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '3px 8px', fontSize: 11.5 },
    md: { padding: '5px 11px', fontSize: 12.5 },
  };
  const s = sizes[size] || sizes.md;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.01em',
      ...s,
      color: active ? 'var(--text-on-accent)' : 'var(--text-secondary)',
      background: active ? 'var(--accent)' : 'transparent',
      border: `1px solid ${active ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      transition: 'color var(--dur-fast), border-color var(--dur-fast), background var(--dur-fast)',
      ...style,
    },
    onMouseEnter: (e) => {
      if (active) return;
      e.currentTarget.style.background = 'var(--accent)';
      e.currentTarget.style.color = 'var(--text-on-accent)';
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onMouseLeave: (e) => {
      if (active) return;
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    ...rest,
  }, children);
}
