import Slider from "components/DataDisplay/Slider/Slider";
import React from "react";
import "./styles.scss";
import tourGuideReviews from "json/tourGuideReviews.json";

const ProfileSlider = () => {
  return (
    <div className="profile-slider py-5">
      <h1 className="text-center fw-bold mb-5">
        You can make <br /> awesome journies anywhere
      </h1>

      <Slider buttonClass={"ps-btn"} gap={3} className="ms-3 ms-lg-5 ps-items">
        {tourGuideReviews.map((item, i) => {
          return (
            <figure key={i} className="ps-item d-inline-flex flex-column gap-3">
              <img style={{ objectFit: "cover" }} src={item.imgUrl}></img>
              <label className="mb-2 fs-4">“{item.review}”</label>
              <div className="d-flex justify-content-between align-items-center pe-4">
                <span className="fs-1">{item.name}</span>
                <small className="text-black-50">- {item.country}</small>
              </div>
            </figure>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProfileSlider;
