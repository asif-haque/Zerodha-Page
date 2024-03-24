import React from "react";
import Navbar from "./components/Navbar";
import TimeLineBar from "./components/TimeLineBar";

const App = () => {
  return (
    // change the height later
    <div className="bg-[rgb(239,246,255,0.5)] h-[200vh]">
      <nav>
        <Navbar />
      </nav>
      <TimeLineBar />
    </div>
  );
};

export default App;
