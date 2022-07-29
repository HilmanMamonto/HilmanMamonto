import DateRangePicker from "components/Input/DateRangePicker/DateRangePicker";
import Button from "components/NewButton/Button";
import { useClickOutside } from "components/utility/clickOutside";
import React from "react";
import { useState } from "react";

const CheckIn = ({}) => {
  const { show, ref, onToggle } = useClickOutside();
  const [values, setValues] = useState();

  const labels = {
    checkIn: values ? values.startDate : "-",
    checkOut: values ? values.endDate : "-",
  };

  return (
    <div className="row row-cols-1 px-2 row-cols-md-2">
      <div
        ref={ref}
        className="d-flex flex-column mb-3 mb-md-0 pe-0 pe-md-2 px-0 position-relative"
      >
        <button
          onClick={onToggle}
          className="h-100 d-flex px-3 py-2 w-100 border rounded"
        >
          <div className="w-100 d-flex border-end align-items-start flex-column my-auto">
            <small className="fw-semibold">check-in</small>
            <span>{labels.checkIn}</span>
          </div>
          <div className="w-100 ps-3 d-flex align-items-start flex-column my-auto">
            <small className="fw-semibold">check-out</small>
            <span>{labels.checkOut}</span>
          </div>
        </button>
        <DateRangePicker
          hidden={!show}
          style={{ width: "330px", padding: "0px 20px" }}
          className="position-absolute top-100 rounded shadow mt-4"
          onChange={(data) => setValues({ ...data.formated })}
        />
      </div>
      <Button justifyContent="center" label="add to book" className="py-3" />
    </div>
  );
};

export default CheckIn;
