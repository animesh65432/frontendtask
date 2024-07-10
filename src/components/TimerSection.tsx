import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { onminlose, onseclose, ontimestop } from "../store/Slices/Timer";
import { donewiththetest } from "../store/Slices/Quizes";

const TimerSection: React.FC = () => {
  const min = useSelector((state: RootState) => state.Timer.min);
  const sec = useSelector((state: RootState) => state.Timer.sec);
  const isfinish = useSelector((state: RootState) => state.Timer.isfinish);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isfinish) return;

    const interval = setInterval(() => {
      if (sec === 0) {
        if (min === 0) {
          dispatch(ontimestop());
          dispatch(donewiththetest());
          clearInterval(interval);
        } else {
          dispatch(onminlose());
        }
      } else {
        dispatch(onseclose());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [min, sec, isfinish, dispatch]);

  const formattedSec = sec < 10 ? `0${sec}` : sec;

  return (
    <div className="flex justify-center items-center h-16 bg-gray-200 rounded-md shadow-md">
      <p className="text-2xl font-bold text-gray-800">
        Time: {min}:{formattedSec}
      </p>
    </div>
  );
};

export default TimerSection;
