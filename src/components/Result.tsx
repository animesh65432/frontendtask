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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Results Page</h1>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-semibold">Percentage:</span>{" "}
            {percentage.toFixed(2)}%
          </p>
          <p className="text-lg">
            <span className="font-semibold">Total Questions:</span>{" "}
            {Totalnumbers}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Correct Answers:</span>{" "}
            {correctedanswers}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Notes:</span> {notepad}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
