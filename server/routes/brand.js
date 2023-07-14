import express from "express";
import imageSchema from "./models/image.js"
import fs from "fs";
import path from "path";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

// This section will help you get a list of all the brands.
router.get("/", async (req, res) => {
    try {
        let collection = db.collection("trusted-by-brands");
        let results = await collection.find({}).toArray();
        res.send(results).status(200);
    } catch (error) {
        console.log("Server Error occured ", error.message);
        res.send().status(404);
    }
});

// This section will help you get a single brand by id
router.get("/:id", async (req, res) => {
    try {
        let collection = db.collection("trusted-by-brands");
        let query = { _id: new ObjectId(req.params.id) };
        let result = await collection.findOne(query);

        if (!result) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (error) {
        console.log("Server Error occured ", error.message);
        res.status(404).send();
    }
});

// This section will help you create a new brand.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.body.name + ".png")),
                contentType: 'image/png'
            }
        };

        let collection = db.collection("trusted-by-brands");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (error) {
        console.log("Server Error occured ", error.message);
        res.send().status(404);
    }
});

export default router;