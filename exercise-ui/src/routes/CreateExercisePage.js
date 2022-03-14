import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercisePage() {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const addExercise = async () => {
    //let formatDate = new Intl.DateTimeFormat("en-US").format(date);
    const newExercise = { name, reps, weight, unit, date };

    try {
      const response = await fetch("/exercises", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExercise),
      });
      if (response.status === 201) {
        alert("Successfully added the exercises");
      }

      navigate("/");
    } catch (error) {
      console.error({ error: `Failed to add exercise` });
    }
  };

  return (
    <div>
      <h2>Add Exercise</h2>
      <div className="form-wrap">
        <input
          className="name"
          type="text"
          placeholder="Enter exercise name"
          value={name}
          onChange={event => setName(event.target.value)}
        ></input>

        <input
          className="reps"
          type="number"
          placeholder="Enter repetition"
          value={reps}
          onChange={event => setReps(event.target.value)}
        ></input>

        <input
          className="weight"
          type="number"
          placeholder="Enter weight"
          value={weight}
          onChange={event => setWeight(event.target.value)}
        ></input>

        <select
          className="unit"
          type="text"
          value={unit}
          onChange={event => setUnit(event.target.value)}
        >
          <option className="option" value="lbs">
            lbs
          </option>
          <option className="option" value="kgs">
            kgs
          </option>
        </select>

        {/* <input
            type="text"
            placeholder="Enter date "
            value={date}
            onChange={event => setDate(event.target.value)}
        ></input> */}

        <DatePicker
          className="date"
          type="text"
          dateFormat="MM/dd/yy"
          placeholderText="Select date"
          selected={date}
          onChange={date => setDate(date)}
        ></DatePicker>
      </div>
      <button className="add-button" onClick={addExercise}>
        Add
      </button>
    </div>
  );
}

export default CreateExercisePage;
