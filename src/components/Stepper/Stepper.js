import React from "react";
import PropTypes from "prop-types";
import Grid from "Layout/Grid";
import Container from "Layout/Container";
import "./styles.scss";
import Icons from "components/Icons";
import { useEffect } from "react";
import { useState } from "react";

const sizes = {
  small: "st-small ",
  medium: "st-medium ",
  large: "st-large ",
  undefined: "",
};

const Stepper = ({ size, data, currentStep, className }) => {
  const classContent = "stepper " + sizes[size];
  const [items, setItems] = useState();

  if (!items) {
    const newItems = data.map((item) => {
      return new Object({ tittle: item, status: "disabled" });
    });
    setItems(newItems);
  }

  if (items) {
    items.map((item, i) => {
      if (i === currentStep) {
        item.status = "active";
      }
      if (i <= currentStep - 1) {
        item.status = "checkmark";
      }
    });
  }

  const result = items
    ? items.map((item, i) => {
        const line = i != data.length - 1 ? <div className="st-line" /> : null;
        const activate =
          item.status === "active"
            ? "active"
            : item.status === "checkmark"
            ? "checkmark"
            : "disabled";
        const activeAndDisabeled = (
          <div className={"st-item " + activate}>
            <span className="st-atribute">{i + 1}</span>
            <span className="st-tittle">{item.tittle}</span>
          </div>
        );
        const checkmark = (
          <div className={"st-item " + activate}>
            <span className="st-atribute">
              <Icons
                className="st-icon-chekmark"
                variant="checkmark-single-green"
              />
            </span>
            <span className="st-tittle">{item.tittle}</span>
          </div>
        );

        const result =
          item.status === "active" || item.status === "disabled"
            ? activeAndDisabeled
            : item.status === "checkmark"
            ? checkmark
            : "";
        return (
          <div key={"step-item" + i} className="st-items">
            {result}
            {line}
          </div>
        );
      })
    : null;

  return (
    <div className={className}>
      <div className={classContent}>{result}</div>
    </div>
  );
};

Stepper.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string,
  currentStep: PropTypes.number,
};

export default Stepper;
