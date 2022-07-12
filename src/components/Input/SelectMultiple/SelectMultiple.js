import { useInputValidate } from "components/utility/inputErrorInfo";
import React from "react";
import { useState } from "react";
import "./styles.scss";

export const SelectMultiple = () => {
  const [values, setValues] = useState([]);
  const [validate, setValidate] = useInputValidate();

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

  const items = ["sun screen", "food", "watter"];

  const display =
    values.length > 1
      ? values.length + "items selected"
      : values.length === 1
      ? values.length + "item selected"
      : "select min 5 items";

  const handleChange = (e) => {
    console.log("changess");
  };

  return (
    <div className="d-flex select-control flex-column">
      <label htmlFor="">Amenities</label>
      <span className="border py-1 px-2 rounded">{display}</span>
      <input min={5} onChange={handleChange} required value={2} />
      <select multiple>
        {items.map((item) => {
          return (
            <option
              key={item}
              className={values.includes(item) ? "bg-light" : ""}
              onClick={handleClick}
              value={item}
            >
              {item}
            </option>
          );
        })}
      </select>
      {validate.validity}
    </div>
  );
};
