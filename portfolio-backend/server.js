const express = require("express");
const cors = require("cors");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const axios = require("axios");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

const pdfPath = process.env.PDF_PATH;
let resumeText = "";

// Load and parse the resume PDF
fs.readFile(pdfPath, async (err, data) => {
  if (err) {
    console.error("Error reading PDF:", err);
    return;
  }
  try {
    const parsed = await pdfParse(data);
    resumeText = parsed.text;
  } catch (e) {
    console.error("PDF parsing error:", e);
  }
});

app.post("/ask", async (req, res) => {
  const question = req.body.question;

  const prompt = `
You are an assistant answering based on the resume below.
Only respond with a direct answer (like rank, CGPA, name, etc.). Do not explain or say anything else.

Resume:
${resumeText}

User: ${question}
Answer:
  `;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: process.env.GROQ_MODEL,
        messages: [{ role: "user", content: prompt }],
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    const raw = response.data.choices[0].message.content;
    const cleaned = raw.replace(/<think>.*?<\/think>/gs, "").trim();

    res.json({ answer: cleaned });
  } catch (error) {
    console.error("Groq API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with LLM." });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
