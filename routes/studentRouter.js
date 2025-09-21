const express = require("express");

const router = express.Router();
const studentController = require("../controller/studentController");
router.post("/", studentController.postStudent);
router.get("/", studentController.getStudent);
router.get("/:id", studentController.getStudentWithId);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
module.exports = router;
