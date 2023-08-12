/** @format */

const express = require("express");
const router = express.Router();
const {
	getAllGames,
	createGame,
	getGameById,
	updateGame,
	deleteGame,
} = require("../queries/games");

const {
	checkTitle,
	checkPicture,
	checkBoolean,
	checkRating,
	checkGenre,
	checkCreationDate,
} = require("../validations/gameValidations");

// GET /games
router.get("/", async (req, res) => {
	try {
		const games = await getAllGames();
		res.json(games);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// POST /games
router.post(
	"/",
	checkTitle,
	checkPicture,
	checkBoolean,
	checkRating,
	checkGenre,
	checkCreationDate,
	async (req, res) => {
		const { title, picture, is_favorite, rating, genre, creation_date } =
			req.body;
		try {
			const newGame = await createGame(
				title,
				picture,
				is_favorite,
				rating,
				genre,
				creation_date
			);
			res.status(201).json(newGame);
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
);

// GET /games/:id
router.get("/:id", async (req, res) => {
	const gameId = req.params.id;
	try {
		const game = await getGameById(gameId);
		res.json(game);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// PUT /games/:id
router.put(
	"/:id",
	checkTitle,
	checkPicture,
	checkBoolean,
	checkRating,
	checkGenre,
	checkCreationDate,
	async (req, res) => {
		const gameId = req.params.id;
		const { title, picture, is_favorite, rating, genre, creation_date } =
			req.body;
		try {
			const updatedGame = await updateGame(
				gameId,
				title,
				picture,
				is_favorite,
				rating,
				genre,
				creation_date
			);
			res.json(updatedGame);
		} catch (error) {
			console.error("Error:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
);

// DELETE /games/:id
router.delete("/:id", async (req, res) => {
	const gameId = req.params.id;
	try {
		await deleteGame(gameId);
		res.status(204).send();
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
