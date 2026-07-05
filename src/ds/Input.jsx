import React from 'react';

/**
 * Input — single-line text field with optional label and mono hint.
 * Focus reveals accent border. Fully token-driven.
 */
export function Input({
  label,
  hint,
  error,
  id,
  style = {},
  wrapperStyle = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: 7, ...wrapperStyle },
  },
    label && React.createElement('label', {
      htmlFor: inputId,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-mono-xs)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
      },
    }, label),
    React.createElement('input', {
      id: inputId,
      style: {
        width: '100%',
        height: 46,
        padding: '0 14px',
        background: 'var(--ink-800)',
        border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-sm)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        outline: 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        ...style,
      },
      onFocus: (e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-soft)';
      },
      onBlur: (e) => {
        e.currentTarget.style.borderColor = error ? 'var(--status-danger)' : 'var(--border-default)';
        e.currentTarget.style.boxShadow = 'none';
      },
      ...rest,
    }),
    (hint || error) && React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: error ? 'var(--status-danger)' : 'var(--text-tertiary)',
      },
    }, error || hint),
  );
}
