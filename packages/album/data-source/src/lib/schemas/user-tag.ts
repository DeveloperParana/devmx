import mongoose from 'mongoose';

export const userTag = {
  x: Number,
  y: Number,
  user: {
    id: mongoose.Schema.Types.ObjectId,
    displayName: String,
    name: String,
  },
};
