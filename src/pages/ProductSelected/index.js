import { useScrollPos } from "components/utility/scrollPos";
import Header from "containers/Header";
import ProductSelected from "containers/Product/ProductSelect";
import NavBottom from "containers/Product/ProductSelect/components/NavBottom/NavBottom";
import React from "react";

const ProductSelectedPage = () => {
  const { scrollPos } = useScrollPos();

  console.log(scrollPos);
  const classes = {
    shadow: scrollPos >= 28 ? "shadow-sm" : "",
    border: scrollPos < 25 ? "border-bottom" : "",
  };

  return (
    <div className="position-relative">
      <Header
        hidden={scrollPos > 200}
        className={classes.shadow + classes.border}
      />
      <ProductSelected />
      <NavBottom hidden={scrollPos < 2461} />
    </div>
  );
};

export default ProductSelectedPage;
