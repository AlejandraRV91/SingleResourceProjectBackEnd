const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const gameController = require("./controllers/gameController");

app.use(cors());
app.use(express.json());

app.use("/games", gameController);

module.exports = app;
