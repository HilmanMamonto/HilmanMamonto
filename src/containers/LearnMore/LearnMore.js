import Button from "components/Button/Button";
import React from "react";

const LearnMore = () => {
  return (
    <div className="position-relative justify-content-center d-flex align-items-center vh-100 py-5 px-3 px-lg-5">
      <img
        style={{ objectFit: "cover" }}
        className="w-100 h-100 rounded"
        src="/banner-learn-more.jpg"
      />
      <div className="position-absolute text-center">
        <h1 className="text-white mb-3 w-100 text-center">
          Need Help?, Need Something?
        </h1>
        <Button
          className="mx-auto"
          label="Learn More"
          size="large"
          color="secondary"
          shadow="medium"
        />
      </div>
    </div>
  );
};

export default LearnMore;
