const data = require("./quiz.data");
const engine = require("./quiz.engine");

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

module.exports.getQuiz = (id) => {
  if (data.queue.length === 0) {
    data.queue = shuffle([...data.quizzes]);
  }

  const quiz = data.queue.shift();
  if (!quiz) return null;

  engine.createSession(id, quiz);

  return {
    question: quiz.question,
    A: quiz.A,
    B: quiz.B,
    C: quiz.C,
    D: quiz.D
  };
};

module.exports.submit = (id, ans) => engine.checkAnswer(id, ans);
