import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import _dataVacStay from "json/vacations-staycations-recomendation.json";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import { ANIMATE_FADEIN_RIGHT } from "assets/animate/animate";

const Recomended = ({ className = "", isActive, onChange }) => {
  const refItems = useRef(null);
  const [vacStay, setVacStay] = useState("Vacations");
  const [data, setData] = useState(_dataVacStay.vacations);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (vacStay === "Vacations") setData(_dataVacStay.vacations);
    if (vacStay === "Staycations") setData(_dataVacStay.staycations);
  }, [vacStay]);

  useEffect(() => {
    onChange({ target: { name: "location", value: vacStay + " " + value } });
  }, [value]);

  const handleClick = (btn) => {
    if (btn === "btn-next") refItems.current.scrollLeft += 700;
    if (btn === "btn-prev") refItems.current.scrollLeft -= 700;
  };

  const classes = {
    activate: isActive ? "active " : "",
    vacationsLabel: vacStay === "Vacations" ? "active" : "",
    staycationsLabel: vacStay === "Staycations" ? "active" : "",
  };

  return (
    <div
      className={"search-location-recomended " + classes.activate + className}
    >
      <div className="search-location-tittle d-flex gap-4">
        <button
          type="button"
          className={"btn-nav " + classes.vacationsLabel}
          onClick={() => setVacStay("Vacations")}
        >
          Vacations
        </button>
        <button
          type="button"
          className={"btn-nav " + classes.staycationsLabel}
          onClick={() => setVacStay("Staycations")}
        >
          Staycations
        </button>
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
          {data.map((item, i) => {
            return (
              <button
                key={"vr" + i}
                type="button"
                className={"item " + ANIMATE_FADEIN_RIGHT}
                onClick={() => setValue(item.tittle)}
                style={{ animationDelay: 0.2 * i + "s" }}
              >
                <figure className="mb-2">
                  <img src={item.image} alt="" />
                </figure>
                <span className="fw-semibold">{item.tittle}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="recent">
        <label>Recent</label>
        <div className="items gap-3">
          <button type="button" className=" item">
            <figure className="m-0 me-2">
              <img src="" alt="" />
            </figure>
            <div className="details">
              <label>Mountain</label>
              <span className="text-black-50">2 mei 2022</span>
            </div>
          </button>
          <button type="button" className="item">
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
  onChange: PropTypes.func.isRequired,
};

export default Recomended;
