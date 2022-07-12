import TextArea from "components/Input/TextArea/TextArea";
import TimePicker from "components/TimePicker/TimePicker";
import React from "react";
import { useState } from "react";
import Button from "components/NewButton/Button";
import InputItinerary from "components/DataDisplay/InputItinerary/InputItinerary";
import "./styles.scss";
import "animate.css";
import { Input } from "components/Input/Input/Input";
import { ANIMATE_FADEIN } from "assets/animate/animate";
import { useEffect } from "react";
import { useDifferenceTime } from "components/utility/differenceTime";
import { SelectMultiple } from "components/Input/SelectMultiple/SelectMultiple";
import { InputCheckbox } from "components/Input/CheckBox/InputCheckbox";

const InputSchedule = ({ onChange, value }) => {
  const initial = {
    values: {
      schedule: "",
      timeStart: "",
      timeEnd: "",
      validity: "",
    },
    data: [],
  };

  const [data, setData] = useState(value ? value : initial.data);
  const [values, setValues] = useState(initial.values);
  const [difTime, setDifTime] = useDifferenceTime();

  const handleAdd = () => {
    if (
      values.schedule &&
      values.timeStart &&
      values.timeEnd &&
      values.validity === "valid"
    ) {
      setData([...data, values]);
      setValues({ ...values, schedule: "", timeStart: values.timeEnd });
    }
  };

  useEffect(() => {
    onChange({ target: { name: "itinerary", value: data } });
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, validity } = e.target;
    setValues({ ...values, [name]: value });
    type === "time" &&
      setValues({ ...values, [name]: value, validity: validity });
  };

  useEffect(() => {
    setDifTime(values.timeStart, values.timeEnd);

    if (data.length > 0)
      setDifTime(data[0].timeStart, data[data.length - 1].timeEnd);
  }, [data]);

  const handleReset = () => {
    setValues(initial.values);
    setData(initial.data);
  };

  const currentHour = parseInt(difTime.split(":")[0]);

  return (
    <div className="mb-3">
      <InputItinerary
        numOfTime={difTime}
        onClickReset={handleReset}
        className="mb-3"
        data={data}
      />
      <TimePicker
        onValidate={(v) => setValues({ ...values, validity: v })}
        value={{ timeStart: values.timeStart, timeEnd: values.timeEnd }}
        required={currentHour < 8}
        startDisabled={data.length > 0}
        disabled={currentHour >= 8}
        className="mb-4"
        size="large"
        onChange={handleChange}
      />
      <TextArea
        className="mb-3"
        placeholder="schedule..."
        min={50}
        disabled={currentHour >= 8}
        name="schedule"
        required={currentHour < 8}
        value={values.schedule}
        onChange={handleChange}
      />
      <Button
        fullWidth
        type="button"
        size="large"
        variant="outline"
        justifyContent="center"
        label="Add Schedule"
        onClick={handleAdd}
      />
    </div>
  );
};

const Desc = () => {
  const initial = {
    tittle: "",
    maxPax: "",
    budget: "",
    placeDesc: "",
    itinerary: {},
    amenities: [],
    amenitiesNotInclude: [],
  };

  const localS = JSON.parse(localStorage.getItem("desc"));

  const [values, setValues] = useState(localS ? localS : initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={ANIMATE_FADEIN}>
      <Input
        type="text"
        className="mb-3"
        label="Tittle"
        required
        minLength={20}
        maxLength={100}
        name="tittle"
        value={values.tittle}
        onChange={handleChange}
      />
      <div className="d-flex gap-3 mb-3">
        <Input
          leftIcon="budget"
          type="number"
          required
          min={1}
          label="Budget / Pax"
          max={1000}
          value={values.budget}
          name="budget"
          onChange={handleChange}
        />
        <Input
          label="Max Pax"
          type="number"
          value={values.maxPax}
          min={1}
          max={6}
          name="maxPax"
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-flex gap-3 mb-3">
        <SelectMultiple
          label="Amenities"
          name="amenities"
          required
          value={values.amenities}
          min={5}
          onChange={(e) => setValues({ ...values, amenities: e.target.value })}
        />
        <SelectMultiple
          label="Not include"
          name="amenities"
          value={values.amenitiesNotInclude}
          onChange={(e) =>
            setValues({ ...values, amenitiesNotInclude: e.target.value })
          }
        />
      </div>
      <TextArea
        className="mb-3"
        minLength={20}
        required
        name="place description"
        label="Place Descrition"
        placeholder="place description..."
        value={values.placeDesc}
        onChange={(e) => setValues({ ...values, placeDesc: e.target.value })}
      />
      <InputSchedule value={values.itinerary} onChange={handleChange} />
      <TextArea
        className="mb-3"
        name="more"
        placeholder="optional..."
        label="More Things Visitors Must To Know"
        value={values.more}
        onChange={(e) => setValues({ ...values, more: e.target.value })}
      />
      <InputCheckbox className="mb-3" label="Pick-up services" />
    </div>
  );
};

export default Desc;
