const express = require("express");
const router = express.Router();

const { student, mentor } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all Students");
  try {
    const data = await student.find();
    res.send(data);
  } catch (error) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("Student create route");
  try {
    const data = await student.create({
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      mentorAssign: req.body.mentorAssign,
    });
    res.send(data);
  } catch (error) {
    console.log(e.message, "error");
    res.status(500).send("Error in student POST");
  }
});

module.exports = router;