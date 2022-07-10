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

const InputCheckBox = ({ data, label, className }) => {
  const [toggle, setToggle] = useState(false);

  const ref = useRef();

  const classes = {
    container: "input-select-checkbox " + className,
    wrapper:
      "wrapper d-flex justify-content-between align-items-center border align-items center py-2 px-3 rounded ",
    icon: toggle ? "ic active" : "ic",
    items: toggle
      ? "items d-flex flex-column gap-1 items active"
      : "items d-flex flex-column gap-1 items",
    item: "d-flex justify-content-between align-items-center",
  };

  const handleClickOutside = (e) => {
    if (ref && !ref.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const items = data.map((item, i) => {
    return (
      <div className={classes.item} key={"option-" + i}>
        <span>{item}</span>
        <input name={item} type="checkbox" value={item} />
      </div>
    );
  });

  return (
    <div ref={ref} className={classes.container}>
      <label className="mb-1">{label}</label>
      <div className={classes.wrapper} onClick={() => setToggle(!toggle)}>
        <span>{0}</span>
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
    </div>
  );
};

InputCheckBox.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default InputCheckBox;
