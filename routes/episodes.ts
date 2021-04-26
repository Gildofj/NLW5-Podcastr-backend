import express from "express";
import Episodes from "../models/Episodes";

const router = express.Router();

router.get("/episodes", async (req, res) => {
  const episodes = await Episodes.find();
  res.send(episodes);
});

router.get("/episodes/:id", async (req, res) => {
  try {
    const episode = await Episodes.findOne({ _id: req.params.id });
    res.send(episode);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

export default router;
