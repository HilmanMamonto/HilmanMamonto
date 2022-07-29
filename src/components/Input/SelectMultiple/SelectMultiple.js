import { useInputValidate } from "components/utility/inputErrorInfo";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.scss";
import Icons from "components/Icons";
import { useClickOutside } from "components/utility/clickOutside";

const icons = {
  valid: <Icons variant="checkmark" />,
  invalid: <Icons variant="warning" />,
};

export const SelectMultiple = ({
  onChange,
  required,
  label,
  name,
  min,
  value,
}) => {
  const [values, setValues] = useState(value ? value : []);
  const [validate, setValidate] = useInputValidate();
  const [toggle, setToggle] = useState(false);
  const ref = useRef();
  const refContainer = useRef();
  // const {ref} = useClickOutside();

  const handleClick = (e) => {
    const { value } = e.target;
    const found = values.find((item) => item === value);
    if (found) {
      const newValues = values.filter((item) => item !== found);
      setValues(newValues);
    }
    if (!found) {
      setValues([...values, value]);
    }
  };

  const items = [
    "sun screen",
    "food",
    "watter",
    "mineral watter",
    "lunch",
    "umbrella",
  ];

  const display =
    values.length > 1
      ? values.length + " items selected"
      : values.length === 1
      ? values.length + " item selected"
      : !min && !required
      ? "optional"
      : "Select min " + min + " items";

  useEffect(() => {
    onChange({ target: { value: values } });
    if (values.length > 0) setValidate({ target: ref.current });
  }, [values]);

  const handleClickOutside = (e) => {
    if (refContainer && !refContainer.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  });

  const classes = {
    items: "items bg-white d-flex border flex-column mt-2 ",
    wrapper:
      "wrapper d-flex align-items-center justify-content-between py-2 px-3 rounded ",
    toggle: toggle ? "active " : "",
    border:
      validate.validity === "invalid" ? "border border-danger " : "border ",
  };

  return (
    <div ref={refContainer} className="select-control d-flex flex-column">
      <label className="mb-1 d-inline-block" htmlFor={name}>
        {label} {required && " *"}
      </label>
      <div
        onClick={() => setToggle(!toggle)}
        className={classes.wrapper + classes.toggle + classes.border}
      >
        <div className="input-wrapper">
          <input
            ref={ref}
            onInvalid={() => setValidate({ target: ref.current })}
            min={min}
            name={name}
            value={values.length > 0 ? values.length : ""}
            onChange={() => ""}
            type="number"
            required={required}
          />
          <span
            className={
              values.length > 0
                ? "text-nowrap text-body text-truncate"
                : "text-nowrap text-black-50 text-truncate"
            }
          >
            {display}
          </span>
        </div>
        <span className="d-flex align-item-center gap-2">
          <Icons
            className={toggle ? "ic-arrow active" : "ic-arrow"}
            variant="arrow-up"
          />
          {icons[validate.validity]}
        </span>
      </div>
      <div className={classes.items + classes.toggle}>
        {items.map((item) => {
          return (
            <div
              key={item}
              className={
                values.includes(item)
                  ? "d-flex gap-2 px-2 py-1 bg-light"
                  : "d-flex gap-2 px-2 py-1"
              }
            >
              <input
                readOnly
                checked={values.includes(item)}
                value={item}
                onClick={handleClick}
                type="checkbox"
              />
              <input
                readOnly
                type="text"
                onClick={handleClick}
                value={item}
              ></input>
            </div>
          );
        })}
      </div>
      <small className={"text-danger"}>
        {validate.validity === "invalid" && validate.message}
      </small>
    </div>
  );
};

SelectMultiple.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
};
