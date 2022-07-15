import Header from "containers/Header";
import Hero from "containers/Hero/Hero";
import React, { useEffect } from "react";
import _dataProductList from "json/product-list.json";
import ProductListLayout from "containers/Product/ProductList/components/Layout";
import NavMobile from "containers/NavMobile/NavMobile";
import { useState } from "react";

export const Home = () => {
  const [media, setMedia] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    setMedia(window.innerWidth);
  });

  return (
    <>
      <Header type="home" hasCategories />
      <Hero style={{ paddingTop: "80px" }} className="mb-4 mt-4" />
      <ProductListLayout data={_dataProductList} />
      {media === 500 && <NavMobile />}
    </>
  );
};
