import React from "react";
import PropTypes from "prop-types";
import "../main_styles.scss";
import "./styles.scss";
import "../main_styles.scss";
import Icon from "components/Icons";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "components/NewButton/Button";
import { useInputValidate } from "components/utility/inputErrorInfo";

const InputCheckBox = ({
  data,
  label,
  name,
  required,
  className,
  onChange,
}) => {
  const [toggle, setToggle] = useState(false);
  const [values, setValues] = useState([]);
  const [validate, setValidate] = useInputValidate();

  const ref = useRef();

  const classes = {
    container: "input-select-checkbox " + className,
    wrapper:
      "wrapper d-flex justify-content-between align-items-center border align-items center py-2 px-3 rounded ",
    icon: toggle ? "ic active" : "ic",
    items: toggle
      ? "items bg-white w-100 px-3 py-2 pb-3 d-flex border flex-column gap-1 items rounded active"
      : "items bg-white w-100 px-3 py-2 pb-3 d-flex border flex-column gap-1 items rounded ",
    item: "d-flex justify-content-between align-items-center ",
    invalid: "text-danger",
  };

  const handleClickOutside = (e) => {
    if (ref && !ref.current.contains(e.target)) setToggle(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, checked, type } = e.target;

    if (checked) setValues([...values, name]);
    if (!checked) setValues(values.filter((item) => item !== name));

    onChange(e);
    setValidate(e);
    console.log(type);
  };

  const items = data.map((item, i) => {
    return (
      <div className={classes.item} key={"option-" + i}>
        <span>{item}</span>
        <input
          name={item}
          onChange={handleChange}
          type="checkbox"
          value={item}
        />
      </div>
    );
  });

  const handleInvalid = (e) => {
    setValidate(e);
    // if (values.length > 1) {
    //   setValidate(allValidate.underFlow);
    //   e.target.setCustomValidity(allValidate.underFlow);
    // }
  };

  const placeHolder =
    (values.length > 1 && " items selected") ||
    (values.length === 1 && " item selected") ||
    (values.length === 0 && "Select min 5 items");

  return (
    <div ref={ref} className={classes.container} required>
      <label className="mb-1">
        {label}
        {required && " *"}
      </label>
      <div className={classes.wrapper} onClick={() => setToggle(!toggle)}>
        <div>
          <input
            className="read-only"
            readOnly
            hidden={values.length === 0}
            value={values.length > 0 ? values.length : ""}
            name="select-checkmark"
            onInvalid={handleInvalid}
            onChange={handleChange}
            required
            min={2}
          />
          <span>{placeHolder}</span>
        </div>
        <Icon variant="arrow-up" className={classes.icon} />
      </div>
      <div className={classes.items}>
        {items}
        <Button
          className="mt-3"
          shadow="small"
          fullWidth
          label="sellect all"
          justifyContent="center"
        />
      </div>
      <small className={classes[validate.validity]}>{validate.message}</small>
    </div>
  );
};

InputCheckBox.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputCheckBox;
