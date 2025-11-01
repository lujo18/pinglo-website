import React, { memo, useEffect, useState } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Button, getTokens, useTheme, XStack } from "tamagui";
import { Body } from "../Typography";

interface Size {
  width: number;
  height: number;
}
interface Position {
  x: number;
  y: number;
}

interface AnimatedNavbarProps {
  pageNames: string[]; // labels / identifiers for each page
  activePage: number;
  setActivePage: (index: number) => void;
}

interface NavButtonProps {
  page: string;
  index: number;
  activePage: number;
  setActivePage: (index: number) => void;
  activeButton: number;
  setActiveButton: (index: number) => void;
  activeButtonPosition: Position;
  setActiveButtonPosition: (pos: Position) => void;
  buttonSize: Size;
  setButtonSize: (size: Size) => void;
}

const AnimatedNavbar = ({
  pageNames,
  activePage,
  setActivePage,
}: AnimatedNavbarProps) => {
  const [buttonSize, setButtonSize] = useState<Size>({ width: 0, height: 0 });
  const [activeButtonPosition, setActiveButtonPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [activeButton, setActiveButton] = useState(0);

  const animatedX = useSharedValue(0);

  const tokens = getTokens();
  const theme = useTheme();

  useEffect(() => {
    animatedX.value = withTiming(activeButtonPosition.x, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });

  }, [activeButtonPosition.x, animatedX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: animatedX.value}, {translateY: activeButtonPosition.y }],
  }));

  return (
    <XStack flexDirection="row" flex={1}>
      <Animated.View
        //className='bg-background-80 absolute rounded-xl -m-6'
        style={[
          {
            position: "absolute",
            borderRadius: tokens.radius.$4.val,
            backgroundColor: theme.color2.val,
            width: buttonSize.width,
            height: buttonSize.height,
          },
          animatedStyle,
        ]}
      />
      <XStack
        flex={1}
        flexDirection="row"
        borderWidth={"$0.25"}
        borderColor={"$borderColor"}
        borderRadius={"$4"}
        items={"center"}
        justify={"space-evenly"}
        p={"$2"}

        //className="flex flex-row px-2 py-2 m-6 mb-2 border-2 border-background-90 rounded-2xl justify-stretch items-center"
      >
        {pageNames.map((page, idx) => (
          <NavButton
            key={idx}
            page={page}
            index={idx}
            activePage={activePage}
            setActivePage={setActivePage}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            activeButtonPosition={activeButtonPosition}
            setActiveButtonPosition={setActiveButtonPosition}
            buttonSize={buttonSize}
            setButtonSize={setButtonSize}
          />
        ))}
      </XStack>
      
    </XStack>
  );
};

const NavButton = ({
  page,
  index,
  activePage,
  setActivePage,
  activeButton,
  setActiveButton,
  activeButtonPosition,
  setActiveButtonPosition,
  buttonSize,
  setButtonSize,
}: NavButtonProps) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    if (
      activePage === index &&
      (activeButtonPosition.x !== position.x ||
        activeButtonPosition.y !== position.y) &&
      position.x !== 0 &&
      position.y !== 0
    ) {
      setActiveButtonPosition(position);
      setActiveButton(index);
    }
  }, [
    activePage,
    index,
    activeButtonPosition,
    position,
    setActiveButtonPosition,
    setActiveButton,
  ]);

  return (
    <Button
      bg={"transparent"}
      flex={1}
      justify={"center"}
      items={"center"}
      p={"$2"}
      boxSizing="content"
      //className="flex-1 justify-center items-center p-2 box-content"
      onPress={() => {
        if (activePage !== index) {
          setActivePage(index);
        }
      }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        event.target.measure((fx, fy, w, h, px, py) => {
          setButtonSize({ width, height });

          setPosition({ x: fx, y: fy });

          if (index === activePage) {
            setActiveButtonPosition({ x: fx, y: fy });
          }
        });
      }}
    >
      <Body color={index === activeButton ? "$color" : "$color4"}>
        {page}
      </Body>
    </Button>
  );
};

export default memo(AnimatedNavbar);
