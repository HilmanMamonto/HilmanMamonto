import React from "react";
import PropTypes from "prop-types";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import "./styles.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const gaps = {
  0: "gap-0 ",
  1: "gap-1 ",
  2: "gap-2 ",
  3: "gap-3 ",
  4: "gap-4 ",
  5: "gap-5 ",
};

const SliderCard = ({
  children = <span>add child</span>,
  className,
  interval = "child",
  gap = 2,
  buttonClass = "",
  style = {},
  onChange = () => "",
}) => {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [current, setCurrent] = useState(1);
  const [length, setLength] = useState(0);

  const btnActivate = {
    prev: current === 1 ? "opacity-0 " : "opacity-100 ",
    next: current === length ? "opacity-0 " : "opacity-100 ",
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
    console.log(width * current);
    if (btn === "next" && current < length - 1) {
      const count = width * current;
      ref.current.scrollLeft = count;
      setCurrent(current + 1);
    }
    if (btn === "prev" && current > 1) {
      // const count = width * length - current * width;
      // ref.current.scrollLeft = count;
      // setCurrent(current - 1);
    }
  };

  return (
    <div style={style} className={classes.container}>
      <ButtonRounded
        type="button"
        onClick={() => handleClick("prev")}
        className={classes.btnPrev}
        variant="prev"
      />
      <div ref={ref} className={"sl-items h-100 w-100 d-flex " + gaps[gap]}>
        {children}
      </div>
      <ButtonRounded
        type="button"
        onClick={() => handleClick("next")}
        id="next"
        className={classes.btnNext}
        variant="next"
      />
    </div>
  );
};

export default SliderCard;
