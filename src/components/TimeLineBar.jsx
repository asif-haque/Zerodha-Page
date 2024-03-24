import React from "react";
import { useTimeLineContext } from "../contexts/TimeLineContext";

const TimeLineBar = () => {
  const { timeLines, setTimeLines } = useTimeLineContext();
  const handleActive = (itemName) => {
    // will send an updated new array, where only clicked item will hold active:true value, every other item will hold active:false value
    setTimeLines(
      timeLines.map((time) =>
        time.name === itemName
          ? { ...time, active: true }
          : { ...time, active: false }
      )
    );
  };

  return (
    <div className="bg-white h-8 text-zinc-500 fixed bottom-0 left-0 w-full flex text-sm md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-[30%] md:rounded-md overflow-hidden shadow">
      {timeLines.map((item) => (
        <button
          className={`flex-1 ${
            item.active && `bg-blue-600 text-white md:rounded-md`
          }`}
          onClick={() => handleActive(item.name)}
          key={item.name}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default TimeLineBar;
