import React from "react";
import PropTypes from "prop-types";
import Icons from "components/Icons";
import { useState } from "react";
import "./styles.scss";
import { useInputValidate } from "components/utility/inputErrorInfo";
import { ANIMATE_BOUNCEIN } from "assets/animate/animate";

const iconMessage = {
  valid: <Icons className={ANIMATE_BOUNCEIN} variant="checkmark" />,
  invalid: <Icons className={ANIMATE_BOUNCEIN} variant="warning" />,
};

const TextArea = ({
  className,
  label,
  name,
  min,
  max,
  minLength,
  maxLength,
  placeholder,
  onChange,
  value,
  required,
  disabled,
}) => {
  const [validate, setErrInput] = useInputValidate();
  const [focus, setFocus] = useState("");

  const handleChange = (e) => {
    setErrInput(e);
    onChange(e);
  };

  const classes = {
    container: "text-area-control " + className,
    wrapper: "px-3 py-2 border rounded " + focus,
    message:
      "d-flex justify-content-between align-items-center border-top pt-1 text-black-50",
    errMessage: { valid: "", invalid: "text-danger" },
    errBorder: { valid: "", invalid: " border-danger" },
  };

  return (
    <div className={classes.container}>
      {label && <label className="mb-1">{label}</label>}
      <div className={classes.wrapper + classes.errBorder[validate.validity]}>
        <textarea
          onInvalid={(e) => setErrInput(e)}
          onFocus={() => setFocus("focus")}
          onBlur={() => setFocus("")}
          name={name}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
        />
        <div hidden={validate.validity === "" || validate.message === ""}>
          <div className={classes.message}>
            <small className={classes.errMessage[validate.validity]}>
              {/* {value !== "" && validate.validity === "valid" && "yupss!!"}
              {validate.validity === "invalid" && validate.message}
              {!validate.validity && required && "required"}
              {!validate.validity &&
                value === "" &&
                !required &&
                "you can added new " + name} */}
              {validate.message}
            </small>
            {iconMessage[validate.validity]}
          </div>
        </div>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default TextArea;
