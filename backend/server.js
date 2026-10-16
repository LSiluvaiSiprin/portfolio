const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// HOME ROUTE
app.get("/", (req, res) => {
    res.status(200).send("Backend server is running!");
});

// CONTACT API
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate fields
    if (
        !name?.trim() ||
        !email?.trim() ||
        !subject?.trim() ||
        !message?.trim()
    ) {
        return res.status(400).json({
            message: "Please fill all fields.",
        });
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
        return res.status(400).json({
            message: "Please enter a valid email address.",
        });
    }

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email.trim(),
            subject: `Portfolio Contact: ${subject.trim()}`,
            text: `
Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}
      `,
        });

        console.log("Email sent successfully!");

        return res.status(200).json({
            message: "Message sent successfully!",
        });
    } catch (error) {
        console.error("Email error:", error.message);

        return res.status(500).json({
            message: "Unable to send your message. Please try again later.",
        });
    }
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Email configuration missing. Check your .env file.");
    }
});