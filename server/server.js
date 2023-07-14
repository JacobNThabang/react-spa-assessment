import express from "express";
import cors from "cors";
import "./loadEnv.js";
import brands from "./routes/brand.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use("/brand", brands);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});