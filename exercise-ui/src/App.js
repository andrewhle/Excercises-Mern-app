import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./routes/HomePage";
import CreateExercisePage from "./routes/CreateExercisePage";
import EditExercisePage from "./routes/EditExercisePage";

function App() {
  const [exceToEdit, setExceToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <h1>Exercises List</h1>
          <p>Organize All Your Exercises With Exercise List</p>
          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage setExceToEdit={setExceToEdit} />}
              />

              <Route path="/add-exercise" element={<CreateExercisePage />} />

              <Route
                path="/edit-exercise"
                element={<EditExercisePage exceToEdit={exceToEdit} />}
              />
            </Routes>
          </main>

          <footer className="footer">&copy; 2022 Hung Le</footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
