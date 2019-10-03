import express from "express";
import request from "request";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<p>Hello world!</p>");
});

router.get("/cha", (req, res) => {
    const user = req.query.name;
    let responseHTML;

    if (user === "Claire") {
        responseHTML = "<p>Matcha Latte</p>";
    } else if (user === "Russell") {
        responseHTML = "<p>Sweet Tea</p>";
    } else {
        responseHTML = "<p>Iced Tea</p>";
    }
    res.send(responseHTML);
});

// Demo - Interacting with Database via Sequelize ORM
import { ProfileORM, sequelize } from "../db/sequelize";

router.get("/profiles", (req, res) => {
    // Get all Profile entries from DB
    ProfileORM.findAll()
    .then((profiles) => {
        const formattedProfileNames = profiles.map((p: ProfileORM) => `<li>${p.lastName}, ${p.firstName}</li>`);
        res.send(`<ol>${formattedProfileNames.join("")}</ol>`);
    })
    .catch((err) => {
        res.send(`ERROR: DB Query Failed. <br> ${err}`);
    });
});

// Demo Part 2 - Styled render with EJS templating view
router.get("/profiles/pretty", (req, res) => {
    // Get all Profile entries from DB
    ProfileORM.findAll()
    .then((profiles) => {
        const formattedProfileNames = profiles.map((p: ProfileORM) => `<li>${p.lastName}, ${p.firstName}</li>`);
        res.render("tutorialProfileView.ejs", {profiles});
    })
    .catch((err) => {
        res.send(`ERROR: DB Query Failed. <br> ${err}`);
    });
});

export default router;
