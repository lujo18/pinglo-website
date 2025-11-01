import React, { ComponentProps, FC, ReactNode, useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { Form, Input, XStack, YStack } from "tamagui";
import { Caption, Subtitle, Title } from "../Typography";
import ButtonA from "../buttons/ButtonA";

interface BaseInputStepProps extends ComponentProps<typeof Form> {
  /** Called when the primary action is pressed and validation passes */
  onPrimarySubmit?: (value: string) => void;
  /** Optional callback every time value changes */
  onChangeValue?: (value: string) => void;
  /** Initial value */
  defaultValue?: string;
  /** Title text or custom node */
  title?: ReactNode;
  /** Subtitle / helper text */
  description?: ReactNode;
  /** Placeholder for input */
  placeholder?: string;
  /** Button label */
  ctaLabel?: string;
  /** Validation function; return a string for error message, or true for ok */
  validate?: (value: string) => true | string;
  /** Fired when user presses outside to dismiss keyboard */
  dismissOnPress?: boolean;
  /** Input props overrides */
  inputProps?: Partial<ComponentProps<typeof Input>>;
  /** Provide a custom action button */
  renderButton?: (opts: { disabled: boolean; submit: () => void; value: string }) => ReactNode;
  /** Optional secondary action (e.g., Skip) */
  secondaryAction?: { label: string; onPress: () => void; };
}

const PageGetInput: FC<BaseInputStepProps> = ({
  onPrimarySubmit,
  onChangeValue,
  defaultValue = "",
  title = "Enter a value",
  description,
  placeholder = "Type here...",
  ctaLabel = "Continue",
  validate,
  dismissOnPress = true,
  inputProps,
  renderButton,
  secondaryAction,
  ...formProps
}) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    onChangeValue?.(value);
    if (validate) {
      const result = validate(value);
      setError(result === true ? null : result);
    }
  }, [value, onChangeValue, validate]);

  const canSubmit = value.length > 0 && !error;

  const handleSubmit = () => {
    if (!canSubmit) return;
  onPrimarySubmit?.(value.trim());
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Form
        flex={1}
        justify={"center"}
        onPress={() => {
          if (dismissOnPress) Keyboard.dismiss();
        }}
        {...formProps}
      >
        <YStack gap={"$3"}>
          {title && (typeof title === 'string' ? <Title>{title}</Title> : title)}
          {description && (typeof description === 'string' ? <Subtitle>{description}</Subtitle> : description)}
          <YStack>
            <Input
              value={value}
              onChange={(e) => setValue(e.nativeEvent.text)}
              size={"$5"}
              placeholder={placeholder}
              {...inputProps}
            />
            {error && <Caption color="$red10">{error}</Caption>}
          </YStack>
        </YStack>
      </Form>
      <YStack gap={"$3"}>
        {renderButton ? (
          renderButton({ disabled: !canSubmit, submit: handleSubmit, value })
        ) : (
          <ButtonA size={"$5"} disabled={!canSubmit} onPress={handleSubmit}>
            {ctaLabel}
          </ButtonA>
        )}
        {secondaryAction && (
          <XStack justify="center">
            <ButtonA size={"$3"} disabled={false} onPress={secondaryAction.onPress}>
              {secondaryAction.label}
            </ButtonA>
          </XStack>
        )}
      </YStack>
    </KeyboardAvoidingView>
  );
};

export default PageGetInput;
