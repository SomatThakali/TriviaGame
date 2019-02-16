// initialize questions for quiz
var questions = [
  {
    question: "What is the capital of Nepal? ",
    possibleAnswers: ["Pokhara", "Kathmandu", "Jomsom", "Delhi"],
    answer: 1
  },

  {
    question: "What is the capital of India? ",
    possibleAnswers: ["Delhi", "Mumbai", "Banglore", "Chennai"],
    answer: 0
  },

  {
    question: "What is the capital of USA? ",
    possibleAnswers: ["New York", "Boston", "Washingon DC", "Maryland"],
    answer: 2
  }
];

// get quiz elements
var currentQuestion = 0; // This holds the index of question
var totalQuestion = questions.length;

// helper function for displaying results
var hideFormTimeout;
function displayResult(rightOrWrong) {
  console.log(rightOrWrong);
  $("#forms").hide();
  $("#user-answer-message").text(rightOrWrong);
  $("#user-answer-message").show();
  setTimeout(function() {
    $("#user-answer-message").hide();
  }, 2000);
  hideFormTimeout = setTimeout(function() {
    $("#forms").show();
  }, 2000);
}

// helper function for displaying finish message
function displayFinishMessage(finish) {
  $("#gameFinishMessage").text(finish);

  setTimeout(() => {
    console.log("show game message timeout");
    $("#gameFinishMessage").show();
  }, 2001);
  setTimeout(() => {
    console.log("hide game message timeout");
    $("#gameFinishMessage").hide();
  }, 3000);
}

var count = 9;
var timer;
var displayQuestionTimeout;

function timer() {
  count--;
  if (count <= 0) {
    displayResult("ran out of time");
    timerForNextQuestion();
  } else {
    $("#count").text(count);
  }
}
function timerForNextQuestion() {
  clearInterval(counter);
  checkGameOver();

  count = 9;
  $("#count").text("");

  currentQuestion++;
  displayQuestionTimeout = setTimeout(function() {
    displayQuestion(currentQuestion);
  }, 2000);
}

$("#forms").hide(); // Before the user clicks the start, the forms should be hidden
$("#gameFinishMessage").hide();

function displayQuestion(questionIndex) {
  var questionObj = questions[questionIndex]; // this is an object of a questions array
  $("#count").text(count);
  $("#question").text(questionObj.question);
  $("#choice1").text(questionObj.possibleAnswers[0]);
  $("#choice2").text(questionObj.possibleAnswers[1]);
  $("#choice3").text(questionObj.possibleAnswers[2]);
  $("#choice4").text(questionObj.possibleAnswers[3]);
  counter = setInterval(timer, 1000);
}

function checkGameOver() {
  console.log(
    "DEBUG >> checking for end game,",
    currentQuestion,
    totalQuestion
  );
  if (currentQuestion == totalQuestion) {
    console.log("You are finished");
    clearTimeout(hideFormTimeout);
    clearTimeout(displayQuestionTimeout);
    displayFinishMessage("Finish");
    // setTimeout(location.reload.bind(location), 3000); // After 5 seconds the page will reload
    return;
  }
}
// Evaluate if the user guess is right or wrong and increment the question
function checkUserGuess() {
  $("input").on("click", function() {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    var userChoice = selectedOption.value;
    var ans = questions[currentQuestion].answer;
    if (userChoice == ans) {
      displayResult(
        "CORRECT!  The answer was " +
          questions[currentQuestion].possibleAnswers[ans]
      );
    } else {
      displayResult(
        "NOPE! The correct answer was " +
          questions[currentQuestion].possibleAnswers[ans]
      );
      console.log(questions[currentQuestion].possibleAnswers[ans]);
    }

    // currentQuestion++;

    checkGameOver();
    // displayQuestion(currentQuestion); // load the next question
    timerForNextQuestion();
  });
} //

$("#start").on("click", function() {
  $("#start").hide();
  $("#forms").show();
  displayQuestion(currentQuestion);
  checkUserGuess();
});
