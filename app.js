/** @format */

const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const gameController = require("./controllers/gameController");

app.use(cors());
app.use(express.json());

app.use("/games", gameController);

app.get("/", (req, res) => {
	res.send("Welcome to the games app");
});

// 404 Route (Not found)
app.use((req, res, next) => {
	res.status(404).send("404 Page Not Found");
});

module.exports = app;
