import express from "express";
import request from "request";

const router = express.Router();

import tarheels from "./tarheels";
import team1 from "./team1";
import tutorial from "./tutorial";

router.use("/tutorial", tutorial);
router.use("/team1", team1);
router.use("/tarheels", tarheels);

export default router;
