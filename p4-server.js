const express = require("express");
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
  updateQuestionAnswer,
  deleteQuestionAnswer
} = require("./p4-module");

const app = express();
app.use(express.json());

app.get("/cit/question", (req, res) => {
  res.json({
    error: "",
    statusCode: 200,
    questions: getQuestions()
  });
});

app.get("/cit/answer", (req, res) => {
  res.json({
    error: "",
    statusCode: 200,
    answers: getAnswers()
  });
});

app.get("/cit/questionanswer", (req, res) => {
  res.json({
    error: "",
    statusCode: 200,
    questions_answers: getQuestionsAnswers()
  });
});

app.get("/cit/question/:number", (req, res) => {
  const number = parseInt(req.params.number);
  const question = getQuestion(number);
  if (question) {
    res.json({
      error: "",
      statusCode: 200,
      question,
      number
    });
  } else {
    res.status(404).json({
      error: "Question not found",
      statusCode: 404
    });
  }
});

app.get("/cit/answer/:number", (req, res) => {
  const number = parseInt(req.params.number);
  const answer = getAnswer(number);
  if (answer) {
    res.json({
      error: "",
      statusCode: 200,
      answer,
      number
    });
  } else {
    res.status(404).json({
      error: "Answer not found",
      statusCode: 404
    });
  }
});

app.get("/cit/questionanswer/:number", (req, res) => {
  const number = parseInt(req.params.number);
  const qa = getQuestionAnswer(number);
  if (qa) {
    res.json({
      error: "",
      statusCode: 200,
      ...qa,
      number
    });
  } else {
    res.status(404).json({
      error: "Question/answer not found",
      statusCode: 404
    });
  }
});

app.post("/cit/question", (req, res) => {
  const { question, answer } = req.body;
  const result = addQuestionAnswer({ question, answer });
  if (result.error) {
    res.status(400).json(result);
  } else {
    res.status(201).json({
      error: "",
      statusCode: 201,
      number: result.number
    });
  }
});

app.put("/cit/question", (req, res) => {
  const { number, question, answer } = req.body;
  const result = updateQuestionAnswer({ number, question, answer });
  if (result.error) {
    res.status(400).json(result);
  } else {
    res.status(200).json({
      error: "",
      statusCode: 200,
      number: result.number
    });
  }
});

app.delete("/cit/question/:number", (req, res) => {
  const number = parseInt(req.params.number);
  const result = deleteQuestionAnswer(number);
  if (result.error) {
    res.status(400).json(result);
  } else {
    res.status(200).json({
      error: "",
      statusCode: 200,
      number: result.number
    });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    statusCode: 404
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
