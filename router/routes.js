const express = require("express");

// ! Create a new router object in your program to handle requests.
const router = express.Router();

// ! Importing task schema.
const Task = require("../model/taskschema");

// ! Entry Point.
router.get("/", (req, res) => {
  res.send(" WELCOME !!");
});

// ! Add a task to db.
router.post("/add", async (req, res) => {
  //  ! Checking if any required field in empty , if it is empty , return 422.
  const { taskName, taskDescription, creator } = req.body;
  if (!taskName || !taskDescription || !creator) {
    return res.status(422).json({ error: "Fill all required fields" });
  }
  try {
    const task = new Task(req.body);
    const result = await task.save();
    // Status code : Created.
    res.status(201).json(result);
  } catch (error) {
    // Status code : Not found.
    res.status(404).send(error);
  }
});

// ! Get all the todo available in the DB.
router.get("/list", async (req, res) => {
  try {
    const datas = await Task.find();
    res.send(datas);
  } catch (err) {
    // Status code : Bad request.
    res.status(400).send(err);
  }
});

// ! if user enter any other endpoint.
router.get("*", (req, res) => {
  res.send("OOPS !! PAGE NOT FOUND ");
});

module.exports = router;
