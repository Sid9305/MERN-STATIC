const mongoose = require("mongoose");
// creating todo schema

// todo schema is nothing but object of Schema class
// const arr = new Array()
// const schema = new mongoose.Schema()
// Schema stores the structure, takes structure
// structure : json : object

// schema is nothing but structure of my data (individual todo element)
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// data ka structure hai, kon store karta hai?
// humare models

// model() which is in mongoose
// model function hai, it is a factory method
// model() -> 1) model name aur 2) uska schema
// model name -> database name -> mongodb site pe

const TodoModel = new mongoose.model("todolist", TodoSchema);
module.exports = TodoModel;

// backend code : index.js
// data models : models folder