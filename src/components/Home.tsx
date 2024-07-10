import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  prevPage,
  nextPage,
  submittheanswer,
  getthenode,
} from "../store/Slices/Quizes";
import TimerSection from "./TimerSection";
import toast, { Toaster } from "react-hot-toast";

const Home: React.FC = () => {
  const [option, selectedOption] = useState<string>("");
  const quizes = useSelector((state: RootState) => state.quizes.quizes);
  const isInFinish = useSelector((state: RootState) => state.Timer.isfinish);
  const CateGory = useSelector((state: RootState) => state.user.category);
  console.log(CateGory);
  const dispatch = useDispatch();
  console.log(quizes.answer);

  const handleOptionClick = (option: string) => {
    selectedOption(option);
  };

  const submitthequestion = () => {
    if (option.length === 0) {
      toast.error("Please at least select one option");
    } else {
      toast.success("Answer submitted successfully");
      dispatch(submittheanswer({ question: quizes.question, answer: option }));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <TimerSection />
      {!isInFinish ? (
        <>
          <div className="mt-6">
            <div className="mb-4 text-xl font-semibold">{CateGory}</div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <p className="mb-4 text-lg font-medium">{quizes.question}</p>
              <div className="space-y-2">
                <div
                  className={`p-2 rounded-md cursor-pointer ${
                    option === "A" ? "bg-blue-200" : "bg-blue-100"
                  }`}
                  onClick={() => handleOptionClick("A")}
                >
                  {quizes.A}
                </div>
                <div
                  className={`p-2 rounded-md cursor-pointer ${
                    option === "B" ? "bg-blue-200" : "bg-blue-100"
                  }`}
                  onClick={() => handleOptionClick("B")}
                >
                  {quizes.B}
                </div>
                <div
                  className={`p-2 rounded-md cursor-pointer ${
                    option === "C" ? "bg-blue-200" : "bg-blue-100"
                  }`}
                  onClick={() => handleOptionClick("C")}
                >
                  {quizes.C}
                </div>
                <div
                  className={`p-2 rounded-md cursor-pointer ${
                    option === "D" ? "bg-blue-200" : "bg-blue-100"
                  }`}
                  onClick={() => handleOptionClick("D")}
                >
                  {quizes.D}
                </div>
              </div>
              <button
                className="mt-4 w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                onClick={submitthequestion}
              >
                Submit
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                onClick={() => dispatch(prevPage())}
              >
                Prev
              </button>
              <button
                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                onClick={() => dispatch(nextPage())}
              >
                Next
              </button>
            </div>
            <div className="mt-6">
              <label
                htmlFor="nodepad"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                NodePad
              </label>
              <input
                type="text"
                id="nodepad"
                className="w-full p-2 border rounded-md"
                onChange={(e) => dispatch(getthenode(e.target.value))}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
          <p>Time's Up!</p>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Home;
