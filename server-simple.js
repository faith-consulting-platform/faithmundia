const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, "dist/public")));

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// API Routes
app.post("/api/consultation-requests", async (req, res) => {
  try {
    const { name, email, organization, serviceType, budget, timeline, description } = req.body;
    
    // Basic validation
    if (!name || !email || !serviceType || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Send email notification
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Consultation Request - ${serviceType}`,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        `,
      });

      res.status(200).json({ 
        message: "Consultation request submitted successfully",
        id: Date.now() // Simple ID for now
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      res.status(500).json({ message: "Failed to send notification email" });
    }
  } catch (error) {
    console.error("Error processing consultation request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Catch-all handler: send back React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/public/index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
const port = parseInt(process.env.PORT || '5000', 10);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});