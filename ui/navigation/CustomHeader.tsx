import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { XStack } from "tamagui";
import { Title } from "../Typography";

interface CustomHeaderProps {
  title?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  centerElement?: React.ReactNode;
  children?: React.ReactNode;
}

export default function CustomHeader({
  title = "My App",
  leftElement,
  rightElement,
  centerElement,
  children,
}: CustomHeaderProps) {
  const safeAreaTop = useSafeAreaInsets().top;

  return (
    <XStack
      bg={"$color2"}
      borderBottomColor={"$color2"}
      borderBottomWidth={"$1"}
      pb={"$2"}
      pt={safeAreaTop}
      px={"$6"}
    >
      {children ? (
        // If children are provided, render them directly
        <XStack
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 44,
            flex: 1,
          }}
        >
          {children}
        </XStack>
      ) : (
        // Default layout with left, center, right sections
        <XStack
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 44,
            flex: 1,
          }}
        >
          {/* Left section */}
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            {leftElement}
          </View>

          {/* Center section */}
          <View style={{ flex: 1, alignItems: "center" }}>
            {centerElement || (
              <Title fontSize="$6" fontWeight="600">
                {title}
              </Title>
            )}
          </View>

          {/* Right section */}
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {rightElement}
          </View>
        </XStack>
      )}
    </XStack>
  );
}
