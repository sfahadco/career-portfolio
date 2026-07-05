import React from 'react';

/**
 * Stat — big numeric metric with a label. Uses display type for the figure.
 * For "6+ years", "30+ projects" style callouts.
 */
export function Stat({
  value,
  label,
  sub,
  align = 'left',
  style = {},
  ...rest
}) {
  return React.createElement('div', {
    style: { textAlign: align, ...style },
    ...rest,
  },
    React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-h2)',
        lineHeight: 1,
        letterSpacing: 'var(--ls-tight)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'baseline',
        gap: 2,
        justifyContent: align === 'center' ? 'center' : 'flex-start',
      },
    }, value),
    React.createElement('div', {
      style: {
        marginTop: 8,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-mono-xs)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-mono)',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
      },
    }, label),
    sub && React.createElement('div', {
      style: { marginTop: 4, fontSize: 13, color: 'var(--text-secondary)' },
    }, sub),
  );
}
