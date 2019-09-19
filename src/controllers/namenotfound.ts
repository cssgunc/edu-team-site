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

export default router;
