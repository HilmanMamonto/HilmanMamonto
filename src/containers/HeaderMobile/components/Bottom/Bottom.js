import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Icons from "components/Icons";
import IconButton from "components/IconButton/IconButton";
import Slide from "components/DataDisplay/Slide/Slide";
import SimpleCard from "components/DataDisplay/SimpleCard/SimpleCard";
import _dataVacStay from "json/vacations-staycations-recomendation.json";
import { useState } from "react";
import ButtonUnderlline from "components/ButtonUnderline/ButtonUnderlline";

const Location = ({ isActive, onClick }) => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState("Vacations");

  const data =
    active === "Vacations" ? _dataVacStay.vacations : _dataVacStay.staycations;

  if (isActive) {
    return (
      <div className="items shadow  p-4">
        <h5 className="mb-3">Where Are You Going?</h5>
        <div className="d-flex gap-2 border rounded px-3 py-2">
          <Icons variant="search" size="large" />
          <input value={value} placeholder="Where to ?... " />
          <Icons variant="search" size="large" />
        </div>
        <div className="d-flex gap-4 mt-4 mb-3">
          <ButtonUnderlline
            onClick={() => setActive("Vacations")}
            isActive={active === "Vacations"}
            label="Vacations"
          />
          <ButtonUnderlline
            onClick={() => setActive("Staycations")}
            isActive={active === "Staycations"}
            label="Staycations"
          />
        </div>
        <Slide className="gap-2">
          {data.map((item, i) => {
            return (
              <button onClick={() => setValue(active + " " + item.tittle)}>
                <SimpleCard
                  key={item.tittle + i}
                  tittle={item.tittle}
                  imageUrl={item.image}
                />
              </button>
            );
          })}
        </Slide>
      </div>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="d-flex items shadow  px-4 py-3 justify-content-between"
      >
        <span>Where</span>
        <span>{value}</span>
      </button>
    );
  }
};

const Date = ({ isActive, onClick }) => {
  if (isActive) {
    return (
      <div className="items shadow  p-4 ">
        <h5 className="mb-3">When's your trip?</h5>
      </div>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="d-flex items shadow  px-4 py-3 justify-content-between"
      >
        <span>When</span>
        <span>Date</span>
      </button>
    );
  }
};

const Who = ({ isActive, onClick }) => {
  if (isActive) {
    return <div className="items shadow  p-4 ">active</div>;
  } else {
    return (
      <button
        onClick={onClick}
        className={"d-flex items shadow  px-4 py-3 justify-content-between"}
      >
        <span>People</span>
        <span>0</span>
      </button>
    );
  }
};

const Bottom = ({ isActive, onClick }) => {
  const [active, setActive] = useState("location");
  const classes = {
    activate: isActive ? "active " : "",
  };

  return (
    <div className={"header-mobile-bottom " + classes.activate}>
      <div className="container px-4">
        <div className="d-flex py-4 align-items-center align-items-center gap-2 mb-2">
          <button className="d-flex align-items-center" onClick={onClick}>
            <IconButton variant="close-rounded-white" />
          </button>
          <h5 className="mb-0 d-flex justify-content-center w-100">
            Start Your Search
          </h5>
        </div>
        <div className="d-flex flex-column gap-4">
          <Location
            isActive={active === "location"}
            onClick={() => setActive("location")}
          />
          <Date
            isActive={active === "date"}
            onClick={() => setActive("date")}
          />
          <Who isActive={active === "who"} onClick={() => setActive("who")} />
        </div>
      </div>
    </div>
  );
};

Bottom.propTypes = {};

export default Bottom;
