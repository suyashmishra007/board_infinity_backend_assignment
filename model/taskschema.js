const mongoose = require("mongoose");
const ttl = require("mongoose-ttl");

// ! ms convert string to milisecond , eg '1m' => 60000 , 10000 => 10000 .
const ms = require("ms");

// ! Creating schema which maps to a MongoDB collection and defines the shape of the documents within that collection.
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true, // ! setting it true means, we cant skip is
  },
  taskDescription: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  creator: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

taskSchema.plugin(ttl, { ttl: ms("1m") });

// ! To use our schema definition, we need to convert our taskSchema into a Model we can work with.
const Task = mongoose.model("TASK", taskSchema);
module.exports = Task;
