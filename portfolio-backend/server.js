const express = require("express");
const cors = require("cors");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Load and parse the resume PDF
const pdfPath = "C:/Users/saipr/Downloads/portfolio/portfolio/resume.pdf";
let resumeText = "";

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

// POST endpoint
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
        model: "deepseek-r1-distill-qwen-32b",
        messages: [{ role: "user", content: prompt }],
        temperature: 0
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`
        }
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

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
