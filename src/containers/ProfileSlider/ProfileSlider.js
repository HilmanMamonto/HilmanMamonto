import Slide from "components/DataDisplay/Slide/Slide";
import React from "react";
import "./styles.scss";

const ProfileSlider = () => {
  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <div className="profile-slider py-5">
      <h1 className="text-center fw-bold mb-5">
        You can make <br /> awesome journies anywhere
      </h1>

      <Slide buttonClass={"ps-btn"} gap={3} className="ms-3 ms-lg-5 ps-items">
        {arr.map((item) => {
          return (
            <figure
              key={item}
              className="ps-item d-inline-flex flex-column gap-3"
            >
              <img></img>
              <label className="mb-2 fs-4">
                “Beautiful day on my life is when I can make other people happy”
              </label>
              <span className="fs-1">Ahmed</span>
            </figure>
          );
        })}
      </Slide>
    </div>
  );
};

export default ProfileSlider;
