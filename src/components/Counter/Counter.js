import React from "react";
import Icons from "components/Icons";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.scss";

const Counter = ({
  onChange = () => "",
  initial = 0,
  value,
  max = 10,
  className,
}) => {
  const [count, setCount] = useState(value ? value : initial);

  useEffect(() => {
    onChange(count);
  }, [count]);

  const handleClick = (counter) => {
    if (count >= initial && count < max && counter === "plus") {
      setCount((p) => p + 1);
    }
    if (count > initial && counter === "min") {
      setCount((p) => p - 1);
    }
  };

  return (
    <div
      className={"counter d-inline-flex align-items-center gap-4 " + className}
    >
      <button
        type="button"
        disabled={count === initial}
        onClick={() => handleClick("min")}
      >
        <Icons variant="min" size="xlarge" />
      </button>
      <span
        type="button"
        style={{ width: "40px" }}
        className="text-center fs-5"
      >
        {count}
      </span>
      <button
        type="button"
        disabled={count === max}
        onClick={() => handleClick("plus")}
      >
        <Icons variant="plus" size="xlarge" />
      </button>
    </div>
  );
};

export default Counter;
