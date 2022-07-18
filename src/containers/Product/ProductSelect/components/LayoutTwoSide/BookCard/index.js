import Button from "components/NewButton/Button";
import React from "react";
import "./styles.scss";

const BookCard = ({ className }) => {
  return (
    <div className={"book-card border " + className}>
      <div className="tittle border-bottom">
        <label className="fs-4 fw-semibold">$32 </label>
        <span>/ pax</span>
      </div>
      <div className="form border-bottom d-flex flex-column gap-2 pb-4">
        <div className="input day">
          <div>
            <label className="mb-1">PICK YOUR DAY</label>
            <input readOnly value="9 / 25 / 2022"></input>
          </div>
        </div>
        <div className="input visitors">
          <div>
            <label className="mb-1">VISITORS</label>
            <input readOnly value="2 people" />
          </div>
        </div>
        <div className="input staycation">
          <div>
            <label className="mb-1">STAYCATION</label>
            <input readOnly value="2 people" />
          </div>
        </div>
      </div>
      <div className="more-information">
        <div className="sub-information">
          <div className="inf">
            <label>Free Cancellation</label>
            <label>Rescheduleable</label>
          </div>
          <div>
            <label>2 pax (tour)</label>
            <span>$64</span>
          </div>
          <div>
            <label>staycation</label>
            <span>$145</span>
          </div>
        </div>
        <div className="total">
          <label>Total</label>
          <span>$209</span>
        </div>
      </div>
      <Button
        fullWidth
        color="secondary"
        size="large"
        rightIcon="btn-rounded"
      />
    </div>
  );
};

export default BookCard;
