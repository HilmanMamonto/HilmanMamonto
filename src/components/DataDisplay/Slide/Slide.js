import React from "react";
import PropTypes from "prop-types";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import "./styles.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Slide = ({
  children = <span>add child</span>,
  className,
  interval = "child",
}) => {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  const classes = {
    container: "slide d-flex align-items-center " + className,
  };

  useEffect(() => {
    if (ref) setWidth(ref.current.children[0].offsetWidth);
  }, [ref]);

  const handleClick = (btn) => {
    console.log(ref.current.children[0].offsetWidth);
    const intervals = {
      child: width,
      sm: 200,
      md: 400,
      lg: 600,
    };
    if (btn === "next") ref.current.scrollLeft += intervals[interval];
    if (btn === "prev") ref.current.scrollLeft -= intervals[interval];
  };

  return (
    <div className={classes.container}>
      <ButtonRounded
        onClick={() => handleClick("prev")}
        className="btn-arrow left ms-2"
        variant="prev"
      />
      <div ref={ref} className="sl-items w-100 d-flex gap-2">
        {children}
      </div>
      <ButtonRounded
        onClick={() => handleClick("next")}
        id="next"
        className="btn-arrow right me-2"
        variant="next"
      />
    </div>
  );
};

Slide.propTypes = {};

export default Slide;
