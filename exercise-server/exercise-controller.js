const exercise = require("./exercise-models.js");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
        .json({ Success: false, message: "Failed to create exercise" });
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

app.put("/exercises/:_id", (req, res) => {
  exercise
    .replaceExercise(
      req.params._id,
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then(modifiedCount => {
      if (modifiedCount === 1) {
        res.json({
          _id: req.params._id,
          name: req.body.name,
          reps: req.body.reps,
          weight: req.body.weight,
          unit: req.body.unit,
          date: req.body.date,
        });
      } else {
        res.status(404).json({ Success: false, Error: "Resource not found" });
      }
    })
    .catch(error => {
      console.error(error);
      res.send({ error: "Request failed" });
    });
});

app.delete("/exercises/:_id", (req, res) => {
  exercise
    .deleteById(req.params._id)
    .then(deletedCount => {
      if (deletedCount === 1) {
        res.status(204).json({ Success: true, Message: "Succesful deleted" });
      } else {
        res.status(404).json({ Success: false, Error: "Resource not found" });
      }
    })
    .catch(error => {
      console.error(error);
      res.send({ error: "Request failed" });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} ...`);
});
