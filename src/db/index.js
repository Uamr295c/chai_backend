import mongoose from "mongoose";
import { DB_name } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGOO_URL}/${DB_name}`
    );
    console.log(
      `Mongoose connection !!! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to", error);
    process.exit(1);
  }
};

export default connectDB;
