import { differenceInMilliseconds } from "date-fns";
import { useState } from "react";

export const useDifferenceTime = () => {
  const [value, setValue] = useState("");

  const getDifferenceTime = (timeStart, timeEnd) => {
    const milli = differenceInMilliseconds(
      new Date("01/01/2000/" + timeEnd),
      new Date("01/01/2000/" + timeStart)
    );
    const time = new Date(milli);
    const hour = time.getUTCHours();
    const minutes = time.getUTCMinutes();

    setValue(
      (hour < 10 ? "0" : "") + hour + ":" + (minutes < 10 ? "0" : "") + minutes
    );
  };

  return [value, getDifferenceTime];
};
