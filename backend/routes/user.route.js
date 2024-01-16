import express from "express";
import test from "node:test";

const router = express.Router();

router.get("/", test);

export default router;
