import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/mlm-system");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB