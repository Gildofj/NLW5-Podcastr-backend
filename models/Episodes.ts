import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema({
  url: String,
  type: String,
  duration: Number,
});

const episodesSchema = new Schema({
  title: String,
  members: String,
  published_at: String,
  thumbnail: String,
  description: String,
  file: fileSchema,
});

export default mongoose.model("Episode", episodesSchema);
