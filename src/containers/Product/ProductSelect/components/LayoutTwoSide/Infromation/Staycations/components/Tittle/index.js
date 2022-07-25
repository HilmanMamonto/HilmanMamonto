import React from "react";
import "./styles.scss";

const Tittle = ({ data }) => {
  return (
    <div className="tittle-staycation-choosed">
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div>
              <div className="head">
                <h3>{item.name}</h3>
                <span />
                <label>{item.availability}</label>
              </div>
              <div className="foot">
                <a href="#reviews">{item.rate}</a>
                <a href="#reviews">Reviews ({item.reviews})</a>
                <a href="#reviews">{item.location}</a>
              </div>
            </div>
            <div className="budget">
              <label>
                ${item.budget} / <span>night</span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tittle;
