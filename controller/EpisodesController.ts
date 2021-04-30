import express from "express";
import { getEpisodes, getEpisodeById } from "../repository/EpisodesRepository";
const EpisodesRouter = express.Router();

EpisodesRouter.get("/episodes", async (req, res) => {
  try {
    const episodes = await getEpisodes();
    res.send(episodes);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

EpisodesRouter.get("/episodes/:id", async (req, res) => {
  try {
    const episode = await getEpisodeById(req.params.id);
    res.send(episode);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

export default EpisodesRouter;
