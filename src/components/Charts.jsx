import React from "react";
import Card from "./Card";
import { useTimeLineContext } from "../contexts/TimeLineContext";

const Charts = () => {
  const { timeLines } = useTimeLineContext();
  const activeTimeLine = timeLines.find(
    (el) => el.active && el.active === true
  );
  //   console.log(activeTimeLine);
  return (
    <div className="space-y-5 md:space-y-0 md:grid grid-cols-2	gap-5">
      <Card
        heading="Summary"
        src="/bar.svg"
        pointerPos={activeTimeLine.scale.summary}
      />
      <Card
        heading="Support & Resistance"
        src="/bar_parallel.svg"
        pointerPos={activeTimeLine.scale.sNr}
      />
      <Card
        heading="Moving averages"
        src="/bar.svg"
        pointerPos={activeTimeLine.scale.movingAvg}
      />
      <Card
        heading="Oscillators"
        src="/bar.svg"
        pointerPos={activeTimeLine.scale.osc}
      />
    </div>
  );
};

export default Charts;
