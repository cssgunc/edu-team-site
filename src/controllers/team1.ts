import express from "express";
import request from "request";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<p>Hello world from team1!</p>");
});

export default router;
