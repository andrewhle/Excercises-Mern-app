import React from "react";

import ExerciseList from "../components/ExerciseList";
import { useState, useEffect } from "react";
import { useNagivate } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [exercises, setExercises] = useState([]);

  const loadExercise = function () {
    fetch("/exercises")
      .then(response => response.json())
      .then(data => setExercises(data));
  };

  useEffect(() => loadExercise(), []);

  return (
    <>
      <h2>Home Page</h2>
      <ExerciseList exercises={exercises} />

      <Link to="/add-exercise" className="button">
        Add exercise
      </Link>
    </>
  );
}

export default HomePage;
