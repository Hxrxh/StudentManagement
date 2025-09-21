const db = require("../utils/db-connection");
const Student = require("../models/studentTable");
const postStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name: name,
      email: email,
    });

    res.status(201).send("Student posted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to make an entry");
  }
};
const getStudent = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).send("No students");
  }
};
const getStudentWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not fouond");
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).send("User not found");
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found.");
    }
    student.name = name;
    student.email = email;
    await student.save();
    res.status(200).send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send("unable to update the student");
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = Student.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("Student deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to delete ");
  }
};
module.exports = {
  postStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  getStudentWithId,
};
