import mongoose from 'mongoose';

export function objectId(id: string) {
  return new mongoose.Types.ObjectId(id);
}
