import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./styles.scss";

const SliderCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const [btnActivate, setBtnActivate] = useState(false);
  const [touch, setTouch] = useState({ startingX: 0, movingX: 0 });
  const [index, setIndex] = useState(0);

  const handleTouchStart = (e) => {
    setTouch((p) => ({ ...p, startingX: e.touches[0].clientX }));
  };

  const handleTouchMove = (e) => {
    setTouch((p) => ({ ...p, movingX: e.touches[0].clientX }));
  };

  const handleTouchEnd = () => {
    if (touch.startingX + 20 < touch.movingX) {
      handlePrev();
    } else if (touch.startingX - 20 > touch.movingX) {
      handleNext();
    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    ref.current.scrollTo(index * ref.current.offsetWidth, 0);
  };

  const handleNext = () => {
    if (index < children.length - 1) {
      const counter = (index + 1) * ref.current.offsetWidth;
      ref.current.scrollTo(counter, 0);
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      const counter = (index - 1) * ref.current.offsetWidth;
      ref.current.scrollTo(counter, 0);
      setIndex(index - 1);
    }
  };

  const classes = {
    btnPrev: index === 0 ? "opacity-0" : "opacity-100",
    btnNext: index === children.length - 1 ? "opacity-0" : "opacity-100",
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
        className="ms-items"
      >
        {children}
      </div>
      <div className="position-absolute bottom-0 mb-4 left-0 ms-dots">
        {children.map((item, i) => {
          const activate = index === i ? "active" : "";
          return <span key={i} className={"ms-dot " + activate}></span>;
        })}
      </div>
    </div>
  );
};

export default SliderCard;
