import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import "animate.css";
import DatePicker from "components/Input/DatePicker/DatePicker";
import { useState } from "react";
import { useInputValidate } from "components/utility/inputErrorInfo";
import { useEffect } from "react";
import { useRef } from "react";
import Icons from "components/Icons";
import { ANIMATE_BOUNCEIN } from "assets/animate/animate";

const icons = {
  valid: <Icons className={ANIMATE_BOUNCEIN} variant="checkmark" />,
  invalid: <Icons className={ANIMATE_BOUNCEIN} variant="warning" />,
};

const Availability = () => {
  const [values, setValues] = useState([]);
  const [validate, setValidate] = useInputValidate();
  const ref = useRef();

  useEffect(() => {
    setValidate({ target: ref.current });
  }, [values]);

  const classes = {
    valid: "text-body",
    invalid: "text-danger",
  };

  return (
    <div className="mb-s animate__animated animate__fadeIn">
      <DatePicker onChange={(val) => setValues(val)} />
      <small
        className={
          "d-flex justify-content-between align-items-center " +
          classes[validate.validity]
        }
      >
        {validate.message} {icons[validate.validity]}
      </small>
      <input
        ref={ref}
        type={"number"}
        className="p-0"
        style={{ height: "0px", border: "none", position: "absolute" }}
        min={5}
        value={values.length}
        onChange={() => ""}
        required
      />
    </div>
  );
};

Availability.propTypes = {};

export default Availability;
