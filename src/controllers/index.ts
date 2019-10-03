import express from "express";
import request from "request";
import { sequelize } from "../db/sequelize";

const router = express.Router();

import namenotfound from "./namenotfound";
import tarheels from "./tarheels";
import team1 from "./team1";
import tutorial from "./tutorial";

router.use("/tutorial", tutorial);
router.use("/team1", team1);
router.use("/tarheels", tarheels);

router.use("/tutorial", tutorial);
router.use("/namenotfound", namenotfound);

router.get("/testdb", (req, res) => {
    sequelize.authenticate()
    .then(() => {
        res.send("DB Connection Test Success!");
    })
    .catch((err) => {
        res.send(`ERROR: DB connection failed!<br>${err}`);
    });
});

export default router;
