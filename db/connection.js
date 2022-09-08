const mongoose = require("mongoose");

// ! connecting to mongodb atlas.
const dotenv = require("dotenv");
const path = require("path");

const envpath = path.join(__dirname, "../config.env");
dotenv.config({ path: envpath });

const DB = "mongodb+srv://suyash:suyashmishra@cluster0.wip7vrj.mongodb.net/todotasks?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((e) => {
    console.log("NOT CONNECTED");
    console.log(e);
  });
