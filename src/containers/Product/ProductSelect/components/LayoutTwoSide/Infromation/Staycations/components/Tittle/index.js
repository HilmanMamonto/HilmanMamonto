import React from "react";
import "./styles.scss";

const TittleSelectedStaycations = ({}) => {
  return (
    <div id="tittle-staycation-choosed">
      <div>
        <div className="head">
          <div>Villa Tengger Semeru</div>
          <span />
          <label>2-8 mei</label>
        </div>
        <div className="foot">
          <a href="#reviews">5.0</a>
          <a href="#reviews">Reviews</a>
          <a href="#reviews">Malang, Tengger Semeru</a>
        </div>
      </div>
      <div className="budget">
        <label>
          $32 / <span>night</span>
        </label>
      </div>
    </div>
  );
};

TittleSelectedStaycations.propTypes = {};

export default TittleSelectedStaycations;
