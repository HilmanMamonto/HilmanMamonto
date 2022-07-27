import Counter from "components/Counter/Counter";
import React from "react";
import "./SearchPax.scss";

const SearchPax = ({ className, hidden, onChange = () => "" }) => {
  return (
    <div hidden={hidden} className={"search-pax " + className}>
      <div className="wrap">
        <div className="details">
          <label>Adult</label>
          <span className="opacity-50">Ages 13 or above</span>
        </div>
        <Counter onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchPax;
