import Header from "containers/Header";
import Hero from "containers/Hero/Hero";
import React, { useEffect } from "react";
import _dataProductList from "json/product-list.json";
import ProductListLayout from "containers/Product/ProductList/components/Layout";
import NavMobile from "containers/NavMobile/NavMobile";
import { useState } from "react";
import useMediaQuery from "components/utility/mediaQuery";
import HeaderMobile from "containers/HeaderMobile/HeaderMobile";

export const Home = () => {
  // const isXSmall = useMediaQuery("xs");
  // const isSmall = useMediaQuery("sm");
  // const isMedium = useMediaQuery("md");
  // const largeOnly = useMediaQuery("lg");

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <Header className="d-none d-md-block" type="home" hasCategories />
      <HeaderMobile className="d-sm-flex d-md-none" hasCategories />
      <Hero style={{ paddingTop: "80px" }} className="mb-4 mt-4" />
      <ProductListLayout data={_dataProductList} />
      <NavMobile className="d-sm-flex d-md-none" />
    </>
  );
};
