import React from "react";
import ProductCard from "./Card/Card";

const ProductList = ({ data, className }) => {
  return (
    <div className={"container " + className} style={{ marginTop: "160px" }}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {data.map((item, i) => {
          return (
            <ProductCard
              id={item.id}
              key={"product-list" + i}
              className="mb-4"
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

export default ProductList;
