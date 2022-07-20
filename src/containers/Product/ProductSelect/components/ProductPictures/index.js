import React from "react";
import "./styles.scss";
import Button from "components/Button";
import Slide from "components/DataDisplay/Slide/Slide";

const ProductPictures = ({ imagesUrl, sumOfPictures }) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className="product-pictures">
      <Slide gap={0} className="pp-mobile d-flex d-sm-flex d-md-none">
        {arr.map((item, i) => {
          return <img key={i} src={imagesUrl[0].url} alt=""></img>;
        })}
      </Slide>
      <div className="product-pictures-wrapper">
        <div className="pp-left">
          <img className="pp-left" src={imagesUrl[0].url} alt="" />
        </div>
        <div className="pp-right">
          <img src={imagesUrl[1].url} alt="" />
        </div>
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
};

export default ProductPictures;
