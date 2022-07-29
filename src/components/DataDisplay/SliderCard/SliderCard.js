import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./styles.scss";

const SliderCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const [btnActivate, setBtnActivate] = useState(false);
  const [touch, setTouch] = useState({ startingX: 0, movingX: 0 });
  const [scroll, setScroll] = useState({
    scrollLeft: undefined,
    scrollWidth: undefined,
    offsetWidth: undefined,
    current: 0,
  });

  const handleTouchStart = (e) => {
    const { scrollLeft } = e.target;
    setScroll((p) => ({ ...p, scrollLeft: scrollLeft }));
    setTouch((p) => ({ ...p, startingX: e.touches[0].clientX }));
  };

  const handleTouchMove = (e) => {
    setTouch((p) => ({ ...p, movingX: e.touches[0].clientX }));
  };

  const handleTouchEnd = () => {
    if (touch.startingX + 10 < touch.movingX) {
      handlePrev();
    } else if (touch.startingX - 10 > touch.movingX) {
      handleNext();
    }
  };

  const handleNext = () => {
    const counter = ref.current.scrollLeft + ref.current.offsetWidth;
    ref.current.scrollTo(counter, 0);
    setScroll((p) => ({ ...p, scrollLeft: counter }));
  };

  const handlePrev = () => {
    const counter = ref.current.scrollLeft - ref.current.offsetWidth;
    ref.current.scrollTo(counter, 0);
    setScroll((p) => ({ ...p, scrollLeft: counter }));
  };

  useEffect(() => {
    if (ref)
      setScroll((p) => ({
        ...p,
        offsetWidth: ref.current.offsetWidth,
        scrollWidth: ref.current.scrollWidth,
        scrollLeft: ref.current.scrollLeft,
      }));
  }, [ref]);

  const classes = {
    btnPrev: scroll.current === 0 ? "opacity-0" : "opacity-100",
    btnNext:
      scroll.current === children.length - 1 ? "opacity-0" : "opacity-100",
  };

  const handleScroll = (e) => {
    const { scrollLeft, offsetWidth } = e.target;
    setScroll((p) => ({
      ...p,
      offsetWidth: offsetWidth,
      current: scrollLeft / offsetWidth,
    }));
  };

  return (
    <div
      onMouseOver={() => setBtnActivate(true)}
      onMouseOut={() => setBtnActivate(false)}
      className={"mobile-slider position-relative " + className}
    >
      <ButtonRounded
        hidden={btnActivate === false}
        onClick={handlePrev}
        variant="prev"
        className={"position-absolute start-0 top-50 ms-3 " + classes.btnPrev}
      />
      <ButtonRounded
        hidden={btnActivate === false}
        onClick={handleNext}
        variant="next"
        className={"position-absolute end-0 top-50 me-3 " + classes.btnNext}
        size="medium"
      />
      <div
        ref={ref}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        className="ms-items"
      >
        {children}
      </div>
      <div className="position-absolute bottom-0 mb-4 left-0 ms-dots">
        {children.map((item, i) => {
          const activate = scroll.current === i ? "active" : "";
          return <span key={i} className={"ms-dot " + activate}></span>;
        })}
      </div>
    </div>
  );
};

export default SliderCard;
