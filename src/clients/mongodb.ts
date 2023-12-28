import mongoose, { connect } from 'mongoose'


export const mongoClient = () => {
  mongoose.set("strictQuery", false);
  return connect(process.env.MONGO_URL!, {})
}