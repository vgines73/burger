const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Parse application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start Server
app.listen(PORT, function() {
    console.log("Listening on Server: http://localhost:" + PORT);
});