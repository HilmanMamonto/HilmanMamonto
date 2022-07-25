import Avatar from "components/Avatar/Avatar";
import React from "react";

const Reviewer = ({ reviews = [] }) => {
  return (
    <div className="reviewer row row-cols-sm-1 row-cols-md-2">
      {reviews.map((item, i) => {
        return (
          <div key={i} className="item mb-4">
            <div className="profile d-flex gap-3 align-items-center mb-2">
              <Avatar src={item.imgUrl} size="large" />
              <div className="d-flex flex-column">
                <label className="fw-semibold">{item.name}</label>
                <span>{item.date}</span>
              </div>
            </div>
            <div className="profile d-flex gap-3 align-items-center mb-2">
              <label>{item.review}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviewer;
