import React, { ComponentProps, FC, ReactNode } from 'react'
import { YStack } from 'tamagui'

interface Props extends ComponentProps<typeof YStack> {
  children: ReactNode | ReactNode[]
  padded?: boolean
}

const YGroup: FC<Props> = ({ children, padded = false, gap = '$2', ...rest }) => {
  return (
    <YStack gap={gap} p={padded ? '$4' : 0} {...rest}>
      {children}
    </YStack>
  )
}

export default YGroup