import mongoose from "mongoose";
import { monogo_uri } from "./config.js";
const connectDB = () => {
    try {
        mongoose.connect(monogo_uri)
    } catch (error) {
        console.log("MongoDB Connection Error:",error);
        process.exit(1)
    }
}

export default connectDB