import React from "react";
import "./styles.scss";
import _countriesData from "json/countries.json";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Icons from "components/Icons";

const SearchList = ({ value = "", className = "", hidden, onChange }) => {
  const [data, setData] = useState([]);
  const [get, setGet] = useState("");

  useEffect(() => {
    const regex = new RegExp(value, "i");
    const newData = _countriesData.filter(
      (item) => item.capital.match(regex) || item.name.match(regex)
    );
    setData(newData);
  }, [value]);

  useEffect(() => {
    onChange(get);
  }, [get]);

  return (
    <div hidden={hidden} className={"search-list " + className}>
      <div className="sl-items gap-3">
        {data.map((item, i) => {
          return (
            <button
              onClick={() => setGet(item.capital + ", " + item.name)}
              type="button"
              className="sl-item"
              key={"location " + i}
            >
              <Icons size="xlarge" variant="location-fill" />
              <div className="sl-details">
                <span className="fw-semibold">{item.capital}</span>
                <small>{item.name}</small>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchList;
