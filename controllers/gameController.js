/** @format */

const express = require("express");
const router = express.Router();
const { getAllGames } = require("../queries/game");

router.get("/", async (req, res) => {
	try {
		const games = await getAllGames();
		res.json(games);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
