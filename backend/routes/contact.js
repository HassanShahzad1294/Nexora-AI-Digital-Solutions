const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();


// =========================
// POST CONTACT FORM
// =========================

router.post("/", async (req, res) => {

    try {

        const { name, email, subject, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Message saved successfully!"
        });

    } catch (error) {

        console.log("Contact Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Something went wrong."
        });

    }

});


module.exports = router;