import { useState } from "react";

export const useInputValidate = () => {
  const [validate, setValidate] = useState({ validity: "", message: "" });

  const setErrInput = (e) => {
    const { value, type, min, max, minLength, maxLength, required } = e.target;
    const {
      valid,
      valueMissing,
      tooShort,
      tooLong,
      rangeOverflow,
      rangeUnderflow,
    } = e.target.validity;
    const allValidate = {
      valid: { validity: "valid", message: "yupps, your input is correct" },
      invalid: { validity: "valid", message: "" },
      required: { validity: "invalid", message: "This field must to fill" },
      valuaMissing: { validity: "invalid", message: "This field must to fill" },
      tooShort: {
        validity: "invalid",
        message: "invalid, must more than " + minLength + " characters",
      },
      tooLong: {
        validity: "invalid",
        message: "invalid, too long " + maxLength + " characters",
      },
      rangeUnderflow: {
        validity: "invalid",
        message: "Invalid, minimum value is " + min,
      },
      rangeOverFlow: {
        validity: "invalid",
        message: "Invalid, maximum value is " + max,
      },
      regexMisMatch: {
        text: {
          validity: "invalid",
          message:
            "invalid, field must started with (A-Z, a-z, 0-9) and just suport (: , . ) characters.",
        },
      },
    };
    const regexp = {
      text: /^([a-zA-Z\s\d]+)$|^([a-zA-Z\s\d]+)([a-zA-z\s\d.,:]+)$/,
      email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      number: /^([0-9]+)$/,
    };

    if (required) setValidate(allValidate.required);
    if (valid) setValidate(allValidate.valid);
    if (!valid) setValidate(allValidate.invalid);
    if (valueMissing) setValidate(allValidate.valuaMissing);
    // for string
    if (tooShort) setValidate(allValidate.tooShort);
    if (tooLong) setValidate(allValidate.tooLong);
    // for number
    if (rangeUnderflow) setValidate(allValidate.rangeUnderflow);
    if (rangeOverflow) setValidate(allValidate.rangeOverFlow);
    // // for regex
    if (value && value.match(regexp[type])) e.target.setCustomValidity("");
    if (!valueMissing && !value.match(regexp[type])) {
      setValidate(allValidate.regexMisMatch[type]);
      e.target.setCustomValidity(allValidate.regexMisMatch[type].message);
    }
  };

  return [validate, setErrInput];
};
