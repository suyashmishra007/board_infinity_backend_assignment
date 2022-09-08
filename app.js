const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

// ! To parse the incoming requests with JSON.
app.use(express.json());

// ! IMPORTING DB
require("./db/connection");

// ! IMPORTING ROUTER
const router = require("./router/routes");
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
