import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.scss";

const InputImage = ({ onChange, className, hidden }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (value) onChange(value);
  }, [value]);

  const handleChange = (e) => {
    if (e.target.files.length != 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setValue(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const classContainer = "input-image-wrapper " + className;
  return (
    <div hidden={hidden} className={classContainer}>
      <input
        type="file"
        className="input-image"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
    </div>
  );
};

InputImage.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default InputImage;
