const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "questions.json");

// Helper to load questions
function loadQuestions() {
  if (fs.existsSync(DATA_FILE)) {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  }
  return [];
}

// Helper to save questions
function saveQuestions(questions) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(questions, null, 2));
}

let questions = loadQuestions(); // ✅ load saved questions on start

// Get all questions
app.get("/questions", (req, res) => {
  res.json(questions);
});

// Post a new question
app.post("/questions", (req, res) => {
  const newQuestion = { id: Date.now(), text: req.body.text, likes: 0, answers: [] };
  questions.push(newQuestion);
  saveQuestions(questions); // ✅ save after adding
  res.json(newQuestion);
});

// Like a question
app.post("/questions/:id/like", (req, res) => {
  const question = questions.find((q) => q.id == req.params.id);
  if (question) {
    question.likes++;
    saveQuestions(questions); // ✅ save after like
    res.json(question);
  } else {
    res.status(404).json({ message: "Question not found" });
  }
});

// Post an answer
app.post("/questions/:id/answers", (req, res) => {
  const question = questions.find((q) => q.id == req.params.id);
  if (question) {
    const newAnswer = { text: req.body.text, likes: 0 };
    question.answers.push(newAnswer);
    saveQuestions(questions); // ✅ save after answer
    res.json(question);
  } else {
    res.status(404).json({ message: "Question not found" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
