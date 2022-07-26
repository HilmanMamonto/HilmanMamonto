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

const Slide = ({
  children = <span>add child</span>,
  className,
  interval = "child",
  gap = 2,
  buttonClass = "",
}) => {
  const ref = useRef(null);

  const [childWidth, setChildWidth] = useState(0);
  const [width, setWidth] = useState();
  const [scrollPos, setScrollPos] = useState(0);

  const classes = {
    container: "slide d-flex align-items-center " + className,
  };

  useEffect(() => {
    if (ref) setChildWidth(ref.current.children[0].offsetWidth);
    if (ref) setWidth(ref.current.offsetWidth);
  }, [ref]);

  const handleClick = (btn) => {
    const intervals = {
      child: childWidth,
      sm: 200,
      md: 400,
      lg: 600,
    };
    if (btn === "next" && scrollPos < width) {
      ref.current.scrollLeft += intervals[interval];
      setScrollPos((p) => p + intervals[interval]);
    }
    if (btn === "prev" && scrollPos > 0) {
      ref.current.scrollLeft -= intervals[interval];
      setScrollPos((p) => p - intervals[interval]);
    }
  };

  return (
    <div className={classes.container}>
      <ButtonRounded
        hidden={scrollPos === 0}
        type="button"
        onClick={() => handleClick("prev")}
        className={"btn-arrow left ms-2 " + buttonClass}
        variant="prev"
      />
      <div ref={ref} className={"sl-items h-100 w-100 d-flex " + gaps[gap]}>
        {children}
      </div>
      <ButtonRounded
        type="button"
        hidden={scrollPos >= width}
        onClick={() => handleClick("next")}
        id="next"
        className={"btn-arrow right me-2 " + buttonClass}
        variant="next"
      />
    </div>
  );
};

Slide.propTypes = {};

export default Slide;
