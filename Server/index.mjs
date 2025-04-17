import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRouter from './api/email.js'

dotenv.config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/email", emailRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
