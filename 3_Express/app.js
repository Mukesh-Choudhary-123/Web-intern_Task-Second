const express = require("express");
const myMiddleware = require("./middleware/middle");
const morgan = require("morgan");

const app = express();

let courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

app.use(express.json());

app.use(myMiddleware);

app.use(morgan("tiny"));

// get, post, put, delete,

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("About Express");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

//post

app.post("/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});

//put

app.put("/courses/:coursename", (req, res) => {
  let course = courses.find((course) => course.name === req.params.coursename);
  console.log(course.name + "_________________________________");
  course.name = req.body.name;
  res.send(course);
});

// app.delete("/courses/:coursename", (req, res) => {
//   let updateCourses = courses.filter(
//     (course) => course.name !== req.params.coursename
//   );
//   courses = updateCourses;
//   res.send(updateCourses);
// });

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  const index = courses.indexOf(course);

  courses.splice(index, 1);

  res.send(course);
});

// Route Parameter
app.get("/courses/:id", (req, res) => {
  console.log(req.params);
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  res.send(course);
});

app.listen(3000, () => {
  console.log("Sever is listen 3000");
});
