import InputCheckBox from "components/Input/CheckBox/CheckBox";

import TextArea from "components/Input/TextArea/TextArea";
import TimePicker from "components/TimePicker/TimePicker";
import React from "react";
import { useState } from "react";
import Button from "components/NewButton/Button";
import Icons from "components/Icons";
import InputItinerary from "components/DataDisplay/InputItinerary/InputItinerary";
import "./styles.scss";
import "animate.css";
import { Input } from "components/Input/Input/Input";

const InputSchedule = () => {
  const getItinerary = JSON.parse(localStorage.getItem("itinerary"));
  const [storage, setStorage] = useState(getItinerary);
  const initialTime = storage
    ? storage[storage.length - 1].time.split(" - ")[1]
    : "";
  const [values, setValues] = useState({
    time: initialTime,
    desc: "",
    status: "",
  });
  const [valid, setValid] = useState({ time: "invalid", desc: "invalid" });

  const handleClick = () => {
    const getItinerary = JSON.parse(localStorage.getItem("itinerary"));
    const result =
      getItinerary && getItinerary.constructor === Array
        ? [...getItinerary, values]
        : [values];

    if (validation()) {
      localStorage.setItem("itinerary", JSON.stringify(result));
      setStorage(result);
      setValues({ time: "", desc: "", status: "" });
    }
  };

  const handleChangeTimePicker = (data) => {
    setValues((p) => ({ ...p, time: data.tpStart + " - " + data.tpEnd }));
    setValid((p) => ({ ...p, time: data.status }));
  };

  const handleChangeTextArea = (data) => {
    setValues((p) => ({ ...p, desc: data.value }));
    setValid((p) => ({ ...p, desc: data.status }));
  };

  const handleReset = () => {
    localStorage.removeItem("itinerary");
    setStorage(null);
    setValues({ time: "", desc: "", status: "" });
  };

  const validation = () => {
    if (valid.time != "valid" && valid.desc != "valid")
      alert("Input itinerary time and schedule please");
    if (valid.time != "valid" && valid.desc === "valid")
      alert("Input itinerary time please");
    if (valid.time === "valid" && valid.desc != "valid")
      alert("Input schedule please");

    return valid.time === "valid" && valid.desc === "valid" ? true : false;
  };

  return (
    <div className="mb-3">
      <InputItinerary
        className="mb-2"
        data={storage}
        onClickReset={handleReset}
      />
      <TimePicker
        className="mb-4"
        timeStart={initialTime}
        size="large"
        value={values.time}
        onChange={handleChangeTimePicker}
        disabled={storage && storage.length > 0}
      />
      <TextArea
        className="mb-3"
        placeholder={"Input schedule..."}
        value={values.desc}
        min={50}
        name="shcedule"
        onChange={handleChangeTextArea}
      />
      <Button
        fullWidth
        size="large"
        variant="outline"
        justifyContent="center"
        label="Add Schedule"
        onClick={handleClick}
      />
    </div>
  );
};

const dataAmenities = ["sun screen", "lunch", "mineral water"];

const ContainerTwoItems = ({ children }) => {
  return (
    <div className="container mb-3">
      <div className="row gap-3">{children}</div>
    </div>
  );
};

const Desc = () => {
  const initial = { tittle: "", maxPax: "", budget: "" };
  const [values, setValues] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="animate__animated animate__fadeIn" onSubmit={handleSubmit}>
      <Input
        type="text"
        className="mb-3"
        label="Tittle"
        required
        max={100}
        name="tittle"
        onChange={() => ""}
      />
      <ContainerTwoItems>
        <Input
          className="col p-0"
          leftIcon="budget"
          type="number"
          required
          label="Budget / Pax"
          max={1000}
          name="tittle"
          onChange={() => ""}
        />
        <Input
          className="col p-0"
          required
          label="Max Pax"
          type="number"
          min={1}
          max={6}
          name="tittle"
          onChange={() => ""}
        />
      </ContainerTwoItems>
      <ContainerTwoItems>
        <InputCheckBox
          className="col p-0"
          label="Amenities"
          data={dataAmenities}
        />
        <InputCheckBox
          className="col p-0"
          label="Amenities"
          data={dataAmenities}
        />
      </ContainerTwoItems>
      <TextArea
        className="mb-3"
        min={20}
        label="Place Descrition"
        value={""}
        onChange={() => ""}
      />
      <InputSchedule />
      <TextArea
        className="mb-3"
        min={20}
        label="More Things Visitors Must To Know"
        value={""}
        onChange={() => ""}
      />
      <Button
        fullWidth
        buttonType="submit"
        size="large"
        shadow="medium"
        justifyContent="space-betwen"
        label="Add Desc and Next"
        rightIcon={<Icons size="xlarge" variant="arrow-right-white-rounded" />}
      />
    </form>
  );
};

export default Desc;
