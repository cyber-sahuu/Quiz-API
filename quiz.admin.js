const data = require("./quiz.data");

module.exports.addQuiz = (req, res) => {
  const { question, A, B, C, D, answer } = req.body;

  if (!question || !A || !B || !C || !D || !["A", "B", "C", "D"].includes(answer)) {
    return res.json({ status: false });
  }

  const quiz = { question, A, B, C, D, answer };
  data.quizzes.push(quiz);

  res.json({ status: true, slot: data.quizzes.length });
};
