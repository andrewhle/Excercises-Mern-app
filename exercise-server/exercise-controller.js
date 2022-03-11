const exercise = require("./exercise-models.js");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//------------Creating new exercise--------------
app.post("/exercises", (req, res) => {
  exercise
    .createExercise(req.body)
    .then(exercise => {
      res.status(201).json(exercise);
    })
    .catch(error => {
      console.error(error);
      res
        .status(400)
        .json({ success: false, message: "Failed to create exercise" });
    });
});

app.get("/exercises", (req, res) => {
  exercise
    .findExercise(req.query)
    .then(exercise => {
      res.send(exercise);
    })
    .catch(error => {
      console.error(error);
      res.send({ Error: "Request failed" });
    });
});

app.put("/exercises", (req, res) => {
  exercise.replaceExercise(req.params._id, req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} ...`);
});
