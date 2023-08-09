/** @format */

const db = require("../db/dbConfig");

async function getAllGames() {
	try {
		return await db.manyOrNone("SELECT * FROM game");
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getAllGames,
};
