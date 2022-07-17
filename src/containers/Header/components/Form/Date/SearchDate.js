import React, { useState } from "react";
import "./styles.scss";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const SearchDate = ({ isActive, className }) => {
  const dateValue = useSelector((state) => state.searchInputDate.value);

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let result = "";

  const startDay = format(dateState[0].startDate, "d");
  const endDay = format(dateState[0].endDate, "d");
  const startMonth = format(dateState[0].startDate, "MMM");
  const endMonth = format(dateState[0].endDate, "MMM");
  const startYear = format(dateState[0].startDate, "yyyy");
  const endYear = format(dateState[0].endDate, "yyyy");

  if (startMonth === endMonth) {
    if (startDay === endDay)
      result = startDay + " " + startMonth + " " + startYear;
    if (startDay !== endDay)
      result = startDay + "-" + endDay + " " + startMonth + " " + startYear;
  }

  if (startMonth !== endMonth) {
    result =
      startDay +
      " " +
      startMonth +
      " - " +
      endDay +
      " " +
      endMonth +
      " " +
      startYear;
  }

  if (startYear !== endYear) {
    result =
      startDay +
      " " +
      startMonth +
      " " +
      startYear +
      " - " +
      endDay +
      " " +
      endMonth +
      " " +
      endYear;
  }

  const classes = {
    activate: isActive ? "active " : "",
  };

  return (
    <div className={"search-date " + classes.activate + className}>
      <div className="date-choosed">{dateValue}</div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => {
          setDateState([item.selection]);
        }}
        moveRangeOnFirstSelection={false}
        ranges={dateState}
        months={2}
        direction="horizontal"
        rangeColors={["#373737"]}
        color="red"
        showMonthAndYearPickers={false}
      />
    </div>
  );
};

SearchDate.prototype = {
  isActive: PropTypes.bool,
};

export default SearchDate;
