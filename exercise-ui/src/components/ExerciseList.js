import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function ExerciseList({ exercises }) {
  return (
    <table className="exercises">
      <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {exercises.map((exercise, i) => (
          <tr key={i}>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
              <MdEdit />
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExerciseList;
