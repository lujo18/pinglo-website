import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text, useTheme, XStack, YStack } from "tamagui";

// Move TabItem outside as a separate component to avoid hook rule violations
const TabItem = ({ 
  route, 
  index, 
  isFocused, 
  navigation, 
  descriptors 
}: { 
  route: any; 
  index: number; 
  isFocused: boolean; 
  navigation: any; 
  descriptors: any; 
}) => {
  const theme = useTheme()

  const { options } = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const Icon = options.tabBarIcon !== undefined ? options.tabBarIcon : null;

  const iconScale = useSharedValue(isFocused ? 1.05 : 1);
  const textOpacity = useSharedValue(isFocused ? 1 : 0.75);

  React.useEffect(() => {
    iconScale.value = withTiming(isFocused ? 1.05 : 1, { duration: 150 });
    textOpacity.value = withTiming(isFocused ? 1 : 0.75, { duration: 150 });
  }, [iconScale, textOpacity, isFocused]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: iconScale.value }],
  }));

  const labelStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const onPress = () => {
    if (!isFocused) navigation.navigate(route.name);
  };

  const activeColor = theme?.color?.val ?? "#111";
  const inactiveColor = theme?.color8?.val ?? theme?.color?.val ?? "#666";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        gap: 4,
      }}
    >
      <Animated.View style={iconStyle}>
        {Icon &&
          Icon({
            focused: isFocused,
            color: isFocused ? activeColor : inactiveColor,
            size: 22,
          })}
      </Animated.View>
      <Animated.View style={labelStyle}>
        <Text
          fontSize="$2"
          fontWeight="600"
          color={isFocused ? "$color" : "$color8"}
          numberOfLines={1}
        >
          {label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function AnimatedTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {

  return (
    <YStack
      bg="$background"
      borderTopColor="$color5"
      borderTopWidth={1}
      style={{ paddingHorizontal: 16, paddingVertical: 8 }}
    >
      <XStack items="center" justify="space-between">
        {state.routes.map((route, index) => (
          <TabItem 
            key={route.key} 
            route={route} 
            index={index} 
            isFocused={state.index === index}
            navigation={navigation}
            descriptors={descriptors}
          />
        ))}
      </XStack>
    </YStack>
  );
}
