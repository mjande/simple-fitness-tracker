import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/workouts");
});

app.get("/workouts", (req, res) => {
  res.json({ 1: "Undefined" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
