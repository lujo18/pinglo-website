import React, { ComponentProps, memo, ReactNode, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Button } from "tamagui";

interface Props extends ComponentProps<typeof Button> {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  enableAnimations?: boolean; // Optional prop to control animations
  handleLoad?: boolean;
  onPress: () => Promise<void> | void;
}

/**
 *
 * @param theme "accent" for all white
 * @returns
 */
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
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    if (handleLoad) {
      try {
        console.log("should be loading now");
        setLoading(true);
        await onPress();
      } finally {
        setLoading(false);
      }
    } else {
      // fire-and-forget for synchronous handlers
      void onPress();
    }
  };

  return (
    <Button
      theme={theme}
      borderBottomWidth={(selected ? "$2" : disabled ? "$0" : "$2") as any}
      borderBottomColor={
        (variant === "outlined"
          ? "$borderColor"
          : theme === "accent"
          ? "#9b9b9b"
          : "$color5") as any
      }
      size={"$6" as any}
      fontFamily={"$body" as any}
      variant={variant}
      fontWeight={800}
      disabled={loading || disabled || selected}
      opacity={disabled ? 0.5 : 1}
      animation={enableAnimations && !disabled ? "quick" : undefined}
      pressStyle={enableAnimations && !disabled ? { scale: 0.98 } : undefined}
      hoverStyle={enableAnimations && !disabled ? { opacity: 0.9 } : undefined}
      bg={
        selected
          ? !variant
            ? "$accent"
            : undefined
          : !variant
          ? "$borderColor"
          : undefined
      }
      borderColor={selected && variant === "outlined" ? "$accent" : undefined}
      scale={enableAnimations && selected ? 0.97 : 1}
      onPress={handlePress}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size="small" // "small" | "large" (or a number on some platforms)
          color={selected ? "#fff" : variant === "outlined" ? "#000" : "#666"} // customize color
          style={{ marginRight: 8 }} // spacing when shown inline with children
          animating={true}
          accessibilityLabel="Loading"
          testID="button-activity-indicator"
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default memo(ButtonA);
