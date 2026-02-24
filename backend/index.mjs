import express from "express";
import db from "./mongoose/db.js";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns";
import { studModel } from "./mongoose/schema.js";

dns.setServers(["1.1.1.1"]);
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
db();

app.post("/student", async (req, res) => {
  const { name, reg_no, age, ph_no, location, email } = req.body;
  try {
    const newData = new studModel({
      name,
      reg_no,
      age,
      ph_no,
      location,
      email,
    });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

app.get("/student", async (req, res) => {
  try {
    const retrieveData = await studModel.find();
    res.status(200).json(retrieveData);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

app.put("/student/:id", async (req, res) => {
  try {
    const { name, reg_no, age, ph_no, location, email } = req.body;
    const id = req.params.id;
    const updateData = await studModel.findByIdAndUpdate(
      id,
      {
        name,
        reg_no,
        age,
        ph_no,
        location,
        email,
      },
      { new: true },
    );
    if (!updateData) {
      return res.status(404).send({ message: "Data Not Found" });
    }
    res.json(updateData);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await studModel.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server connected successfully in port:${PORT}`);
});
