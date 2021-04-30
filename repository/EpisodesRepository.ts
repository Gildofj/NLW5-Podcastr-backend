import Episodes from "../models/Episodes";

export const getEpisodes = async () => {
  try {
    return await Episodes.find();
  } catch {
    throw new Error("Error fetching episodes!");
  }
};

export const getEpisodeById = async (id: String) => {
  try {
    return await Episodes.findOne({ _id: id });
  } catch {
    throw new Error("Post doesn't exist!");
  }
};
