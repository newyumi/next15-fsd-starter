type Typography = [
  string,
  { lineHeight: string; letterSpacing: string; fontWeight: string },
]

const typography: { [K: string]: Typography } = {
  heavy1: [
    '3rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '800',
    },
  ],
  heavy2: [
    '2.5rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '800',
    },
  ],
  heavy3: [
    '2rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  heading1: [
    '1.5rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  heading2: [
    '1.25rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  heading3: [
    '1.125rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  heading4: [
    '1rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  subtitle1: [
    '2rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '600',
    },
  ],
  subtitle2: [
    '1.125rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '600',
    },
  ],
  subtitle3: [
    '1rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '600',
    },
  ],
  subtitle4: [
    '0.9375rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '600',
    },
  ],
  subtitle5: [
    '0.8125rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '600',
    },
  ],
  body1: [
    '1rem',
    {
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: '400',
    },
  ],
  body2: [
    '1rem',
    {
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: '600',
    },
  ],
  body3: [
    '0.875rem',
    {
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: '400',
    },
  ],
  body4: [
    '0.875rem',
    {
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: '600',
    },
  ],
  body5: [
    '0.8125rem',
    {
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: '400',
    },
  ],
  body6: [
    '0.8125rem',
    {
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: '600',
    },
  ],
  caption1: [
    '0.75rem',
    {
      lineHeight: '1.2',
      letterSpacing: '0.01em',
      fontWeight: '400',
    },
  ],
  caption2: [
    '0.625rem',
    {
      lineHeight: '1.2',
      letterSpacing: '0.01em',
      fontWeight: '700',
    },
  ],
  button1: [
    '1rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  button2: [
    '0.875rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
  button3: [
    '0.75rem',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
  ],
}

export { typography }
