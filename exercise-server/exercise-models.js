const mongoose = require("mongoose");

//--------------connect to Data Base---------------------------
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/exercise_db", {
      useNewUrlParser: true,
    });

    console.log("Successfully connected to MongoDB using Mongoose! ");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const exerciseSchema = mongoose.Schema({
  name: { type: String, require: true },
  reps: { type: Number, require: true },
  weight: { type: Number, require: true },
  unit: { type: String, require: true },
  date: { type: String, require: true },
});

const Exercise = mongoose.model("exercises", exerciseSchema);

//creating new data
const createExercise = async function (data) {
  const { name, reps, weight, unit, date } = data;
  const exercise = new Exercise({
    name: name,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  });

  return exercise.save();
};

const findExercise = async function (data) {
  const doc = await Exercise.find({
    ...data,
  });

  return doc;
};

const replaceExercise = async function (_id, data) {
  const { ...rest } = data;
  const result = await Exercise.replaceOne({ _id: _id }, { ...rest });

  return result.modifiedCount;
};

module.exports = { createExercise, findExercise, replaceExercise };
