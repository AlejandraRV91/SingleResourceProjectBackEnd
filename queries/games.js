/** @format */

const db = require("../db/dbConfig");

/**
 * Retrieves all games from the database.
 * @returns {Promise<Array>} Array of objects representing games.
 * @throws {Error} If an error occurs during the query.
 */
async function getAllGames() {
	try {
		return await db.manyOrNone("SELECT * FROM game");
	} catch (error) {
		throw error;
	}
}

/**
 * Creates a new game in the database.
 * @param {string} title - Title of the game.
 * @param {string} picture - URL of the game's image.
 * @param {boolean} isFavorite - Indicates if the game is a favorite.
 * @param {string} rating - Game's rating.
 * @param {string} genre - Game's genre.
 * @param {Date} creationDate - Game's creation date.
 * @returns {Promise<Object>} Object representing the newly created game.
 * @throws {Error} If an error occurs during the insertion.
 */
async function createGame(
	title,
	picture,
	isFavorite,
	rating,
	genre,
	creationDate
) {
	try {
		return await db.one(
			`
            INSERT INTO game (title, picture, is_favorite, rating, genre, creation_date)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `,
			[title, picture, isFavorite, rating, genre, creationDate]
		);
	} catch (error) {
		throw error;
	}
}

/**
 * Retrieves a game by its ID.
 * @param {number} gameId - ID of the game to retrieve.
 * @returns {Promise<Object>} Object representing the found game.
 * @throws {Error} If the game is not found or if an error occurs during the query.
 */
async function getGameById(gameId) {
	try {
		return await db.one("SELECT * FROM game WHERE id = $1", [gameId]);
	} catch (error) {
		throw error;
	}
}

/**
 * Updates a game's information in the database.
 * @param {number} gameId - ID of the game to update.
 * @param {string} title - New title of the game.
 * @param {string} picture - New URL of the game's image.
 * @param {boolean} isFavorite - Indicates if the game is a favorite.
 * @param {string} rating - New rating of the game.
 * @param {string} genre - New genre of the game.
 * @param {Date} creationDate - New creation date of the game.
 * @returns {Promise<Object>} Object representing the updated game.
 * @throws {Error} If the game is not found or if an error occurs during the update.
 */
async function updateGame(
	gameId,
	title,
	picture,
	isFavorite,
	rating,
	genre,
	creationDate
) {
	try {
		return await db.one(
			`
            UPDATE game
            SET title = $1, picture = $2, is_favorite = $3, rating = $4, genre = $5, creation_date = $6
            WHERE id = $7
            RETURNING *;
        `,
			[title, picture, isFavorite, rating, genre, creationDate, gameId]
		);
	} catch (error) {
		throw error;
	}
}

/**
 * Deletes a game from the database by its ID.
 * @param {number} gameId - ID of the game to delete.
 * @throws {Error} If the game is not found or if an error occurs during deletion.
 */
async function deleteGame(gameId) {
	try {
		await db.none("DELETE FROM game WHERE id = $1", [gameId]);
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createGame,
	getAllGames,
	getGameById,
	updateGame,
	deleteGame,
};
