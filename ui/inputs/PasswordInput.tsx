import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { Button, Input, useTheme, YStack } from "tamagui";

interface Props {
  password: string;
  setPassword: (value: string) => void;
}

const PasswordInput = ({password, setPassword}: Props) => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Input
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        size={"$5"}
        pr={"$6"}
      />
      <YStack position="absolute" style={{ right: 10, top: 38 }}>
        <Button
          disabled={false}
          size={"$2"}
          bg={"transparent"}
          outline="none"
          onPress={() => setShowPassword((p) => !p)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff color={theme.color.val} size={18} />
          ) : (
            <Eye color={theme.color.val} size={18} />
          )}
        </Button>
      </YStack>
    </>
  );
};

export default PasswordInput;
