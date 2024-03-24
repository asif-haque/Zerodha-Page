import { createContext, useContext, useState } from "react";
import { initialVal } from "../data/scale";

const TimeLineContext = createContext();

export const TimeLineContextProvider = ({ children }) => {
  const [timeLines, setTimeLines] = useState(initialVal);
  return (
    <TimeLineContext.Provider value={{ timeLines, setTimeLines }}>
      {children}
    </TimeLineContext.Provider>
  );
};

export const useTimeLineContext = () => {
  return useContext(TimeLineContext);
};
