import Header from "containers/Header";
import ProductSelected from "containers/Product/ProductSelect";
import React, { useEffect } from "react";
import { useState } from "react";

const ProductSelectedPage = () => {
  const [scrollPos, setScrollPos] = useState();
  window.scroll(0, 0);

  const classes = {
    shadow: window.scrollY > 40 ? "shadow-sm " : "",
    border: window.scrollY < 40 ? "border-bottom " : "",
  };

  return (
    <>
      <Header className={classes.border + classes.shadow} />
      <ProductSelected />
    </>
  );
};

export default ProductSelectedPage;
