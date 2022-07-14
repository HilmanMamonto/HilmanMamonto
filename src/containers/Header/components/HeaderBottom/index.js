import React, { useState } from "react";
import "./styles.scss";
import _countriesData from "json/countries.json";
import PropTypes from "prop-types";
import _dataVacStay from "json/vacations-staycations-recomendation.json";
import Recomended from "../Form/Location/Recomended/Recomended";

const HeaderBottom = ({ isActive }) => {
  const [active, setActive] = useState("left");
  const [values, setValues] = useState({ location: "", date: "", people: "" });

  const classes = {
    left: active === "left" ? "active " : "",
    mid: active === "mid" ? "active " : "",
    right: active === "right" ? "active " : "",
    activate: isActive && "active ",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const lineLeft = document.querySelector(".line-left");
  const lineRight = document.querySelector(".line-right");

  const hidden = {
    line: {
      left: active === "left" || active === "mid",
      right: active === "mid" || active === "right",
    },
  };

  return (
    <div className={"header-bottom " + classes.activate}>
      <form action="search">
        <button
          onClick={() => setActive("left")}
          type="button"
          className={"item " + classes.left}
          onMouseOver={() => (lineLeft.className = "line-left hide")}
          onMouseOut={() => (lineLeft.className = "line-left ")}
        >
          <span>Location</span>
          <input
            onChange={handleChange}
            name="location"
            value={values.location}
            placeholder="Location"
          />
          <Recomended />
        </button>
        <button
          onClick={() => setActive("mid")}
          type="button"
          className={"item " + classes.mid}
          onMouseOver={() => {
            lineLeft.className = "line-left hide";
            lineRight.className = "line-right hide";
          }}
          onMouseOut={() => {
            lineLeft.className = "line-left";
            lineRight.className = "line-right";
          }}
        >
          <label hidden={hidden.line.left} className="line-left" />
          <span>Date</span>
          <input
            readOnly
            onChange={handleChange}
            name="date"
            value={values.date}
            placeholder="make your day"
          />
          <label hidden={hidden.line.right} className="line-right" />
        </button>
        <button
          onClick={() => setActive("right")}
          type="button"
          className={"item " + classes.right}
          onMouseOver={() => (lineRight.className = "line-right hide")}
          onMouseOut={() => (lineRight.className = "line-right ")}
        >
          <div>
            <span>People who you love</span>
            <input
              readOnly
              onChange={handleChange}
              name="people"
              value={values.people}
              placeholder="add peopple who you love"
            />
          </div>
          <button type="submit"></button>
        </button>
      </form>
    </div>
  );
};

HeaderBottom.prototype = {
  isActive: PropTypes.bool,
};

export default React.forwardRef(HeaderBottom);
