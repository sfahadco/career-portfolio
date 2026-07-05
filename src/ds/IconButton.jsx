import React from 'react';

/**
 * IconButton — square, icon-only button for toolbars, nav, and compact actions.
 * Pass an icon node (SVG) as children.
 */
export function IconButton({
  children,
  variant = 'secondary',
  size = 'md',
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = { sm: 32, md: 40, lg: 48 };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid var(--accent)' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
  };
  return React.createElement('button', {
    'aria-label': label,
    title: label,
    disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style,
    },
    onMouseEnter: (e) => {
      if (disabled) return;
      if (variant === 'primary') { e.currentTarget.style.background = 'var(--accent-hover)'; }
      else {
        e.currentTarget.style.background = 'var(--white-a8)';
        e.currentTarget.style.color = 'var(--text-primary)';
        e.currentTarget.style.borderColor = 'var(--border-strong)';
      }
    },
    onMouseLeave: (e) => Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      color: variants[variant].color,
      borderColor: variants[variant].border.split(' ').pop(),
    }),
    ...rest,
  }, children);
}
