import express = require("express");

const app = express();

/**
 * TODO
 * Setup server parsing and logging
 */

/**
 * API Routes
 */
/**
 * TODO
 * Abstract routes into cont
 */
app.get("/", (req, res) => {
    res.send("<p>Hello world!</p>");
});

export { app };
