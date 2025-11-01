import React, { ComponentProps, FC, ReactNode } from 'react'
import { XStack } from 'tamagui'

interface Props extends ComponentProps<typeof XStack> {
  children: ReactNode | ReactNode[],
  padded?: boolean,
}

const XGroup: FC<Props> = ({children, gap = "$2", padded = false, ...rest}) => {
  return (
    <XStack flexDirection='row' gap={gap} p={padded ? "$4" : 0} {...rest}>
      {children}
    </XStack>
  )
}

export default XGroup