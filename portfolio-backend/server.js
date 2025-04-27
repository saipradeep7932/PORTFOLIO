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
const groqApiKey = process.env.GROQ_API_KEY;
const groqModel = process.env.GROQ_MODEL;

let resumeText = "";

// Function to load and parse the resume PDF
async function loadResume() {
  if (!pdfPath || !fs.existsSync(pdfPath)) {
    console.error("❌ PDF file not found or PDF_PATH is incorrect:", pdfPath);
    process.exit(1);
  }

  try {
    const data = fs.readFileSync(pdfPath);
    const parsed = await pdfParse(data);
    resumeText = parsed.text;
    console.log("✅ Resume loaded successfully!");
  } catch (error) {
    console.error("❌ Failed to parse PDF:", error);
    process.exit(1);
  }
}

// Initially load resume
loadResume();

// Watch for changes to the PDF and reload automatically
fs.watchFile(pdfPath, async (curr, prev) => {
  console.log("📄 Resume PDF changed, reloading...");
  await loadResume();
});

app.post("/ask", async (req, res) => {
  if (!resumeText) {
    return res.status(400).json({ error: "Resume not loaded. Please try again later." });
  }

  const question = req.body.question;
  if (!question) {
    return res.status(400).json({ error: "No question provided." });
  }

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
        model: groqModel,
        messages: [{ role: "user", content: prompt }],
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${groqApiKey}`,
        },
      }
    );

    const raw = response.data.choices[0].message.content;
    const cleaned = raw.replace(/<think>.*?<\/think>/gs, "").trim();
    res.json({ answer: cleaned });

  } catch (error) {
    console.error("Groq API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with LLM API." });
  }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
