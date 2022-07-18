import Header from "containers/Header";
import ProductSelected from "containers/Product/ProductSelect";
import NavBottom from "containers/Product/ProductSelect/components/NavBottom/NavBottom";
import React, { useEffect } from "react";
import { useState } from "react";

const ProductSelectedPage = () => {
  const [scrollPos, setScrollPos] = useState();

  const classes = {
    shadow: scrollPos > 40 ? "shadow-sm " : "",
    border: scrollPos < 40 ? "border-bottom " : "",
  };

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="position-relative">
      <Header
        hidden={window.scrollY === 200}
        className={classes.shadow + classes.border}
      />
      <ProductSelected />
      <NavBottom hidden={window.scrollY < 3212} />
    </div>
  );
};

export default ProductSelectedPage;
