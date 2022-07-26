import IconButton from "components/IconButton/IconButton";
import InputImage from "components/Input/InputImage/InputImage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.scss";
import "animate.css";
import { useInputValidate } from "components/utility/inputErrorInfo";
import Icons from "components/Icons";
import { ANIMATE_BOUNCEIN } from "assets/animate/animate";
import { useRef } from "react";

const icons = {
  valid: <Icons className={ANIMATE_BOUNCEIN} variant="checkmark" />,
  invalid: <Icons className={ANIMATE_BOUNCEIN} variant="warning" />,
};

const Images = () => {
  const store = JSON.parse(localStorage.getItem("images"));
  const initial = store ? store : [];
  const [images, setImages] = useState(initial);
  const [validate, setValidate] = useInputValidate();
  const ref = useRef();

  const handleDelete = (i) => {
    const filter = images.filter((item, index) => index != i);
    setImages(filter);
  };

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify([...images]));
  }, [images]);

  const items = images.map((item, i) => {
    return (
      <div
        key={"ap-image" + i}
        className="ap-image-wrapper animate__animated animate__fadeInUp"
        style={{ animationDelay: 0.1 * i + "s" }}
      >
        <img className="ap-image" src={item} />
        <IconButton
          onClick={() => handleDelete(i)}
          variant="close-white"
          size="xlarge"
          className="btn-close-ap-image"
        />
      </div>
    );
  });

  const handleChange = (e) => {
    setValidate(e);
  };

  useEffect(() => {
    setValidate({ target: ref.current });
  }, [images]);

  const classes = {
    invalid: "text-danger",
    valid: "text-body",
  };

  return (
    <div>
      <div className="ap-image-list">{items}</div>
      <input
        ref={ref}
        onInvalid={(e) => setValidate(e)}
        className="p-0"
        type="number"
        min={3}
        style={{ height: "0px", border: "none" }}
        required
        value={images.length}
        onChange={handleChange}
      />
      <InputImage
        hidden={images.length === 4}
        onChange={(data) => setImages([...images, data])}
      />
      <small
        className={
          "d-flex justify-content-between align-items-center mt-1 " +
          classes[validate.validity]
        }
      >
        {validate.message} {icons[validate.validity]}
      </small>
    </div>
  );
};

export default Images;
