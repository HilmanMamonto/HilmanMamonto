import React from "react";
import PropTypes from "prop-types";
import ProductListLayout from "./components/Layout";

const ProductList = (props) => {
  const arrClass = [props.className];

  return <ProductListLayout data={props.data} className={arrClass.join(" ")} />;
};

ProductList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  isActitve: PropTypes.bool,
};

export default ProductList;
