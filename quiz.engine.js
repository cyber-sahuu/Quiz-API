const data = require("./quiz.data");

module.exports.createSession = (id, quiz) => {
  data.sessions[id] = {
    answer: quiz.answer,
    start: Date.now()
  };
};

module.exports.checkAnswer = (id, ans) => {
  const s = data.sessions[id];
  if (!s) return null;

  const time = ((Date.now() - s.start) / 1000).toFixed(1);
  const correct = ans.toUpperCase() === s.answer;

  delete data.sessions[id];

  return { correct, time, answer: s.answer };
};
