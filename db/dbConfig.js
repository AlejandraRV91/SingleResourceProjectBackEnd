/** @format */

const postGresPromise = require("pg-promise")();
require("dotenv").config();

let conect = {
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
	user: process.env.PG_USER,
};

const db = postGresPromise(conect);

module.exports = db;
