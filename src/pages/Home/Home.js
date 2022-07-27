import Header from "containers/Header";
import React from "react";
import _dataProductList from "json/product-list.json";
import NavMobile from "containers/NavMobile/NavMobile";
import ProductList from "containers/Product/ProductList";

export const Home = () => {
  return (
    <>
      <Header type="home" hasCategories />
      <ProductList className={"pt-3"} data={_dataProductList} />
      <NavMobile className="d-sm-flex d-md-none" />
      {/* <Fotter /> */}
    </>
  );
};
