import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const calculatePercentage = (result: number[]) => {
  if (result.length === 0) {
    return 0;
  }

  const totalQuestions = result.length;
  const correctAnswers = result.reduce((acc, val) => acc + val, 0);
  return (correctAnswers / totalQuestions) * 100;
};

const Result: React.FC = () => {
  const notepad = useSelector((state: RootState) => state.quizes.nodepad);
  const result = useSelector((state: RootState) => state.quizes.result);
  const Totalnumbers = useSelector(
    (state: RootState) => state.quizes.value.length
  );
  let percentage = calculatePercentage(result);
  const correctedanswers = result.reduce((acc, cur) => acc + cur, 0);

  return (
    <div>
      <div>
        <h1>Results Page</h1>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        <p>Total Questions: {Totalnumbers}</p>
        <p>Correct Answers: {correctedanswers}</p>
        <p>Notes: {notepad}</p>
      </div>
    </div>
  );
};

export default Result;
