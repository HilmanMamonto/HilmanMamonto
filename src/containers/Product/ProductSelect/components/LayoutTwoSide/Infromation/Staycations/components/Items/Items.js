import Slider from "components/DataDisplay/Slider/Slider";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.scss";

const Items = ({ staycations, onChange = () => "" }) => {
  const [id, setId] = useState(staycations[0].id);

  useEffect(() => {
    onChange(id);
  }, [id]);

  return (
    <div className="staycations-items mb-4">
      <Slider gap={4}>
        {staycations.map((item, i) => {
          return (
            <button
              onClick={() => setId(item.id)}
              key={i}
              className="d-flex gap-3 align-items-center"
            >
              <figure className="mb-0">
                <img
                  src={item.imagesUrl[0]}
                  alt={item.name}
                  className="rounded"
                />
              </figure>
              <div className="si-info">
                <span className="d-flex">
                  <span className="fw-semibold">${item.budget} /</span>
                  <span>night</span>
                </span>
                <h6 className="text-start">{item.name}</h6>
                <span>
                  <span className="me-2">{item.rate}</span>
                  <span>Reviews ({item.reviews})</span>
                </span>
              </div>
            </button>
          );
        })}
      </Slider>
    </div>
  );
};

export default Items;
