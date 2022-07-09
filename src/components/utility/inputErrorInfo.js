import { useState } from "react";

export const useError = () => {
  const [validate, setValidate] = useState({ validity: "", info: "" });

  const setInputError = (e) => {
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
      valid: { validity: "valid", info: "" },
      invalid: { validity: "valid", info: "" },
      required: { validity: "invalid", info: "This field must to fill" },
      valuaMissing: { validity: "invalid", info: "This field must to fill" },
      tooShort: {
        validity: "invalid",
        info: "invalid, must more than " + minLength + " characters",
      },
      tooLong: {
        validity: "invalid",
        info: "invalid, too long " + maxLength + " characters",
      },
      rangeUnderFlow: {
        validity: "invalid",
        info: "Invalid, minimum value is " + min,
      },
      rangeOverFlow: {
        validity: "invalid",
        info: "Invalid, maximum value is " + max,
      },
      regexMisMatch: {
        text: {
          validity: "invalid",
          info: "invalid, field must started with (A-Z, a-z, 0-9) and just suport (: , . ) characters.",
        },
      },
    };
    const regexp = {
      text: /^([a-zA-Z\s\d]+)$|^([a-zA-Z\s\d]+)([a-zA-z\s\d.,:]+)$/,
    };

    if (required) setValidate(allValidate.required);
    if (valid) setValidate(allValidate.valid);
    if (!valid) setValidate(allValidate.invalid);
    if (valueMissing) setValidate(allValidate.valuaMissing);
    // for string
    if (tooShort) setValidate(allValidate.tooShort);
    if (tooLong) setValidate(allValidate.tooLong);
    // for number
    if (rangeUnderflow) setValidate(allValidate.rangeOverFlow);
    if (rangeOverflow) setValidate(allValidate.rangeOverFlow);
    // // for regex
    if (value && value.match(regexp[type])) e.target.setCustomValidity("");
    if (!valueMissing && !value.match(regexp[type])) {
      setValidate(allValidate.regexMisMatch[type]);
      e.target.setCustomValidity(allValidate.regexMisMatch[type].info);
    }

    if (type === "text" && value.length >= maxLength) {
      setValidate(allValidate.tooLong);
      const to = setTimeout(() => {
        setValidate(allValidate.valid);
        clearTimeout(to);
      }, 2000);
    }
  };

  return [validate, setInputError];
};
