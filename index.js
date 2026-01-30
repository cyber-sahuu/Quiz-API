const express = require("express");
const path = require("path");
const cors = require("cors");
const quizAPI = require("./quiz.api");
const admin = require("./quiz.admin");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 30487;
let totalRequests = 0;

app.use((req, res, next) => {
  totalRequests++;
  console.log(`[${totalRequests}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quiz", (req, res) => {
  const id = Date.now().toString();
  const quiz = quizAPI.getQuiz(id);
  if (!quiz) return res.json({ status: false });
  res.json({ status: true, sessionID: id, ...quiz });
});

app.post("/quiz/answer", (req, res) => {
  const { sessionID, answer } = req.body;
  const result = quizAPI.submit(sessionID, answer);
  if (!result) return res.json({ status: false });
  res.json({ status: true, ...result });
});

app.post("/quiz/add", admin.addQuiz);

app.listen(PORT, () => {
  console.log(`Quiz API running on port ${PORT}`);
});
