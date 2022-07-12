import { useInputValidate } from "components/utility/inputErrorInfo";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.scss";
import Icons from "components/Icons";
import Button from "components/NewButton/Button";

const icons = {
  valid: <Icons variant="checkmark" />,
  invalid: <Icons variant="warning" />,
};

export const SelectMultiple = ({ onChange, required, label, name, min }) => {
  const [values, setValues] = useState([]);
  const [validate, setValidate] = useInputValidate();
  const [toggle, setToggle] = useState(false);
  const ref = useRef();
  const refContainer = useRef();

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
    setValidate({ target: ref.current });
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
      : "select min 5 items";

  useEffect(() => {
    onChange({ target: { value: values } });
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

  const handleSelectAll = () => {
    if (values.length === 0) {
      setValues(items);
    } else {
      setValues([]);
    }
    setValidate({ target: ref.current });
  };

  const btnLabel = values.length > 0 ? "unselect" : "select all";

  const classes = {
    items: toggle
      ? "items d-flex border flex-column mt-2 active"
      : "items d-flex border flex-column mt-2",
  };

  return (
    <div ref={refContainer} className="select-control d-flex flex-column">
      <label htmlFor={name}>
        {label} {required && " *"}
      </label>
      <div
        onClick={() => setToggle(!toggle)}
        className="wrapper d-flex align-items-center justify-content-between border py-1 px-2 rounded"
      >
        <span>{display}</span>
        <span className="d-flex align-item-center gap-2">
          {icons[validate.validity]}
          <Icons
            className={toggle ? "ic-arrow active" : "ic-arrow"}
            variant="arrow-up"
          />
        </span>
      </div>
      <input
        ref={ref}
        min={5}
        name={name}
        onChange={() => ""}
        value={values.length}
        type="number"
        required={required}
        hidden
      />
      <div className={classes.items}>
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
              <input readOnly onClick={handleClick} value={item}></input>
            </div>
          );
        })}
        <Button
          label={btnLabel}
          onClick={handleSelectAll}
          justifyContent="center"
          className="mt-2"
        />
      </div>
      <small className="text-danger">{validate.message}</small>
    </div>
  );
};

SelectMultiple.propTypes = {
  onChange: PropTypes.func.isRequired,
  //   name : PropTypes.string.isRequired
};
