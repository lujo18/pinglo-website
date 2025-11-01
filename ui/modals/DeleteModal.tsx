import { ContactRecord } from "@/src/lib/contactSchema";
import { useAuthStore } from "@/src/store/auth";
import { useContactStore } from "@/src/store/contacts";
import { Trash2 } from "lucide-react-native";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { Button, Dialog, Input, useTheme, XStack, YStack } from "tamagui";
import { Body, Caption, Subtitle } from "../Typography";


interface DeleteModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onDeleteSuccess?: () => void;
  deleteAction: () => void;
  expectedValue: string;

  headerText: string;
}

const DeleteModal = ({
  visible,
  setVisible,
  onDeleteSuccess,
  deleteAction,
  expectedValue,
  headerText,

}: DeleteModalProps) => {
  const theme = useTheme();
  const auth = useAuthStore();

  const [confirmationText, setConfirmationText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  expectedValue = expectedValue.toLowerCase().trim();

  const isConfirmationValid =
    confirmationText.trim().toLowerCase() === expectedValue.toLowerCase();

  const handleDelete = async () => {
    if (!auth.user?.uid || !isConfirmationValid) return;

    setIsDeleting(true);

    try {
      deleteAction()
      console.log("Contact deleted successfully");
      
      // Reset state
      setConfirmationText("");
      setVisible(false);
      
      // Callback for any additional actions
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
    } catch (error) {
      console.error("Failed to delete contact:", error);
      Alert.alert(
        "Delete Failed",
        "Unable to delete contact. Please try again.",
        [{ text: "OK" }]
      );
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    setConfirmationText("");
    setVisible(false);
  };
  
 // TODO: finish mergin over to component. Add head and body props


  return (
    <Dialog modal open={visible} onOpenChange={setVisible}>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Dialog.Content
              bordered
              elevate
              key="content"
              animateOnly={["transform", "opacity"]}
              animation={[
                "quick",
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
              exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
              gap="$4"
              p="$4"
            >
              <Dialog.Title>
                <XStack gap="$2" items="center">
                  <Trash2 size={24} color={theme.error.val} />
                  <Subtitle>{headerText}</Subtitle>
                </XStack>
              </Dialog.Title>

              <Dialog.Description>
                <YStack gap="$3">
                  <Body color="$color">
                    This action cannot be undone. This will permanently delete{" "}
                    <Body fontWeight="700">{expectedValue}</Body> and all associated
                    data including:
                  </Body>
                  <YStack gap="$1" pl="$3">
                    <Caption color="$color7">• Contact information</Caption>
                    <Caption color="$color7">• Interaction history</Caption>
                    <Caption color="$color7">• Contact edits</Caption>
                    <Caption color="$color7">• Notes and preferences</Caption>
                  </YStack>
                  <YStack gap="$2" mt="$2">
                    <Body color="$color">
                      To confirm, type{" "}
                      <Subtitle fontWeight="700" color="$error">
                        {expectedValue}
                      </Subtitle>{" "}
                      below:
                    </Body>
                    <Input
                      placeholder={expectedValue}
                      value={confirmationText}
                      onChangeText={setConfirmationText}
                      autoCapitalize="words"
                      autoCorrect={false}
                      borderColor={
                        confirmationText && !isConfirmationValid
                          ? "$error"
                          : "$borderColor"
                      }
                    />
                    {confirmationText && !isConfirmationValid && (
                      <Caption color="$error">Name doesn't match</Caption>
                    )}
                  </YStack>
                </YStack>
              </Dialog.Description>

              <XStack gap="$3" justify="flex-end">
                <Dialog.Close flex={1} displayWhenAdapted asChild>
                  <Button
                    
                    onPress={handleCancel}
                    disabled={isDeleting}
                  >
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button
                  theme="red"
                  bg="$error"
                  onPress={handleDelete}
                  disabled={!isConfirmationValid || isDeleting}
                  opacity={!isConfirmationValid || isDeleting ? 0.5 : 1}
                  icon={isDeleting ? undefined : <Trash2 size={16} />}
                >
                  {isDeleting ? "Deleting..." : "Delete Contact"}
                </Button>
              </XStack>
            </Dialog.Content>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Dialog.Portal>
    </Dialog>
  );
};

export default DeleteModal;
