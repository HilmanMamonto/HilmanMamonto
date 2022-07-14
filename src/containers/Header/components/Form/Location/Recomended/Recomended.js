import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import _dataVacStay from "json/vacations-staycations-recomendation.json";
import { changeLocation } from "redux/features/searchInputLocation";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";

const Recomended = ({ className = "" }) => {
  const refItems = useRef(null);
  const dispatch = useDispatch();
  const [vacStay, setVacStay] = useState("Vacations");
  const [dataVacStay, setDataVacStay] = useState(_dataVacStay.vacations);

  useEffect(() => {
    if (vacStay === "Vacations") setDataVacStay(_dataVacStay.vacations);
    if (vacStay === "Staycations") setDataVacStay(_dataVacStay.staycations);
  });

  const handleClick = (param) => {
    if (param === "btn-next") refItems.current.scrollLeft += 700;
    if (param === "btn-prev") refItems.current.scrollLeft -= 700;
  };

  return (
    <div className={"search-location-recomended " + className}>
      <div className="search-location-tittle d-flex gap-4">
        <label
          className={vacStay === "Vacations" ? "active" : ""}
          onClick={() => setVacStay("Vacations")}
        >
          Vacations
        </label>
        <label
          className={vacStay === "Staycations" ? "active" : ""}
          onClick={() => setVacStay("Staycations")}
        >
          Staycations
        </label>
      </div>
      <div className="location-categories">
        <ButtonRounded
          variant="prev"
          className="btn btn-prev"
          onClick={() => handleClick("btn-prev")}
        />
        <ButtonRounded
          variant="next"
          className="btn btn-next"
          onClick={() => handleClick("btn-next")}
        />
        <div className="items gap-3" ref={refItems}>
          {dataVacStay.map((item, i) => {
            return (
              <div
                key={"vr" + i}
                className="item"
                onClick={() =>
                  dispatch(changeLocation(vacStay + " " + item.tittle))
                }
              >
                <figure className="mb-2">
                  <img src={item.image} alt="" />
                </figure>
                <label className="fw-semibold">{item.tittle}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recent">
        <label>Recent</label>
        <div className="items gap-3">
          <button className=" item">
            <figure className="m-0 me-2">
              <img src="" alt="" />
            </figure>
            <div className="details">
              <label>Mountain</label>
              <span className="text-black-50">2 mei 2022</span>
            </div>
          </button>
          <button className="item">
            <figure className="m-0 me-2">
              <img src="" alt="" />
            </figure>
            <div className="details">
              <label>Mountain</label>
              <span className="text-black-50">2 mei 2022</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

Recomended.propTypes = {
  onClick: PropTypes.func,
  vacStayToggle: PropTypes.bool,
  onClickStaycations: PropTypes.func,
  onClickVacatons: PropTypes.func,
};

export default Recomended;
