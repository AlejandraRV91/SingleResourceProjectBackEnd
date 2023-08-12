/** @format */

// DEPENDENCIES
const app = require("./App.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
