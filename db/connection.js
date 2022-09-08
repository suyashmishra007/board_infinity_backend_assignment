const mongoose = require("mongoose");

// ! connecting to mongodb atlas.
const dotenv = require("dotenv");
const path = require("path");

const envpath = path.join(__dirname, "../config.env");
dotenv.config({ path: envpath });

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((e) => {
    console.log("NOT CONNECTED");
    console.log(e);
  });
