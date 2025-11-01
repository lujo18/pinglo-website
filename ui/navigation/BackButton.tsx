import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Button, useTheme, XStack } from "tamagui";

const BackButton = ({ onPress }: { onPress?: () => void }) => {
  const theme = useTheme();
  return (
    <XStack>
      <Button
        p={"$2"}
        height={"auto"}
        rounded={100}
        onPress={() => {
          if (onPress) {
            onPress();
          } else {
            router.back();
          }
        }}
        bg={"transparent"}
      >
        <ArrowLeft size={28} color={theme.color.val} />
      </Button>
    </XStack>
  );
};

export default BackButton;
