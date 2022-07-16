import React from "react";
import "./styles.scss";

const SimpleCard = ({ imageUrl, tittle = "tittle" }) => {
  return (
    <div className="simple-card d-flex align-items-start flex-column gap-2">
      <img src={imageUrl} alt={tittle} />
      <span className="fw-semibold">{tittle}</span>
    </div>
  );
};

export default SimpleCard;
