import React from "react";
import "./styles.scss";
import Button from "components/Button";

const ProductPictures = ({ imagesUrl, sumOfPictures }) => {
  if (sumOfPictures > 1) {
    return (
      <div id="product-pictures">
        <div className="product-picture-left">
          <img src={imagesUrl[0].url} alt="" />
        </div>
        <div className="product-picture-right">
          <img src={imagesUrl[1].url} alt="" />
          <Button
            className="btn-see-all-photos"
            type="a"
            href="/"
            textWhite
            stye={{ fontSize: "14px" }}
            children={"see all photos"}
          />
        </div>
      </div>
    );
  }
};

export default ProductPictures;
