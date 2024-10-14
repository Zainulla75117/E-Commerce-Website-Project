import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Database Successfully: ${conn.connection.host}`.green);
    } catch (error) {
        console.log(`Error in Database: ${error.message}`.bgRed.white);
    }
};

export default connectDB;
