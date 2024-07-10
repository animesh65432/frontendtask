import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { prevPage, nextPage } from "../store/Slices/Quizes";

const Home: React.FC = () => {
  const quizes = useSelector((state: RootState) => state.quizes.quizes);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex">
        {quizes.question}
        <div>{quizes.A}</div>
        <div>{quizes.B}</div>
        <div>{quizes.C}</div>
        <div>{quizes.D}</div>
      </div>
      <button onClick={() => dispatch(prevPage())}>Prev</button>
      <button onClick={() => dispatch(nextPage())}>Next</button>
    </div>
  );
};

export default Home;
