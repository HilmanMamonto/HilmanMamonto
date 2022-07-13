import Stay from "components/DataDisplay/Stay/Stay";
import React from "react";
import "./styles.scss";
import "animate.css";
import data from "json/staycations";
import { useState } from "react";
import { useEffect } from "react";

const Stays = () => {
  const local = JSON.parse(localStorage.getItem("stays"));
  const [values, setValues] = useState(local ? local : []);

  useEffect(() => {
    localStorage.setItem("stays", JSON.stringify(values));
  }, [values]);

  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (!checked) {
      const newValues = values.filter((item) => item !== value);
      setValues(newValues);
    }
    if (checked) {
      setValues([...values, value]);
    }
  };

  return (
    <div className="d-flex flex-column gap-3 overflow-hidden">
      {data.map((item, i) => {
        return (
          <div
            key={item.id}
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: 0.3 * i + "s" }}
          >
            <Stay
              id={item.id}
              tittle={item.tittle}
              location={item.location}
              budget={item.budget}
              rate={item.rate}
              defaultChecked={values.includes(item.id)}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stays;
