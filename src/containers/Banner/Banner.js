import { ANIMATE_BOUNCE, ANIMATE_HEARTBEAT } from "assets/animate/animate";
import IconButton from "components/IconButton/IconButton";
import Icons from "components/Icons";
import Button from "components/Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Banner = () => {
  return (
    <div className="banner vh-100 row row-cols-md-2 row-cols-1">
      <div className="d-md-flex d-none py-5 flex-column align-items-center justify-content-between gap-5 bg-primary">
        <div className="d-flex w-100 px-5">
          <IconButton as="link" to="/" size="xlarge" variant="logo-white" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h1
            style={{ fontSize: "3.5rem" }}
            className="text-white text-center  px-lg-5 mx-lg-4 mb-5"
          >
            Open World For Journeys
          </h1>
          <Button label="Join" justifyContent="center" color="secondary" />
        </div>
        <span>
          <IconButton
            className={"bn-icon " + ANIMATE_BOUNCE}
            variant="arrow-down-white"
          />
        </span>
      </div>

      <div className="bn-right px-0 position-relative">
        <Link to="/">
          <Icons
            className="position-absolute d-block d-md-none left-0 px-3 mt-5"
            size="xlarge"
            variant="logo-white"
          />
        </Link>
        <img className="img-banner vh-100" src="/banner.jpg" alt=""></img>
        <div className="bn-r-bottom d-block d-md-none position-absolute bottom-0 bg-white w-100">
          <div className="position-relative w-100 d-flex flex-column d-md-none ">
            <span className="bn-r-b-top position-absolute" />
            <div style={{ zIndex: 1 }} className="bg-white pb-4">
              <h1 className=" px-3 text-primary fw-semibold">
                Open World For
                <br /> Journeys
              </h1>
              <span className="d-flex justify-content-center w-100">
                <IconButton
                  className={"bn-icon-right " + ANIMATE_HEARTBEAT}
                  variant="arrow-down"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
