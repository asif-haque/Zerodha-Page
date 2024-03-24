import React from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Charts from "./components/Charts";
import { TimeLineContextProvider } from "./contexts/TimeLineContext";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiCopyrightThin } from "react-icons/pi";

const App = () => {
  return (
    <TimeLineContextProvider>
      <div className="bg-[rgb(239,246,255)] pt-[25vh]">
        <nav>
          <Navbar />
          <TopBar />
        </nav>
        <main className="px-3 md:px-10 mb-5">
          <Charts />
        </main>
        <footer className="bg-blue-100 h-[20vh] flex flex-col justify-center p-5">
          <div className="bg-blue-300 w-fit p-2 font-bold">&copy; ZERODHA</div>
          <div className="">
            <AiFillThunderbolt className="inline" /> By Asif
          </div>
        </footer>
      </div>
    </TimeLineContextProvider>
  );
};

export default App;
