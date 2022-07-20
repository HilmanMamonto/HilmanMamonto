import Header from "containers/Header";
import React from "react";
import _dataProductList from "json/product-list.json";
import ProductListLayout from "containers/Product/ProductList/components/Layout";
import NavMobile from "containers/NavMobile/NavMobile";
import { useScrollPos } from "components/utility/scrollPos";

export const Home = () => {
  window.scroll(0, 0);

  return (
    <>
      <Header type="home" hasCategories />
      <ProductListLayout className={"pt-3"} data={_dataProductList} />
      <NavMobile className="d-sm-flex d-md-none" />
      {/* <Fotter /> */}
    </>
  );
};
