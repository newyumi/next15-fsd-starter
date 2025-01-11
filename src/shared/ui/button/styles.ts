import { cva } from 'class-variance-authority'

export const BUTTON_STYLES = {
  base: 'inline-flex items-center justify-center font-bold transition-all duration-200 disabled:cursor-not-allowed',
  iconPosition: {
    none: '',
    left: 'flex-row',
    right: 'flex-row-reverse',
  },
}

export const buttonVariants = cva(BUTTON_STYLES.base, {
  variants: {
    variant: {
      fill: '',
      outline: '',
      text: '',
    },
    buttonType: {
      primary: '',
      secondary: '',
      tertiary: '',
      white: '',
    },
    outlineStyle: {
      basic: '',
      radius: '',
    },
    size: {
      xlarge: 'h-14 py-0',
      large: 'h-12 py-0',
      medium: 'h-10 py-0 text-button2',
      small: 'h-8 py-0 text-button3',
    },
    iconPosition: {
      none: '',
      left: 'flex-row',
      right: 'flex-row-reverse',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'fill',
      buttonType: 'primary',
      className: `
          bg-sb-550 text-white rounded-xl px-4 
          [&:active]:bg-sb-700 
          disabled:bg-g-150 disabled:text-g-350
          disabled:active:bg-g-150
        `,
    },
    {
      variant: 'fill',
      buttonType: 'secondary',
      className: `
          bg-sb-100 text-sb-550 rounded-xl px-4 
          [&:not(:disabled):active]:bg-sb-200
          [&:not(:disabled):active]:border-sb-400 
          [&:not(:disabled):active]:text-sb-600
          disabled:bg-g-150 disabled:text-g-350
        `,
    },
    {
      variant: 'fill',
      buttonType: 'tertiary',
      className: `
          bg-g-150 text-g-500 rounded-xl px-4 
          [&:active]:bg-g-200 
          disabled:bg-g-150 disabled:text-g-350
          disabled:active:bg-g-150
        `,
    },
    {
      variant: 'outline',
      buttonType: 'secondary',
      outlineStyle: 'basic',
      className: `
          border border-sb-550 text-sb-550 rounded-xl px-4 
          [&:active]:bg-sb-100 [&:active]:border-sb-400 [&:active]:text-sb-600 
          disabled:border-g-150 disabled:text-g-350
          disabled:hover:border-g-150 disabled:hover:text-g-350
          disabled:active:bg-transparent disabled:active:border-g-150 disabled:active:text-g-350
        `,
    },
    {
      variant: 'outline',
      buttonType: 'secondary',
      outlineStyle: 'radius',
      className: `
          border border-sb-550 text-sb-550 rounded-full px-4 
          [&:active]:bg-sb-100 [&:active]:border-sb-400 [&:active]:text-sb-600 
          disabled:border-g-150 disabled:text-g-350
          disabled:hover:border-g-150 disabled:hover:text-g-350
          disabled:active:bg-transparent disabled:active:border-g-150 disabled:active:text-g-350
        `,
    },
    {
      variant: 'outline',
      buttonType: 'tertiary',
      outlineStyle: 'basic',
      className: `
          border border-g-150 text-g-500 rounded-xl px-4 
          [&:active]:bg-g-100 
          disabled:bg-g-150 disabled:text-g-350
          disabled:hover:bg-g-150 disabled:hover:text-g-350
          disabled:active:bg-g-150 disabled:active:text-g-350
        `,
    },
    {
      variant: 'outline',
      buttonType: 'tertiary',
      outlineStyle: 'radius',
      className: `
          border border-g-150 text-g-500 rounded-full px-4 
          [&:active]:bg-g-100
          disabled:bg-g-150 disabled:text-g-350
          disabled:hover:bg-g-150 disabled:hover:text-g-350
          disabled:active:bg-g-150 disabled:active:text-g-350
        `,
    },
    {
      variant: 'text',
      buttonType: 'secondary',
      className: `
          text-g-500 underline
          [&:active]:text-g-700 
          disabled:text-g-350
          disabled:hover:text-g-350
          disabled:active:text-g-350
        `,
    },
    {
      variant: 'text',
      buttonType: 'tertiary',
      className: `
          text-g-700 underline
          [&:active]:text-g-500 
          disabled:text-g-350
          disabled:hover:text-g-350
          disabled:active:text-g-350
        `,
    },
    {
      variant: 'text',
      buttonType: 'white',
      className: `
          text-white underline
          [&:active]:text-g-150 
          disabled:text-g-450
          disabled:hover:text-g-450
          disabled:active:text-g-450
        `,
    },
  ],
  defaultVariants: {
    variant: 'fill',
    buttonType: 'primary',
    outlineStyle: 'basic',
    size: 'small',
    iconPosition: 'none',
    fullWidth: false,
  },
})
