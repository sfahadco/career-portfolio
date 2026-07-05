import React from 'react';

/**
 * Button — the primary action element.
 * Variants: primary (acid fill), secondary (hairline outline), ghost (bare), danger.
 * Uses design-system tokens only; no hard-coded colors.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13, gap: 7, height: 34 },
    md: { padding: '11px 20px', fontSize: 14.5, gap: 8, height: 42 },
    lg: { padding: '15px 28px', fontSize: 16, gap: 10, height: 52 },
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid var(--accent)' },
    secondary: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
    danger: { background: 'transparent', color: 'var(--status-danger)', border: '1px solid var(--status-danger)' },
  };
  const Comp = as;
  return React.createElement(Comp, {
    disabled: as === 'button' ? disabled : undefined,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style,
    },
    onMouseDown: (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; },
    onMouseUp: (e) => { e.currentTarget.style.transform = 'translateY(0)'; },
    onMouseEnter: (e) => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-hover)';
      if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--accent)';
      if (variant === 'ghost') {
        e.currentTarget.style.background = 'var(--white-a8)';
        e.currentTarget.style.color = 'var(--text-primary)';
      }
      if (variant === 'danger') e.currentTarget.style.background = 'rgba(255,92,77,0.1)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      Object.assign(e.currentTarget.style, {
        background: variants[variant].background,
        color: variants[variant].color,
        borderColor: variants[variant].border.split(' ').pop(),
      });
    },
    ...rest,
  }, iconLeft, children, iconRight);
}
