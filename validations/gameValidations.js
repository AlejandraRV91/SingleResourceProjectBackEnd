/** @format */

const Joi = require("joi");

const checkTitle = (req, res, next) => {
	const schema = Joi.string().trim().required();
	const { error } = schema.validate(req.body.title);
	if (error) {
		res.status(400).json({
			error: "Title is required and must be a string",
		});
	} else {
		next();
	}
};

const checkPicture = (req, res, next) => {
	const schema = Joi.string().uri();
	const { error } = schema.validate(req.body.picture);
	if (error) {
		res.status(400).json({ error: "Invalid picture URL" });
	} else {
		next();
	}
};

const checkBoolean = (req, res, next) => {
	if (
		req.body.hasOwnProperty("is_favorite") &&
		(req.body.is_favorite === "true" ||
			req.body.is_favorite === "false" ||
			req.body.is_favorite === true ||
			req.body.is_favorite === false)
	) {
		next();
	} else {
		res.status(400).json({ error: "is_favorite must be a boolean value" });
	}
};

const checkRating = (req, res, next) => {
	const validRatings = ["EC", "E", "E10+", "T", "M", "AO"];
	if (req.body.rating && validRatings.includes(req.body.rating)) {
		next();
	} else {
		res.status(400).json({ error: "Invalid rating" });
	}
};

const checkGenre = (req, res, next) => {
	const validGenres = [
		"Action",
		"Adventure",
		"RPG",
		"Sports",
		"Puzzle",
		"Simulation",
		"Strategy",
		"Survival horror",
		"Indie",
		"Sandbox",
		"Other",
	];
	if (req.body.genre && validGenres.includes(req.body.genre)) {
		next();
	} else {
		res.status(400).json({ error: "Invalid genre" });
	}
};

const checkCreationDate = (req, res, next) => {
	const schema = Joi.date().max("now").iso();
	const { error } = schema.validate(req.body.creation_date);
	if (error) {
		res.status(400).json({ error: "Invalid creation date" });
	} else {
		next();
	}
};

module.exports = {
	checkTitle,
	checkPicture,
	checkBoolean,
	checkRating,
	checkGenre,
	checkCreationDate,
};
