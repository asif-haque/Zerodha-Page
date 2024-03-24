import React from "react";

const TimeLineBar = () => {
  const timeLines = [
    {
      name: "5min",
    },
    {
      name: "10min",
    },
    {
      name: "15min",
    },
    {
      name: "30min",
    },
    {
      name: "1 hour",
    },
    {
      name: "1 Day",
    },
  ];
  return (
    <div className="bg-white p-2 fixed bottom-0 w-full flex text-sm md:static md:w-[35%] md:rounded-md md:my-5 mx-auto shadow">
      {timeLines.map((item) => (
        <button className="flex-1">{item.name}</button>
      ))}
    </div>
  );
};

export default TimeLineBar;
