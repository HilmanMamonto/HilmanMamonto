import React from "react";
import "./styles.scss";
import _countriesData from "json/countries.json";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Manual = ({ value, className = "", isActive }) => {
  const [data, setData] = useState([]);

  const classes = {
    activate: isActive && data.length != 0 ? "active " : "",
  };

  useEffect(() => {
    const regex = new RegExp(value, "i");
    const newData = _countriesData.filter(
      (item) => item.capital.match(regex) || item.name.match(regex)
    );
    setData(newData);
  }, [value]);

  return (
    <div className={"search-location-manual " + classes.activate + className}>
      <div className="items">
        {data.map((item, i) => {
          return (
            <button type="button" className="item" key={"location " + i}>
              <figure>{/* <img src={item.flag} alt="" /> */}</figure>
              <div className="details">
                <label>{item.capital}</label>
                <span>{item.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

Manual.propTypes = {
  // onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default Manual;
