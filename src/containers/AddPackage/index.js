import Stepper from "components/Stepper/Stepper";
import React from "react";
import Desc from "./Desc";
import { useState } from "react";
import Button from "components/NewButton/Button";
import Availability from "./Availability";
import Images from "./Images";
import Stays from "./Stays";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useEffect } from "react";
import { useRef } from "react";
import Icons from "components/Icons";

const dataStepper = ["Desc", "Availability", "Photos", "Stays"];

const AddPackage = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef();

  const contents = {
    0: <Desc />,
    1: <Availability />,
    2: <Images />,
    3: <Stays />,
  };

  const btnLabels = {
    0: "Add Desc and Next",
    1: "Add Availability an Next",
    2: "Add Images and Next",
    3: "CREATE PACKAGE",
  };

  useEffect(() => {
    if (ref) ref.current.scroll(0, 0);
  }, [current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
    <Link to={"/"} />;
  };

  return (
    <div ref={ref} className="form-wrapper">
      {current === 4 && (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column gap-4 bg-white d-inline-flex px-3 py-4 rounded">
            <Icons variant="checkmark" size="xlarge" />
            <h5 className="mb-0">success, a package added</h5>
            <Link to={"/dashboard/main"}>
              <Button
                fullWidth
                justifyContent="center"
                variant="outline"
                label="OK"
              />
            </Link>
          </div>
        </div>
      )}
      {current < 4 && (
        <div className="form-container">
          <Link className="fm-outside" to={"/dashboard/main"} />
          <div className="fm-content container-sm mx-3 mx-md-0 bg-white">
            <div className="d-flex mb-4 align-items-center">
              <h5 className="text-center w-100 mb-0">Add New Travel Package</h5>
              <Link style={{ height: "fit-content" }} to={"/dashboard/main"}>
                <Icons variant="close" size="large" />
              </Link>
            </div>
            <Stepper
              className="border-bottom mb-4 pb-3 "
              data={dataStepper}
              currentStep={current}
              size="small"
            />
            <form onSubmit={handleSubmit}>
              {contents[current]}
              <Button
                fullWidth
                className="mt-4"
                color={current < 3 ? "primary" : "secondary"}
                type="submit"
                size="large"
                shadow="medium"
                justifyContent="space-between"
                label={btnLabels[current]}
                rightIcon="btn-rounded"
              />
            </form>
            {current > 0 && (
              <Button
                hidden
                fullWidth
                className="mt-3"
                variant="outline"
                size="large"
                label="Back"
                onClick={() => setCurrent(current - 1)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPackage;
