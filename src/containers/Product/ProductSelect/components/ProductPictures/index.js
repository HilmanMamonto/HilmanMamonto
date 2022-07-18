import React from "react";
import "./styles.scss";
import Button from "components/Button";

const ProductPictures = ({ imagesUrl, sumOfPictures }) => {
  if (sumOfPictures > 1) {
    return (
      <div className="product-pictures">
        <div className="pp-left">
          {/* <img className="pp-left" src={imagesUrl[0].url} alt="" /> */}
        </div>
        {/* <div className="pp-right">
          <img src={imagesUrl[1].url} alt="" />
        </div> */}

        <Button
          className="btn-see-all-photos"
          type="a"
          href="/"
          textWhite
          stye={{ fontSize: "14px" }}
          children={"see all photos"}
        />
      </div>
    );
  }
};

export default ProductPictures;
