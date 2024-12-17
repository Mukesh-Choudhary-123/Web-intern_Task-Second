const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const { Category } = require("../Models/categoriesModel");

// read
router.get("/", async (req, res) => {
  let categories = await Category.find();
  res.send(categories);
});

// write
router.post("/", async (req, res) => {
  const category = new Category({ name: req.body.name });
  await category.save();
  res.send(category);
});

//update
router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    { new: true }
  );

  if (!category)
    return res
      .status(404)
      .send("The Category with the given ID was not exists");

  await category.save();
  res.send(category);
});

//delete
router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category)
    return res
      .status(404)
      .send("The Category with the given ID was not exists");
  res.send(category);
});

//get particular category
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.send(category);
});

module.exports = router;
