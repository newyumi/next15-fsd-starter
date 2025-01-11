import React, { type ButtonHTMLAttributes } from 'react'

import { buttonVariants } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'text'
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'white'
  outlineStyle?: 'basic' | 'radius'
  size?: 'xlarge' | 'large' | 'medium' | 'small'
  iconPosition?: 'none' | 'left' | 'right'
  fullWidth?: boolean
  icon?: React.ReactNode
}

const getButtonStyles = ({
  variant,
  buttonType,
  outlineStyle,
  size,
  iconPosition,
  icon,
  className,
  fullWidth,
}: ButtonProps) => {
  const getIconSpacing = () => {
    if (!icon || iconPosition === 'none') return ''
    return `${iconPosition === 'left' ? 'mr-1' : 'ml-1'}`
  }

  const getButtonPadding = () => {
    return variant === 'text' && iconPosition !== 'none' ? 'px-0' : ''
  }

  const getButtonClasses = () => {
    return buttonVariants({
      variant,
      buttonType,
      outlineStyle,
      size,
      iconPosition,
      fullWidth,
      className: [getButtonPadding(), className].filter(Boolean).join(' '),
    })
  }

  return {
    buttonClasses: getButtonClasses(),
    iconSpacing: getIconSpacing(),
  }
}

const Button = ({
  variant = 'fill',
  buttonType = 'primary',
  outlineStyle = 'basic',
  size = 'small',
  iconPosition = 'none',
  icon,
  children,
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) => {
  const { buttonClasses, iconSpacing } = getButtonStyles({
    variant,
    buttonType,
    outlineStyle,
    size,
    iconPosition,
    icon,
    className,
    fullWidth,
  })

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && (
        <span className={`flex items-center justify-center ${iconSpacing}`}>
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
