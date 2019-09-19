import express from "express";
import request from "request";

const router = express.Router();

import namenotfound from "./namenotfound";
import tutorial from "./tutorial";

router.use("/tutorial", tutorial);
router.use("/namenotfound", namenotfound);

export default router;
