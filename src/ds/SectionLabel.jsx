import React from 'react';

/**
 * SectionLabel — the uppercase mono eyebrow that heads every section.
 * Optional index number ("01") reinforces the grid-driven, technical system.
 */
export function SectionLabel({
  children,
  index,
  style = {},
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-mono-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      ...style,
    },
    ...rest,
  },
    index != null && React.createElement('span', { style: { color: 'var(--accent)' } }, index),
    React.createElement('span', { style: { width: 20, height: 1, background: 'var(--border-strong)' } }),
    children,
  );
}
