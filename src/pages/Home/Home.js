import Header from "containers/Header";
import React from "react";
import _dataProductList from "json/product-list.json";
import ProductListLayout from "containers/Product/ProductList/components/Layout";
import NavMobile from "containers/NavMobile/NavMobile";
import { useEffect } from "react";

export const Home = () => {
  window.scroll(0, 0);

  return (
    <>
      <Header type="home" hasCategories />
      <ProductListLayout className={"mt-5 pt-5"} data={_dataProductList} />
      <NavMobile className="d-sm-flex d-md-none" />
      {/* <Fotter /> */}
    </>
  );
};
