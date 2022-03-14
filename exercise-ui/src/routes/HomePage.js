import React from "react";

import ExerciseList from "../components/ExerciseList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage({ setExceToEdit }) {
  const [exercises, setExercises] = useState([]);

  const navigate = useNavigate();

  const onDelete = function (_id) {
    fetch(`/exercises/${_id}`, { method: "DELETE" }).then(response => {
      if (response.status === 204) {
        const newExercise = exercises.filter(exercise => exercise._id !== _id);
        //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
        //In this case, all exercise will pass except for the delete parameter _id
        setExercises(newExercise);
      } else {
        console.error({
          Success: false,
          Error: `Failed to delete movie with _id ${_id}`,
        });
      }
    });
  };

  const onEdit = function (exercise) {
    setExceToEdit(exercise);
    navigate("edit-exercise");
  };

  const loadExercise = function () {
    fetch("/exercises")
      .then(response => response.json())
      .then(data => setExercises(data));
  };

  useEffect(() => loadExercise(), []);

  return (
    <>
      <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit} />

      <Link to="/add-exercise" className="button">
        Add exercise
      </Link>
    </>
  );
}

export default HomePage;
