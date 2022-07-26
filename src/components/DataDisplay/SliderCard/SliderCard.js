import React from "react";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import "./styles.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const SliderCard = ({
  children = <span>add child</span>,
  className = "",
  buttonClass = "",
  style = {},
  onChange = () => "",
}) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [active, setActive] = useState(false);

  const btnActivate = {
    prev: current === 0 ? "opacity-0 " : "opacity-100 ",
    next: current === length - 1 ? "opacity-0 " : "opacity-100 ",
  };

  const classes = {
    container: "slider-card d-flex align-items-center " + className,
    btnPrev: "btn-arrow left ms-2 " + btnActivate.prev + buttonClass,
    btnNext: "btn-arrow right me-2 " + btnActivate.next + buttonClass,
  };

  useEffect(() => {
    if (ref) {
      setWidth(ref.current.children[0].offsetWidth);
      setLength(ref.current.children.length);
    }
  });

  useEffect(() => {
    onChange(current);
  }, [current]);

  const handleClick = (btn) => {
    if (btn === "next" && current < length - 1) {
      const count = current === 0 ? width : (current + 1) * width;
      ref.current.scrollLeft = count;
      setCurrent(current + 1);
    }
    if (btn === "prev" && current >= 1) {
      ref.current.scrollLeft = (current - 1) * width;
      setCurrent(current - 1);
    }
  };

  return (
    <div
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      style={style}
      className={classes.container}
    >
      {length > 1 && active && (
        <ButtonRounded
          type="button"
          onClick={() => handleClick("prev")}
          className={classes.btnPrev}
          variant="prev"
        />
      )}
      <div ref={ref} className={"sl-items d-flex flex-row w-100"}>
        {children}
      </div>
      {length > 1 && active && (
        <ButtonRounded
          type="button"
          onClick={() => handleClick("next")}
          className={classes.btnNext}
          variant="next"
        />
      )}
    </div>
  );
};

export default SliderCard;
