import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

const Card = ({ heading, pointerPos = 0, src }) => {
  pointerPos = pointerPos * 18; // considered 18px each unit of the scale
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };
  const handleHoverOut = () => {
    setHovered(false);
  };
  return (
    <div className="bg-white shadow p-5">
      <div className="text-sm font-semibold mb-5 flex items-center relative">
        {heading}{" "}
        <div
          className="ml-auto cursor-pointer p-1"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <CiCircleInfo className={`text-lg ${hovered && `text-blue-600`}`} />
        </div>
        {hovered && (
          <div className="absolute bg-white text-zinc-600 text-xs right-5 top-6 w-[80%] md:w-[50%] z-10 shadow-lg rounded-md p-3">
            Here is a Snapshot of the most popular technical indicators. We take
            these into consideration, analyze them, run some internal
            calculations and help you understand the overall market conditions.
          </div>
        )}
      </div>
      <div className="w-fit mx-auto space-y-5">
        <div className="relative">
          {/* 18px X 16 spaces */}
          <img src={src} className="min-w-[288px] w-[288px]" />
          <div
            className={`w-[18px] absolute top-1/2 -translate-y-1/2 -translate-x-[50%] transition-all duration-300`}
            style={{ left: pointerPos + "px" }}
          >
            <img src="/pointer.svg" className="" />
          </div>
        </div>
        <div className="flex gap-7 text-sm text-center">
          <div className="flex-1 space-y-2">
            <p>2</p>
            <p className="bg-pink-100 text-pink-600 rounded-md">Bearish</p>
          </div>
          <div className="flex-1 space-y-2">
            <p>10</p>
            <p className="bg-zinc-100 text-zinc-600 rounded-md">Neutral</p>
          </div>
          <div className="flex-1 space-y-2">
            <p>12</p>
            <p className="bg-green-100 text-green-600 rounded-md">Bullish</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-3 text-sm md:w-[70%] mx-auto text-center mt-5 md:mt-10 ">
        {/* DUMMY DATA */}
        <div className="">
          <p>19610.65</p>
          <p className="text-gray-400">S1</p>
        </div>
        <div className="">
          <p>19610.65</p>
          <p className="text-gray-400">S1</p>
        </div>
        <div className="">
          <p>19610.65</p>
          <p className="text-gray-400">S1</p>
        </div>
        <div className="">
          <p>19610.65</p>
          <p className="text-gray-400">S1</p>
        </div>
        <div className="">
          <p>19610.65</p>
          <p className="text-gray-400">S1</p>
        </div>
        <div className="">
          <p>19610.65</p>
          <p className="text-gray-400">S1</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
