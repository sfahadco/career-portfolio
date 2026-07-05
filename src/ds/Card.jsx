import React from 'react';

/**
 * Card — surface container with hairline border. The workhorse content block.
 * `interactive` adds hover lift + accent border for clickable cards (project tiles).
 */
export function Card({
  children,
  interactive = false,
  padded = true,
  accent = false,
  as = 'div',
  style = {},
  ...rest
}) {
  const Comp = as;
  return React.createElement(Comp, {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: `1px solid ${accent ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      padding: padded ? 'var(--space-6)' : 0,
      color: 'var(--text-primary)',
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style,
    },
    onMouseEnter: interactive ? (e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.background = 'var(--surface-raised)';
    } : undefined,
    onMouseLeave: interactive ? (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = accent ? 'var(--border-accent)' : 'var(--border-subtle)';
      e.currentTarget.style.background = 'var(--surface-card)';
    } : undefined,
    ...rest,
  }, children);
}
