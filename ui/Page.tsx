
import React, { ComponentProps, FC, ReactNode } from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { styled, YStack } from 'tamagui';

interface props extends ComponentProps<typeof YStack> {
  children: ReactNode
  insets?: SafeAreaViewProps['edges']
  
}

const StyledPage = styled(YStack, {
  bg: "$background",
  flex: 1,
  p: "$4",
  gap: "$4",
  // You can add more default styles here
});

const Page: FC<props> = ({children, insets, ...rest}) => {
  return (
    <StyledPage {...rest}>
      <SafeAreaView edges={insets} style={{flex: 1}}>
        {children}
      </SafeAreaView>
    </StyledPage>
  )
}

export default Page