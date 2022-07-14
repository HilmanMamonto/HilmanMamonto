import React from "react";
import "./styles.scss";

const Hero = ({ className = "", style }) => {
  return (
    <div style={style} className={"container-md hero " + className}>
      <img src="hero.jpg" alt="" />
    </div>
  );
};

export default Hero;
