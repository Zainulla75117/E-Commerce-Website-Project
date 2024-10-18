import dotenv from "dotenv";
import express from "express"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

const app = express();

connectDB();

//Middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);

dotenv.config();

app.get("/", (req, res) => {
    res.send({
        message: "hi",
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});