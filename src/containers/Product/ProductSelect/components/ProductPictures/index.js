import SliderCard from "components/DataDisplay/SliderCard/SliderCard";
import React from "react";
import "./styles.scss";

const ProductPictures = ({ imagesUrl }) => {
  return (
    <div className="product-pictures">
      <SliderCard className="d-flex d-sm-flex d-md-none">
        {imagesUrl.map((item, i) => {
          return <img key={i} src={item.url} alt=""></img>;
        })}
      </SliderCard>
      <div className="product-pictures-wrapper">
        <div className="pp-left">
          <img className="pp-left" src={imagesUrl[0].url} alt="" />
        </div>
        <div className="pp-right">
          <img src={imagesUrl[1].url} alt="" />
        </div>
        <button className="btn-see-all-photos">see all photos</button>
      </div>
    </div>
  );
};

export default ProductPictures;
