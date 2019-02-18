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
var score = 0;
var wrongAnswer = 0;

function DisplayQuestion(questionIndex) {
  var questionObj = questions[questionIndex]; // this is an object of a questions array
  $("#question").text(questionObj.question);
  $("#choice1").text(questionObj.possibleAnswers[0]);
  $("#choice2").text(questionObj.possibleAnswers[1]);
  $("#choice3").text(questionObj.possibleAnswers[2]);
  $("#choice4").text(questionObj.possibleAnswers[3]);
}

// Evaluate if the user guess is right or wrong and increment the question
function checkUserGuess() {
  var selectOption = document.querySelector("input[type=radio]:checked");

  if (!selectOption) {
    alert("Please select your answer ");
    return;
  }

  var userChoice = selectOption.value;
  var ans = questions[currentQuestion].answer;

  if (userChoice == ans) {
    score++;
  } else {
    wrongAnswer++;
  }
  selectOption.checked = false;
  currentQuestion++;

  if (currentQuestion == totalQuestion - 1) {
    $(".nextBtn").html = "Finish";
  }

  if (currentQuestion == totalQuestion) {
    $("#container").hide();
    console.log(score);
    $("#displayScore").text("Your got  " + score + " right answers");
    $("#displayWrong").text("You got " + wrongAnswer + " wrong answers");

    return;
  }
  DisplayQuestion(currentQuestion);
}

timer = setInterval(count, 1000);

var time = 30; // 100 s
function count() {
  var currentTime = timeConverter(time);
  time--;
  $("#count").text("Remaining time is: " + currentTime);
  if (time <= 0) {
    $("#container").hide();
    console.log(score);
    $("#displayScore").text("Your Score is " + score);
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
