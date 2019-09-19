import express from "express";
import request from "request";

const router = express.Router();

import tutorial from "./tutorial";

router.use("/tutorial", tutorial);

export default router;
