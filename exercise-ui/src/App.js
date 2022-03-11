import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./routes/HomePage";
import CreateExercisePage from "./routes/CreateExercisePage";
import EditExercisePage from "./routes/EditExercisePage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/add-exercise" element={<CreateExercisePage />} />
            <Route path="/edit-exercise" element={<EditExercisePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
