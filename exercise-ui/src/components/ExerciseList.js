import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function ExerciseList({ exercises, onDelete, onEdit }) {
  //this format date in form mm/dd/yy
  const options = { month: "numeric", day: "numeric", year: "2-digit" };
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
            <td>
              {new Date(exercise.date).toLocaleDateString("en-US", options)}
            </td>
            <td>
              <MdEdit onClick={() => onEdit(exercise)} />
            </td>
            <td>
              <MdDelete onClick={() => onDelete(exercise._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExerciseList;
