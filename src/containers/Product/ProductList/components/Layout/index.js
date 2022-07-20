import Button from "components/Button";
import React from "react";
import ProductCard from "../Card";
import "./styles.scss";

const ProductListLayout = ({ className, data }) => {
  return (
    <div className={"container " + className} style={{ marginTop: "160px" }}>
      <div id="product-grid">
        {data.map((item, i) => {
          return (
            <ProductCard
              id={item.id}
              key={"product-list" + i}
              tittle={item.tourName}
              rate={4.8}
              location={item.location}
              date={item.availibility}
              budget={item.budget}
              imagesUrl={item.imagesUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListLayout;
