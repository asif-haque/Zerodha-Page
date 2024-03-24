import React from "react";
import TimeLineBar from "./TimeLineBar";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidUpArrowAlt } from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="fixed w-full top-[10vh] p-2 px-5 z-40 bg-blue-50">
      <div className="flex gap-2">
        <div className="my-auto">
          <a href="#">
            <IoIosArrowBack className="text-2xl" />
          </a>
        </div>
        <div className="">
          <div className="text-xl font-bold">NIFTY 500</div>
          <div className="">
            &#8377; 0.00{" "}
            <span className="text-green-500 text-sm">
              <BiSolidUpArrowAlt className="inline-block text-lg" /> (0.00%)
            </span>
          </div>
        </div>
      </div>
      <TimeLineBar />
    </div>
  );
};

export default TopBar;
