import React, { ReactNode, useEffect, useRef } from "react";
import { Modal, Platform, StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTheme, YStack, YStackProps } from "tamagui";
import { useUiStore } from "@/src/store/ui";

interface Props extends YStackProps {
  visible: boolean;
  setVisible?: (isVisible: boolean) => void;
  children: ReactNode | ReactNode[] | null;
}

const Content = ({ children, ...props }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  // Fallback: sometimes (esp. first open) iOS modal returns 0 insets until measured.
  const top =
    insets.top ||
    (Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0);
  const bottom = insets.bottom || 0;

  return (
    <YStack flex={1} bg={"$background"} pt={top} pb={bottom} {...props}>
      {children}
    </YStack>
  );
};

const FullScreenModal = ({
  visible,
  setVisible,
  children,
  ...props
}: Props) => {
  const incModal = useUiStore((s) => s.incModal);
  const decModal = useUiStore((s) => s.decModal);
  const prevRef = useRef<boolean>(false);

  useEffect(() => {
    // only update counts when visible changes
    if (visible && !prevRef.current) {
      incModal();
    }
    if (!visible && prevRef.current) {
      decModal();
    }
    prevRef.current = !!visible;
    // cleanup on unmount: if modal was visible, decrement
    return () => {
      if (prevRef.current) decModal();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      allowSwipeDismissal={false}
      // onRequestClose={() => setVisible?.(false)}
    >
      {/** A separate SafeAreaProvider ensures correct insets because Modal mounts outside root hierarchy on iOS */}
      <SafeAreaProvider>
        <Content {...props}>{children}</Content>
      </SafeAreaProvider>
    </Modal>
  );
};

export default FullScreenModal;
