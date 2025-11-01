"use client"
import React, { ComponentProps, memo, ReactNode, useState } from 'react'
import { Button } from 'tamagui'

interface Props extends ComponentProps<typeof Button> {
  children: ReactNode
  disabled?: boolean
  selected?: boolean
  enableAnimations?: boolean
  handleLoad?: boolean
  onPress: () => Promise<void> | void
}

const Spinner = ({ color = '#fff' }: { color?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 50 50"
    aria-hidden
    focusable={false}
    style={{ marginRight: 8 }}
  >
    <path
      fill={color}
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068
        c0-8.071,6.544-14.615,14.615-14.615c8.071,0,14.615,6.544,14.615,14.615H43.935z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

const ButtonA = ({
  children,
  disabled,
  selected,
  variant,
  theme,
  enableAnimations = true,
  handleLoad,
  onPress,
  ...rest
}: Props) => {
  const [loading, setLoading] = useState(false)

  const handlePress = async () => {
    if (handleLoad) {
      try {
        setLoading(true)
        await onPress()
      } finally {
        setLoading(false)
      }
    } else {
      void onPress()
    }
  }

  return (
    <Button
      theme={theme}
      size={'$6' as any}
      fontFamily={'$body' as any}
      variant={variant}
      fontWeight={800}
      disabled={loading || disabled || selected}
      opacity={disabled ? 0.5 : 1}
      animation={enableAnimations && !disabled ? 'quick' : undefined}
      pressStyle={enableAnimations && !disabled ? { scale: 0.98 } : undefined}
      hoverStyle={enableAnimations && !disabled ? { opacity: 0.9 } : undefined}
      bg={
        selected
          ? !variant
            ? '$accent'
            : undefined
          : !variant
          ? '$borderColor'
          : undefined
      }
      borderColor={selected && variant === 'outlined' ? '$accent' : undefined}
      scale={enableAnimations && selected ? 0.97 : 1}
      onPress={handlePress}
      {...rest}
    >
      {loading ? <Spinner color={selected ? '#fff' : variant === 'outlined' ? '#000' : '#666'} /> : children}
    </Button>
  )
}

export default memo(ButtonA)
