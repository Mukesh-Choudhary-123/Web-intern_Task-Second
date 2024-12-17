const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 3, maxlength: 30 },
  isEnrolled: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    require: true,
    minlength: 10,
    maxlength: 25,
  },
});

const Student = mongoose.model("Student", studentSchema);

exports.Student = Student;
