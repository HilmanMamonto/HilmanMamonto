import React from "react";
import LayoutTwoSide from "./components/LayoutTwoSide";
import PlaceDesc from "./components/PlaceDesc";
import ProductPictures from "./components/ProductPictures";
import ProductTittle from "./components/ProductTittle";
import Reviews from "./components/Reviews";
import _dataProduct from "json/products.json";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductSelected = () => {
  const location = useLocation();
  const dataProduct = _dataProduct.filter(
    (item) => "?product=" + item.id === location.search
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return dataProduct.map((item, i) => (
    <div
      className="container pt-4 mb-5"
      style={{ marginTop: "80px" }}
      key={"ps" + i}
    >
      <ProductTittle {...item} />
      <ProductPictures {...item} />
      <LayoutTwoSide {...item} />
      <Reviews {...item} />
      <PlaceDesc />
    </div>
  ));
};

export default ProductSelected;
