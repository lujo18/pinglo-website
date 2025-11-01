import React, { FC, memo, useCallback } from "react";
import { YStack } from "tamagui";
import ButtonA from "../buttons/ButtonA";
import { Body } from "../Typography";

interface props {
  answers: (string | React.ReactNode)[];
  setAnswer: (idx: number) => void;
  currentAnswer: number | null;
}

// Individual button component with better memoization
const AnswerButton = memo(
  ({ option, idx, isSelected, onPress }: {
    option: string | React.ReactNode;
    idx: number;
    isSelected: boolean;
    onPress: (idx: number) => void;
  }) => {
    const handlePress = useCallback(() => {
      if (!isSelected) {
        onPress(idx);
      }
    }, [isSelected, onPress, idx]);

    const content =
      typeof option === "string" || typeof option === "number"
        ? <Body>{option}</Body>
        : option;

    return (
      <ButtonA
        selected={isSelected}
        variant={"outlined"}
        onPress={handlePress}
        enableAnimations={false}
        animation={undefined}
        pressStyle={undefined}
        hoverStyle={undefined}
        minH={0}
      >
        <Body>{content}</Body>
      </ButtonA>
    );
  },
  (prevProps, nextProps) =>
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.idx === nextProps.idx &&
    prevProps.option === nextProps.option
);

const SetAnswers: FC<props> = ({ answers, setAnswer, currentAnswer }) => {
  return (
    <YStack gap={"$2" as any}>
      {answers.map((option, idx) => (
        <AnswerButton
          key={idx}
          option={option}
          idx={idx}
          isSelected={idx === currentAnswer}
          onPress={setAnswer}
        />
      ))}
    </YStack>
  );
};

export default memo(SetAnswers);
