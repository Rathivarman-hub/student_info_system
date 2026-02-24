import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => {
      console.log(`Error:${err}`);
    });
};
export default db;
