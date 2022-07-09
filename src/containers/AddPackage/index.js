import FormWrapper from "components/FormWrapper";
import Stepper from "components/Stepper/Stepper";
import Typography from "components/Typography";
import Container from "Layout/Container";
import React from "react";
import Desc from "./Desc";
import Line from "components/Line";
import H from "components/H";
import { useEffect } from "react";
import { useState } from "react";
import Button from "components/NewButton/Button";
import Icons from "components/Icons";
import Availability from "./Availability";
import Images from "./Images";
import Stays from "./Stays";

const dataStepper = ["Desc", "Availability", "Photos", "Stay", "Review"];

const AddPackage = () => {
  const [current, setCurrent] = useState(0);

  const contents = {
    0: <Desc />,
    1: <Availability />,
    2: <Images />,
    3: <Stays />,
  };

  const btnBack =
    current > 0 ? (
      <Button
        fullWidth
        variant="outline"
        size="large"
        justifyContent="space-betwen"
        label="Back"
        rightIcon={<Icons size="xlarge" variant="arrow-right-white-rounded" />}
        onClick={() => setCurrent(current - 1)}
      />
    ) : null;

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
        {contents[current]}
        {btnBack}
      </FormWrapper>
    </div>
  );
};

export default AddPackage;
