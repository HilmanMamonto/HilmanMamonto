import React, { forwardRef } from "react";
import { DateRange } from "react-date-range";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles.scss";
import { useEffect } from "react";
import { format } from "date-fns/esm";

const DateRangePicker = ({ className = "", onChange, style, hidden }, ref) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (item) => {
    const { startDate, endDate } = item.selection;
    setDates([item.selection]);
    const start = format(startDate, "MM/dd/yyyy").split("/").join("-");
    const end = format(endDate, "MM/dd/yyyy").split("/").join("-");
    const formated = { startDate: start, endDate: end };
    setDates([item.selection]);
    onChange({ startDate, endDate, formated });
  };

  return (
    <div
      ref={ref}
      style={style}
      hidden={hidden}
      className={"date-range-picker pt-2 pb-4 " + className}
    >
      <DateRange
        editableDateInputs={true}
        onChange={handleChange}
        ranges={dates}
        direction="horizontal"
        rangeColors={["#141414"]}
        color={"#141414"}
        showMonthAndYearPickers={false}
        minDate={new Date()}
      />
    </div>
  );
};

export default React.forwardRef(DateRangePicker);
