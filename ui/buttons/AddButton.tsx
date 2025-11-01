import { Plus } from 'lucide-react-native';
import React, { ComponentProps } from 'react';
import { Button, useTheme, XStack } from 'tamagui';

interface Props extends ComponentProps<typeof Button>{
  onPress: () => void;
}

const AddButton = ({onPress, ...props}: Props) => {
  
  const theme = useTheme();
  return (
    <XStack>
      <Button
        p={"$3"}
        size={"$6"}
        height={"auto"}
        rounded={100}
        onPress={onPress}
        bg={"$color"}
        shadowColor={"$black"}
        shadowOffset={"$2"}
        shadowRadius={"$3"}
        shadowOpacity={.5}
        pressStyle={{background: "$color"}}
        {...props}
      >
        <Plus color={theme.background.val} size={40} />
      </Button>
    </XStack>
    
  );
  
}

export default AddButton