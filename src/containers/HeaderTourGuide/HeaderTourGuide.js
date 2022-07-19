import Button from "components/NewButton/Button";
import React from "react";

const HeaderTourGuide = ({ hidden }) => {
  return (
    <header
      hidden={hidden}
      style={{ zIndex: 2 }}
      className="position-fixed top-0 w-100"
    >
      <div className="d-none d-md-flex justify-content-between align-items-center bg-white py-4 shadow-sm px-3 px-md-5">
        HeaderTourGuide
        <Button
          className="px-4 py-2"
          color="secondary"
          size="large"
          shadow="small"
          label="Join"
        />
      </div>
    </header>
  );
};

export default HeaderTourGuide;
