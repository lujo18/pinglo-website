// WelcomePage.tsx
import { router } from "expo-router";
import { ReactNode } from "react";
import { ImageBackground, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { H3, Image, SizeTokens, ThemeName, View, YStack } from "tamagui";
import ButtonA from "../buttons/ButtonA";
import Page from "../Page";
import { Subtitle, Title } from "../Typography";

type WelcomeProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  appName?: ReactNode;
  image?: ImageSourcePropType;
  imageType?: "background" | "default";
  next?: () => void;
  hidePrimaryAction?: boolean;
  hideSecondaryAction?: boolean;
  custom?: {
    Title?: React.ComponentType<{ children: ReactNode; text?: string }>;
    Subtitle?: React.ComponentType<{ children: ReactNode; text?: string }>;
    AppName?: React.ComponentType<{ children: ReactNode }>;
    ActionsContainer?: React.ComponentType<{ children: ReactNode }>;
    ActionButton?: React.ComponentType<ActionButtonProps>;
    SecondaryButton?: React.ComponentType<ActionButtonProps>;
  };
  children?: ReactNode;
};

interface ActionButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  size?: SizeTokens | undefined;
  theme?: ThemeName | undefined;
}

const PageWelcome = ({
  title,
  subtitle,
  appName,
  image,
  imageType = "default",
  next,
  hidePrimaryAction,
  hideSecondaryAction,
  custom = {},
  children,
}: WelcomeProps) => {
  const WelcomeTitle = custom.Title || Title;
  const WelcomeSubtitle = custom.Subtitle || Subtitle;
  const AppName = custom.AppName || H3;
  const ActionsContainer =
    custom.ActionsContainer ||
    (({ children }: { children: ReactNode }) => (
      <YStack width={"100%"} gap={"$2"}>{children}</YStack>
    ));
  // Wrap default buttons with ButtonA while allowing consumer override
  const ActionButton =
    custom.ActionButton ||
    (({ children, disabled, onPress, size, theme }: ActionButtonProps) => (
      <ButtonA disabled={disabled ?? false} variant={undefined} onPress={onPress} theme={theme}>
        {children}
      </ButtonA>
    ));
  const SecondaryButton =
    custom.SecondaryButton ||
    (({ children, disabled, onPress, size, theme }: ActionButtonProps) => (
      <ButtonA disabled={disabled ?? false} onPress={onPress} theme={theme}>
        {children}
      </ButtonA>
    ));

  const WelcomePageContent = () => {
    return (
      <YStack flex={2} justify={"space-between"}>
        {children ? (
          children
        ) : (
          <YStack flex={1} items={"center"}>
            {(title || subtitle) && (
              <>
                {title && <WelcomeTitle text={"center"}>{title}</WelcomeTitle>}
                {subtitle && (
                  <WelcomeSubtitle text={"center"}>{subtitle}</WelcomeSubtitle>
                )}
              </>
            )}
          </YStack>
        )}

        {(!hidePrimaryAction || !hideSecondaryAction) && (
          <ActionsContainer>
            {!hidePrimaryAction && (
              <ActionButton
                theme={"accent"}

                size={"$5"}
                onPress={next ?? (() => {})}
              >
                Get Started
              </ActionButton>
            )}
            {!hideSecondaryAction && (
              <SecondaryButton onPress={() => router.push("/auth/signin")} size={"$5"}>
                Already have an account
              </SecondaryButton>
            )}
          </ActionsContainer>
        )}
      </YStack>
    );
  };

  return (
    <YStack flex={1}>
      {imageType === "background" ? (
        <ImageBackground style={{ flex: 1, height: "100%" }} source={image}>
          <SafeAreaView style={{ flex: 1 }}>
            <YStack justify={"center"} items={"center"} flex={1} p={"$4"}>
              <YStack flex={1} justify={"flex-end"} mb={"$2"}>
                <AppName>{appName}</AppName>
              </YStack>

              <WelcomePageContent />
            </YStack>
          </SafeAreaView>
        </ImageBackground>
      ) : (
        <Page justify={"space-between"}>
          {(appName || image) && (
            <>
              <YStack flex={1} justify={"flex-end"} items={"center"} gap={"$4"}>
                {appName && <AppName>{appName}</AppName>}
              </YStack>

              {image && imageType === "default" && (
                <View items={"center"}>
                  <Image
                    source={image}
                    width={300}
                    height={300}
                    rounded={"$4"}
                  />
                </View>
              )}
            </>
          )}
          <WelcomePageContent />
        </Page>
      )}
    </YStack>
  );
};

export default PageWelcome