import express from "express";
import path from "path";
import { giftData } from "../data/gifts";
import { dirname } from "path";

const __d = dirname(__filename);

const giftsRouter = express.Router();

giftsRouter.get("/", (req, res) => {
  res.status(200).json(giftData);
});

giftsRouter.get("/:giftID", (req, res) => {
  res.status(200).sendFile(path.resolve(__d, "../../client/public/gift.html"));
});

export default giftsRouter;
