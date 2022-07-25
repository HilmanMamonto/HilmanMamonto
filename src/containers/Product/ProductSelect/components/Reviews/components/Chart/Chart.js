import React from "react";
import "./styles.scss";

const Chart = ({ rateDetails = [] }) => {
  return (
    <div className="rate-chart row row-cols-md-2 my-4">
      {rateDetails.map((item, i) => {
        return (
          <div key={i} className="item mb-3">
            <label className="tittle">{item.name}</label>
            <div>
              <span style={{ width: (item.value * 100) / 5 + "%" }} />
            </div>
            <label className="rate">{item.value}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
