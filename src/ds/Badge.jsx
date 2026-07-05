import React from 'react';

/**
 * Badge — small status/label pill. Tones map to semantic colors.
 * `dot` adds a leading status dot.
 */
export function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { color: 'var(--text-secondary)', bg: 'var(--white-a8)', dc: 'var(--mute-1)' },
    accent: { color: 'var(--accent)', bg: 'var(--accent-soft)', dc: 'var(--accent)' },
    success: { color: 'var(--status-success)', bg: 'rgba(91,217,138,0.12)', dc: 'var(--status-success)' },
    warning: { color: 'var(--status-warning)', bg: 'rgba(245,196,81,0.12)', dc: 'var(--status-warning)' },
    danger: { color: 'var(--status-danger)', bg: 'rgba(255,92,77,0.12)', dc: 'var(--status-danger)' },
  };
  const t = tones[tone] || tones.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-mono-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.04em',
      color: t.color,
      background: t.bg,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style,
    },
    ...rest,
  },
    dot && React.createElement('span', {
      style: { width: 6, height: 6, borderRadius: '50%', background: t.dc, flex: 'none' },
    }),
    children,
  );
}
