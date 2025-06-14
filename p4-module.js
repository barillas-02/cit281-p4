const { data } = require('./p4-data.js');


function getQuestions() {
    return data.map(obj => obj.question);
  }
  
function getAnswers() {
    return data.map(obj => obj.answer);
  }
  
function getQuestionsAnswers() {
    return data.map(obj => ({ ...obj })); // Creates a shallow clone of each object
  }
  
function getQuestion(number = '') {
    const result = {
      error: '',
      question: '',
      number: ''
    };
  
    if (!Number.isInteger(number)) {
      result.error = 'Question number must be an integer';
      return result;
    }
  
    if (number < 1) {
      result.error = 'Question number must be >= 1';
      return result;
    }
  
    if (number > data.length) {
      result.error = `Question number must be less than the number of questions (${data.length})`;
      return result;
    }
  
    result.question = data[number - 1].question;
    result.number = number;
    return result;
  }

  function getAnswer(number = '') {
    const result = {
      error: '',
      answer: '',
      number: ''
    };
  
    if (!Number.isInteger(number)) {
      result.error = 'Answer number must be an integer';
      return result;
    }
  
    if (number < 1) {
      result.error = 'Answer number must be >= 1';
      return result;
    }
  
    if (number > data.length) {
      result.error = `Answer number must be less than the number of questions (${data.length})`;
      return result;
    }
  
    result.answer = data[number - 1].answer;
    result.number = number;
    return result;
  }
  
function getQuestionAnswer(number = '') {
    const result = {
      error: '',
      question: '',
      answer: '',
      number: ''
    };
  
    if (!Number.isInteger(number)) {
      result.error = 'Question number must be an integer';
      return result;
    }
  
    if (number < 1) {
      result.error = 'Question number must be >= 1';
      return result;
    }
  
    if (number > data.length) {
      result.error = `Question number must be less than the number of questions (${data.length})`;
      return result;
    }
  
    result.question = data[number - 1].question;
    result.answer = data[number - 1].answer;
    result.number = number;
    return result;
  }

  function deleteQuestionAnswer(number) {
    if (!Number.isInteger(number) || number < 1 || number > data.length) {
      return { error: "Question/answer number must be an integer", message: "", number: "" };
    }
    const deleted = data.splice(number - 1, 1);
    return { error: "", message: `Question ${number} deleted`, number };
  }

  export {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  };

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


// deleteQuestionAnswer()
if (testDelete) {
    testing(
      "deleteQuestionAnswer",
      { d: "()", f: deleteQuestionAnswer() },
      { d: "(0)", f: deleteQuestionAnswer(0) },
      { d: "(1)", f: deleteQuestionAnswer(1) },
      { d: "(0)", f: deleteQuestionAnswer(4) }
    );
    console.log(data);
  }
  
  
  //** Testing deleteQuestionAnswer **
  //-------------------------------

  
