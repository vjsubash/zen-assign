const express = require("express");
const router = express.Router();

const { mentor } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all mentors");
  try {
    const data = await mentor.find();
    res.send(data);
  } catch (error) {
    console.log(error, "error");
    res.status(400).send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("mentor create route");
  try {
    const data = await mentor.create({
      name: req.body.name,
      email: req.body.email,
      expertise: req.body.expertise,
      studentsAssign: req.body.studentsAssign,
    });
    res.send(data);
  } catch (error) {
    console.log(error, "error");
    res.status(400).send("Error");
  }
});

router.get("/:id", async (req, res) => {
  console.log("show all students for particular mentor");
  try {
    const ment = await mentor
      .findById(req.params.id)
      .populate("studentsAssign", "name");
    res.send(ment);
  } catch (error) {
    console.log(error, "error");
    res.status(500).send("error in for 1 mentor get all students");
  }
});
module.exports = router;