// initialize questions for quiz
var questions = [
  {
    question: " Which of the following is not a reserved word in JavaScript?",
    possibleAnswers: [" interface", " program", " throws", "short"],
    answer: 1
  },

  {
    question: " Which of the following is an advantage of using JavaScript? ",
    possibleAnswers: [
      "Increased interactivity",
      " Less server interaction",
      "Immediate feedback from the users",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: " JavaScript is a ________ Side Scripting Language. ",
    possibleAnswers: ["Server", " ISP", " Browser", "None of the above"],
    answer: 2
  },
  {
    question: " JavaScript is ________ language. ",
    possibleAnswers: [" a compiled", " an interpreted"],
    answer: 1
  },

  {
    question:
      "Adding White Space to scripts may slow down the execution speed of a script. ",
    possibleAnswers: [" False", "True"],
    answer: 0
  }
];

// get quiz elements
var currentQuestion = 0; // This holds the index of question
var totalQuestion = questions.length;
var rightAnswer = 0;
var wrongAnswer = 0;

$("#container").hide();
$(".resetBtn").hide();

function startGame() {
  $("#container").show();
  $("#start").hide();
  timer = setInterval(count, 1000);
}

function DisplayQuestion(questionIndex) {
  $("#countQuestion").text(currentQuestion + 1 + "/" + totalQuestion);
  var questionObj = questions[questionIndex]; // this is an object of a questions array
  $("#question").text(questionIndex + 1 + "." + questionObj.question);
  var possibleAnswersLength = questions[questionIndex].possibleAnswers.length;
  if (possibleAnswersLength < 3) {
    // if the options are less than 3 then hide the last 2 labels
    $("#choice1").text(questionObj.possibleAnswers[0]);
    $("#choice2").text(questionObj.possibleAnswers[1]);
    $("#label3").hide();
    $("#label4").hide();
  } else {
    $("#choice1").text(questionObj.possibleAnswers[0]);
    $("#choice2").text(questionObj.possibleAnswers[1]);
    $("#choice3").text(questionObj.possibleAnswers[2]);
    $("#choice4").text(questionObj.possibleAnswers[3]);
  }
}

function displayScore() {
  $("#displayScore").text("Your got  " + rightAnswer + " right answers");
  $("#displayWrong").text("You got " + wrongAnswer + " wrong answers");
  $(".resetBtn").show();
}

function displayRightAnswerMessage() {
  var rightAnswer = questions[currentQuestion].answer;
  var message =
    "The right answer of: " +
    '" ' +
    questions[currentQuestion].question +
    '"' +
    " was: " +
    questions[currentQuestion].possibleAnswers[rightAnswer];
  var rightAnswerMessage = $("<p class ='paragraph'>").text(message);
  $("#displayRightAnswer").append(rightAnswerMessage);
}

function checkUserGuess() {
  var selectOption = document.querySelector("input[type=radio]:checked");

  if (!selectOption) {
    alert("Please select your answer ");
    return;
  }

  var userChoice = selectOption.value;
  var ans = questions[currentQuestion].answer;

  if (userChoice == ans) {
    rightAnswer++;
  } else {
    wrongAnswer++;
    displayRightAnswerMessage();
  }

  selectOption.checked = false;
  currentQuestion++;

  if (currentQuestion == totalQuestion - 1) {
    $(".nextBtn")
      .attr("class", "finish")
      .text("Finish");
  }

  if (currentQuestion == totalQuestion) {
    $("#container").hide();
    clearInterval(timer);
    displayScore();
    displayRightAnswerMessage;
    return;
  }

  DisplayQuestion(currentQuestion);
}

var time = 70; // 100 s
function count() {
  var currentTime = timeConverter(time);
  time--;
  $("#count").text("Remaining time is: " + currentTime);

  if (time === 0) {
    alert("Your time is up! ");
    clearInterval(timer);
    $("#container").hide();
    $("#displayScore").text("Your got  " + rightAnswer + " right answers");
    $(".resetBtn").show();
    displayRightAnswerMessage();
    return;
  }
}

function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

DisplayQuestion(currentQuestion);
