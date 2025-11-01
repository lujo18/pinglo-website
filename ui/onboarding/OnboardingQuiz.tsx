import React, { FC, useEffect, useState } from "react";
import PageQuestion from "./PageQuestion";

interface questionSet {
  question: string;
  answers: string[];
}

interface props {
  quizSet: questionSet[];
  handleAnswers: (prop: number[]) => void;
  next?: () => void;
}

const OnboardingQuiz: FC<props> = ({ quizSet, handleAnswers, next }) => {
  const pages = quizSet.length;
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const setCurrentPage = (value: number) => {
    setPage(value);
  };

  const setAnswer = (value: number, idx: number) => {
    if (answers[idx] !== undefined) {
      setAnswers((prev) =>
        prev.map((answer, answerIdx) => (idx === answerIdx ? value : answer))
      );
    } else {
      setAnswers((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    handleAnswers(answers);
  }, [answers]);

  {/* {page === pages && (
        <YGroup flex={1} justify={"center"}>
          <Title>Your responses have been saved!</Title>
          <Subtitle>
            This information will be used to personalize your experience.
          </Subtitle>
        </YGroup>
      )} */}

  return quizSet.map((set, idx) => (
        <PageQuestion
          key={idx}
          questionSet={set}
          setAnswer={(value: number) => setAnswer(value, idx)}
          currentAnswer={answers[idx]}
          next={next}
        />
  ));

  
};

export default OnboardingQuiz;
