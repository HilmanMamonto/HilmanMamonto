import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Icons from "components/Icons";

const Stepper = ({ size, data, currentStep, className }) => {
  const classes = {
    container: "stepper d-flex justify-content-center gap-2 w-100 " + className,
    number: "d-flex gap-1 align-items-center st-small ",
    itemNumber:
      "d-flex align-items-center justify-content-center rounded-pill ",
    active: "bg-black text-white",
    disabled: "bg-secondary text-white",
  };

  return (
    <div className={classes.container}>
      {data.map((item, i) => {
        const activate = i === currentStep ? classes.active : classes.disabled;
        const contents = {
          number: (
            <div className={classes.number}>
              <span
                style={{ width: "16px", height: "16px" }}
                className={classes.itemNumber + activate}
              >
                {i + 1}
              </span>
              <span className="st-tittle">{item}</span>
            </div>
          ),
          icon: (
            <div className="d-flex align-items-center fw-bold gap-1 bg-transparent st-small">
              <Icons variant="checkmark-single-green" />
              <span>{item}</span>
            </div>
          ),
        };

        return (
          <div
            key={"step-item" + i}
            className="d-flex gap-2 align-items-center"
          >
            {(i < currentStep && contents.icon) || contents.number}
            {data.length - 1 != i && (
              <div className="d-block border-top st-line"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string,
  currentStep: PropTypes.number,
};

export default Stepper;
