import React from "react";
import LayoutTwoSide from "./components/LayoutTwoSide";
import PlaceDesc from "./components/PlaceDesc";
import ProductPictures from "./components/ProductPictures";
import ProductTittle from "./components/ProductTittle";
import Reviews from "./components/Reviews";
import _dataProduct from "json/products.json";
import { useParams } from "react-router-dom";

const ProductSelected = () => {
  let { id } = useParams();
  const dataProduct = _dataProduct.filter((item) => item.id === id);

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
