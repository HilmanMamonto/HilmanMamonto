import Button from "components/NewButton/Button";
import React from "react";
import "./styles.scss";

const NavBottom = ({ hidden }) => {
  return (
    <div
      hidden={hidden}
      style={{ zIndex: 2 }}
      className="ps-nav-bottom border-top w-100 position-sticky bottom-0 bg-white"
    >
      <div className="container align-items-center d-flex justify-content-between pb-4">
        <div className="d-flex h-100 gap-4 gap-md-5">
          <a className="py-4" href="#">
            Photos
          </a>
          <a className="py-4" href="#">
            Amenities
          </a>
          <a className="py-4" href="#">
            Vacations
          </a>
          <a className="py-4" href="#">
            Reviews
          </a>
        </div>
        <Button
          className="px-4"
          size="large"
          color="secondary"
          shadow="medium"
          label="Book Now"
        />
      </div>
    </div>
  );
};

export default NavBottom;
