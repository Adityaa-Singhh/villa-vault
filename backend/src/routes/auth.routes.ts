import express from "express";

import { handleCodeExchange } from "../controllers/auth.controller";

const router = express.Router();

router.get("/callback", handleCodeExchange);

export default router;
