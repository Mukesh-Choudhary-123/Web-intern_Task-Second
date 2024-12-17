const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Student } = require("../Models/studentsModel");

// read
router.get("/", async (req, res) => {
  let students = await Student.find();
  res.send(students);
});

// write
router.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    isEnrolled: req.body.isEnrolled,
    phone: req.body.phone,
  });
  await student.save();
  res.send(student);
});

//update
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isEnrolled: req.body.isEnrolled,
      phone: req.body.phone,
    },
    { new: true }
  );

  if (!student)
    return res
      .status(404)
      .send("The Category with the given ID was not exists");

  await student.save();
  res.send(student);
});

//delete
router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student)
    return res
      .status(404)
      .send("The Category with the given ID was not exists");
  res.send(student);
});

//get particular category
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

module.exports = router;
