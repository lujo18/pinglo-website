import React, { FC, memo, ReactNode, useCallback, useEffect, useState } from "react";
import { XStack, YStack } from "tamagui";
import ButtonA from "../buttons/ButtonA";
import SetAnswers from "./SetAnswers";
import { Title } from "../Typography";

interface questionSet {
  question: string;
  answers: (string | ReactNode)[];
  subtext?: string;
  multiSelect?: boolean;
}

interface props {
  questionSet: questionSet;
  setAnswer?: (val: number) => void;
  currentAnswer?: number | null;
  next?: () => void;
  back?: () => void;
}

const PageQuestion: FC<props> = ({
  questionSet,
  setAnswer,
  currentAnswer = null,
  next,
  back,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(currentAnswer);

  useEffect(() => {
    setSelectedAnswer((prev) => {
      if (prev === currentAnswer) {
        return prev;
      }
      return currentAnswer ?? null;
    });
  }, [currentAnswer]);

  const handleSelect = useCallback(
    (value: number) => {
      setSelectedAnswer(value);
      setAnswer?.(value);
    },
    [setAnswer]
  );

  const isNextDisabled = selectedAnswer === null || !next;

  const handleNext = useCallback(() => {
    next?.();
  }, [next]);

  return (
    <YStack display="flex" flex={1} justify={"space-between"}>
      <YStack gap={"$4" as any}>
        <XStack gap={"$2" as any}>
          <Title>{questionSet.question}</Title>
        </XStack>
        <SetAnswers
          answers={questionSet.answers}
          setAnswer={handleSelect}
          currentAnswer={selectedAnswer}
        />
      </YStack>

      <ButtonA
        disabled={isNextDisabled}
        onPress={handleNext}
      >
        Next Question
      </ButtonA>
    </YStack>
  );
};

export default memo(PageQuestion);
