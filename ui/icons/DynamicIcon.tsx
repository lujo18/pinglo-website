import { View, Text } from 'react-native'
import React from 'react'
import { icons, LucideIcon, LucideProps, SquareDashed } from 'lucide-react-native'
import { useTheme } from 'tamagui';


const DynamicIcon = ({ icon, ...rest }: { icon: keyof typeof icons } & LucideProps) => {
  const theme = useTheme(); 
  if (!(icon in icons)) {
    return <SquareDashed size={20} color={theme.color?.val} />
  }
   
  const IconComponent = icons[icon];
  return (
    <IconComponent size={20} color={theme.color?.val} {...rest} />
  );
};

export default DynamicIcon