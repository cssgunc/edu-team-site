import bodyParser = require("body-parser");
import express = require("express");
import path from "path";

import index from "./controllers/index";

const app = express();

/**
 * Express Middleware Configuration
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// app.use(express.static("/views"));
app.use("/static", express.static("static"));

/**
 * API Routes
 */
app.use("/", index);

app.get("/", (req, res) => {
    res.render("index.ejs", {name: ""});
});

app.get("/:name", (req, res) => {
    res.render("index.ejs", {name: req.params.name});
});

export { app };
