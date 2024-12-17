const express = require("express");
const mongoose = require("mongoose");
const categories = require("./Routes/categories");
const students = require("./Routes/student");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/learningPlatform")
  .then(() => console.log("DataBase ✨"))
  .catch((err) => console.log("DataBase 😥"));

app.use(express.json());

app.use("/api/categories", categories);

app.use("/api/students", students);

app.listen(3000, () => {
  console.log("Server listing on port 3000 ");
});
