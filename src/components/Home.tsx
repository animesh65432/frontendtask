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
      toast.error("Please atleast select ones");
    } else {
      dispatch(submittheanswer({ question: quizes.question, answer: option }));
    }
  };

  return (
    <div>
      <TimerSection />
      {!isInFinish ? (
        <>
          <div>
            <div>{CateGory}</div>
            <div className="flex">
              <p>{quizes.question}</p>
              <div onClick={() => handleOptionClick("A")}>{quizes.A}</div>
              <div onClick={() => handleOptionClick("B")}>{quizes.B}</div>
              <div onClick={() => handleOptionClick("C")}>{quizes.C}</div>
              <div onClick={() => handleOptionClick("D")}>{quizes.D}</div>
              <button onClick={submitthequestion}>Submit</button>
            </div>
            <button onClick={() => dispatch(prevPage())}>Prev</button>
            <button onClick={() => dispatch(nextPage())}>Next</button>
            <div>
              <label htmlFor="nodepad">NodePad</label>
              <input
                type="text"
                onChange={(e) => dispatch(getthenode(e.target.value))}
              ></input>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p>Time's Up!</p>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Home;
