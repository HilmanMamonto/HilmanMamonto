import React from "react";
import { DateRange } from "react-date-range";
import PropTypes from "prop-types";
import { useState } from "react";
import "./styles.scss";
import { useEffect } from "react";

const DateRangePicker = ({ className, onChange }) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => onChange(dates), [dates]);

  return (
    <div className="date-range-picker d-flex justify-content-center">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDates([item.selection])}
        ranges={dates}
        direction="horizontal"
        rangeColors={["#373737"]}
        color={"#373737"}
        showMonthAndYearPickers={false}
      />
    </div>
  );
};

export default DateRangePicker;
