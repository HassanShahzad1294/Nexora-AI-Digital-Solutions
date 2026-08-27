const express = require("express");
const contactRoutes = require("./routes/contact");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);


// =========================
// MONGODB CONNECTION
// =========================

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected ✅");
    })
    .catch((error) => {
        console.log("MongoDB Error:", error.message);
    });


// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
    res.send("Nexora Backend is Running 🚀");
});


// =========================
// SERVER
// =========================

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});