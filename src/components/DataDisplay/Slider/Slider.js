import React from "react";
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

const Slider = ({
  children = <span>add child</span>,
  className,
  interval = "child",
  gap = 2,
  buttonClass = "",
}) => {
  const ref = useRef(null);

  const [scroll, setScroll] = useState({
    scrollLeft: 0,
    childWidth: 0,
    scrollWidth: 0,
    offsetWidth: 0,
  });

  const classes = {
    container: "slide d-flex align-items-center " + className,
  };

  useEffect(() => {
    if (ref)
      setScroll({
        ...scroll,
        scrollWidth: ref.current.scrollWidth,
        childWidth: ref.current.children[0].offsetWidth,
        offsetWidth: ref.current.offsetWidth,
      });
  }, [ref]);

  const handleClick = (btn) => {
    const intervals = {
      child: scroll.childWidth,
      sm: 200,
      md: 400,
      lg: 600,
    };
    if (btn === "next") {
      const currentScroll = (ref.current.scrollLeft += intervals[interval]);
      ref.current.scrollLeft += intervals[interval];
      let result = 0;
      if (currentScroll + scroll.offsetWidth >= ref.current.scrollWidth) {
        result = ref.current.scrollWidth;
      } else {
        result = currentScroll;
      }
      setScroll({
        ...scroll,
        scrollLeft: result,
      });
    }
    if (btn === "prev") {
      ref.current.scrollLeft -= intervals[interval];
      let result = 0;
      if (ref.current.scrollLeft - intervals[interval] < 0) {
        result = 0;
      } else {
        result = ref.current.scrollLeft - intervals[interval];
      }
      setScroll({ ...scroll, scrollLeft: result });
    }
  };

  return (
    <div className={classes.container}>
      <ButtonRounded
        hidden={scroll.scrollLeft === 0}
        type="button"
        onClick={() => handleClick("prev")}
        className={"d-none d-md-flex btn-arrow left ms-2 " + buttonClass}
        variant="prev"
      />
      <div ref={ref} className={"sl-items h-100 w-100 d-flex " + gaps[gap]}>
        {children}
      </div>
      <ButtonRounded
        type="button"
        hidden={scroll.scrollLeft + scroll.offsetWidth >= scroll.scrollWidth}
        onClick={() => handleClick("next")}
        id="next"
        className={"d-none d-md-flex btn-arrow right me-2 " + buttonClass}
        variant="next"
      />
    </div>
  );
};

export default Slider;
