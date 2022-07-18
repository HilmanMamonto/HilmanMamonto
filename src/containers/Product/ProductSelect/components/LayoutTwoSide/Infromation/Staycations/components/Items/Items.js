import Slide from "components/DataDisplay/Slide/Slide";
import React from "react";
import "./styles.scss";

const Items = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="staycations-items mb-4">
      <Slide gap={4}>
        {arr.map((item) => {
          return (
            <div key={item} className="d-flex gap-4 align-items-center">
              <figure className="mb-0">
                <img className="rounded" />
              </figure>
              <div className="si-info">
                <label>
                  <span className="fw-semibold">$32 /</span>
                  <span>night</span>
                </label>
                <h6>Villa Tengger Semeru</h6>
                <label>
                  <span className="me-2">5.0</span>
                  <span>Reviews (100)</span>
                </label>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Items;
