import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditExercisePage({ exceToEdit }) {
  const [name, setName] = useState(exceToEdit.name);
  const [reps, setReps] = useState(exceToEdit.reps);
  const [weight, setWeight] = useState(exceToEdit.weight);
  const [unit, setUnit] = useState(exceToEdit.unit);
  const [date, setDate] = useState(new Date(exceToEdit.date));
  const navigate = useNavigate();

  const editExercise = async () => {
    const editedExercise = { name, reps, weight, unit, date };
    try {
      const response = await fetch(`/exercises/${exceToEdit._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedExercise),
      });
      if (response.status === 200) {
        alert("Successfully edit the exercises");
      }

      navigate("/");
    } catch (error) {
      console.error({ error: `Failed to edit exercise` });
    }
  };

  return (
    <div>
      <h2>Edit Exercise</h2>
      <div className="form-wrap">
        <input
          className="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        ></input>

        <input
          className="reps"
          type="number"
          value={reps}
          onChange={event => setReps(event.target.value)}
        ></input>

        <input
          className="weight"
          type="number"
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
            value={date}
            onChange={event => setDate(event.target.value)}
        ></input> */}

        <DatePicker
          className="date"
          type="text"
          selected={date}
          onChange={date => setDate(date)}
        ></DatePicker>
      </div>
      <button className="add-button" onClick={editExercise}>
        Save
      </button>
    </div>
  );
}

export default EditExercisePage;
