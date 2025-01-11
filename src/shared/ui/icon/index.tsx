import { memo } from 'react'

import * as icons from './assets'
import './icon.css'

export type IconName = keyof typeof icons

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const DEFAULT_ICON_SIZE: IconSize = 'md'

export interface IconProps {
  name: IconName
  size?: IconSize | number
  className?: string
  color?: string
  ariaLabel?: string
}

export const ICON_SIZES: Record<IconSize, string> = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
}

const iconMap = icons as Record<
  IconName,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
>

export const Icon = memo(({ name, size, className, color }: IconProps) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  let iconSize: string | number | undefined
  if (typeof size === 'number') {
    iconSize = `${size}px`
  } else if (size) {
    iconSize = ICON_SIZES[size]
  }

  return (
    <IconComponent
      width={iconSize}
      height={iconSize}
      className={`icon ${className || ''}`}
      style={{ color: color || 'currentColor' }}
    />
  )
})

Icon.displayName = 'Icon'
