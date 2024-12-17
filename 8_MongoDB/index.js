const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testDataBase")
  .then(() => console.log("Database connected successfully !"))
  .catch((err) => console.error("Error connection :- " + err));

// Schema

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 200,
    unique: true,
  },
  tags: {
    type: Array,
    validate: {
      validator: function (tags) {
        tags.length > 1;
      },
    },
  },
  category: {
    type: String,
    require: true,
    enum: ["DSA", "Web", "Mobile", "Data Science"],
  },
  creator: { type: String, require: true },
  publishedDate: { type: Date, default: Date.now },
  isPublished: { type: Boolean, require: true },
  rating: {
    type: Number,
    require: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "CRUD Operation",
    tags: ["express", "mongodb"],
    category: "Web",
    creator: "Mukun Kumar",
    isPublished: false,
    rating: 4.5,
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    for (field in error.errors) {
      console.log(error.errors[field]);
    }
  }
}

createCourse();

async function getCourse() {
  const courses = await Course.find({ creator: "Mukun Kumar" });

  console.log(courses);
}
// getCourse();

async function updateCourse(id) {
  let course = await Course.findById(id);

  if (!course) return;

  course.name = "c++";

  course.creator = "aman";

  const updatedCourse = await course.save();

  console.log(updatedCourse);
}
// updateCourse("676103726513a1e466533af9");

async function deleteCourse(id) {
  const course = await Course.findByIdAndDelete(id);

  console.log(course);
}

// deleteCourse("676103726513a1e466533af9");
