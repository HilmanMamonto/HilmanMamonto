import React from "react";
import "./styles.scss";

const Chart = () => {
  const arr = [0, 1, 2, 3, 4, 5];

  return (
    <div className="rate-chart row row-cols-md-2 my-4">
      {arr.map((item, i) => {
        return (
          <div key={i} className="item mb-3">
            <label className="tittle">Comunication</label>
            <div>
              <span />
            </div>
            <label className="rate">4.8</label>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
