import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import _dataVacStay from "json/vacations-staycations-recomendation.json";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import { ANIMATE_FADEIN_RIGHT } from "assets/animate/animate";
import SimpleCard from "components/DataDisplay/SimpleCard/SimpleCard";
import ButtonUnderlline from "components/ButtonUnderline/ButtonUnderlline";
import Slide from "components/DataDisplay/Slide/Slide";

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
        <ButtonUnderlline
          isActive={vacStay === "Vacations"}
          onClick={() => setVacStay("Vacations")}
          label="Vacations"
        />
        <ButtonUnderlline
          isActive={vacStay === "Staycations"}
          onClick={() => setVacStay("Staycations")}
          label="Staycations"
        />
      </div>
      <div className="location-categories">
        <Slide gap={2} className="w-100">
          {data.map((item, i) => {
            return (
              <button
                key={"vr" + i}
                type="button"
                className={"item-recomended px-0 " + ANIMATE_FADEIN_RIGHT}
                onClick={() => setValue(item.tittle)}
                style={{ animationDelay: 0.2 * i + "s" }}
              >
                <SimpleCard tittle={item.tittle} imageUrl={item.image} />
              </button>
            );
          })}
        </Slide>
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
