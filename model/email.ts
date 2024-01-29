// models/Post.ts
import mongoose, { Document, Schema } from "mongoose";

const Email = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Email || mongoose.model("Email", Email);
