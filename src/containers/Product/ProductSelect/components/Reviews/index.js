import React from "react";
import Chart from "./components/Chart/Chart";
import Reviewer from "./components/Reviewer/Reviewer";
import Icons from "components/Icons";

const Reviews = (props) => {
  return (
    <div className="position border-top border-bottom pt-5">
      <div className="d-flex gap-4">
        <div className="d-flex align-items-center gap-2">
          <Icons variant="star-fill" size="large" />
          <h4 className="mb-0">4.8</h4>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Icons variant="person" size="large" />
          <h4 className="mb-0">3 reviews</h4>
        </div>
      </div>
      <Chart {...props} />
      <Reviewer {...props} />
    </div>
  );
};

export default Reviews;
