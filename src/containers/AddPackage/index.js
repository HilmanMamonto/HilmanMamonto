import FormWrapper from "components/FormWrapper";
import Stepper from "components/Stepper/Stepper";
import React from "react";
import Desc from "./Desc";
import { useState } from "react";
import Button from "components/NewButton/Button";
import Availability from "./Availability";
import Images from "./Images";
import Stays from "./Stays";
import { Link } from "react-router-dom";

const dataStepper = ["Desc", "Availability", "Photos", "Stays"];

const AddPackage = () => {
  const [current, setCurrent] = useState(2);

  const contents = {
    0: <Desc />,
    1: <Availability />,
    2: <Images />,
    3: <Stays />,
  };

  const btnLabels = {
    0: "Add Desc an Next",
    1: "Add Availability an Next",
    2: "Add Images an Next",
    3: "CREATE PACKAGE",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
    <Link to={"/"} />;
  };

  return (
    <div className="add-package">
      <FormWrapper>
        <h5 className="text-center mb-4">Add New Travel Package</h5>
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
            color={current < 3 ? "primary" : "secondary"}
            className="mt-3"
            buttonType="submit"
            size="large"
            shadow="medium"
            justifyContent="space-betwen"
            label={btnLabels[current]}
            rightIcon="btn-rounded"
          />
        </form>
        <Button
          hidden={current === 0}
          fullWidth
          className="mt-3"
          variant="outline"
          size="large"
          justifyContent="space-betwen"
          label="Back"
          onClick={() => setCurrent(current - 1)}
        />
      </FormWrapper>
    </div>
  );
};

export default AddPackage;
