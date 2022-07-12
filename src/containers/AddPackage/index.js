import FormWrapper from "components/FormWrapper";
import Stepper from "components/Stepper/Stepper";
import React from "react";
import Desc from "./Desc";
import { useState } from "react";
import Button from "components/NewButton/Button";
import Icons from "components/Icons";
import Availability from "./Availability";
import Images from "./Images";
import Stays from "./Stays";

const dataStepper = ["Desc", "Availability", "Photos", "Stays", "Review"];

const AddPackage = () => {
  const [current, setCurrent] = useState(0);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
  };

  return (
    <div className="add-package">
      <FormWrapper>
        <h5 className="text-center mb-4">Add New Travel Package</h5>
        <Stepper
          className="border-bottom mb-4 pb-3 d-flex flex-column w-10"
          data={dataStepper}
          currentStep={current}
          size="small"
        />
        <form onSubmit={handleSubmit}>
          {contents[current]}
          <Button
            fullWidth
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
