import React from "react";
import { useDispatch } from "react-redux";
import { donewiththetest } from "../store/Slices/Quizes";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const onsubmitthetest = () => {
    dispatch(donewiththetest());
  };

  return (
    <div className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-white text-xl font-bold">Online Test</h1>
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        onClick={onsubmitthetest}
      >
        Submit Test
      </button>
    </div>
  );
};

export default Header;
