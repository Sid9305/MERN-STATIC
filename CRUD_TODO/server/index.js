// importing : cjs
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./models/Todo");
// port number set
const PORT = 8001;

// environment file configure
require("dotenv").config();

// initialise server
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// connect mongodb via mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

//   Adding data to database
app.post("/", async (req, res) => {
  const task = req.body.title;
  if (!task) {
    return res.status(400).send("Task title is required");
  }
  const newTask = new TodoModel({
    title: task,
  });

  try {
    await newTask.save();
    res.send("Todo Saved");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving todo");
  }
});

// read
app.get("/display", async (req, res) => {
  try {
    const todos = await TodoModel.find();
    // if any data is there, it gets stored in todos, nhi h toh error deta hai
    res.json(todos);
  } catch (error) {
    console.log(error);
    // server side error : 500
    res.status(500).send("Error");
  }
});

// put request for updating todo task

// 1 , 2 , 3 , 4
// id = 5
app.put("/update/:id", async (req, res) => {
  const id = req.params.id; //id
  const updatedTask = req.body.title; //updated task
  try {
    const update = await TodoModel.findById(id);
    // it returns the object when id is matched

    if (!update) {
      return res.status(404).send("Task not found");
    }
    // update mein data h, means data mil gayi
    update.title = updatedTask; //reassign task
    await update.save(); // stores in db
    res.send("Task updated"); // hogya bhai khatam kaam update ka
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// delete request
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await TodoModel.findByIdAndDelete(id).exec();
  // exec it reflects the output in the database
  res.send("Deleted");
});

// 8001
// react  : 3000
app.listen(PORT, () => {
  console.log(`Server is running on port 8001`);
});
