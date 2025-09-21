const db = require("../utils/db-connection");

const postStudent = (req, res) => {
  const { name, email, age } = req.body;
  const postStudentQuery =
    "Insert into Students(name,email,age) values (?,?,?);";

  db.execute(postStudentQuery, [name, email, age], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }

    console.log("Successfully added the Student");
    res.status(201).send(`Successfully added   ${name}`);
  });
};
const getStudent = (req, res) => {
  const getQuery = `Select * from Students`;
  db.execute(getQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    console.log(`Successfully Retrieved Students data.`);
    res.status(201).json(results);
  });
};
const getStudentWithId = (req, res) => {
  const { id } = req.params;
  const getStudentWithIdQuery = "Select * from Students where id = ?";

  db.execute(getStudentWithIdQuery, [id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Student not found.");
    }
    res.status(200).json(results);
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const updateStudentQuery =
    "Update Students set name =?,email=?,age=? where id = ?";

  db.execute(updateStudentQuery, [name, email, age, id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Student not found.");
    }
    res.status(200).json(`${name} updated`);
  });
};
const deleteStudent = (req, res) => {
  const { id } = req.params;
  const deleteQuery = "Delete from Students where id = ?";

  db.execute(deleteQuery, [id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Student not found");
    }
    res.status(200).send(`Student Deleted`);
  });
};
module.exports = {
  postStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  getStudentWithId,
};
