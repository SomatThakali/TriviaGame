$(document).ready(function() {
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
    $("#gameMessage").text(finish);

    setTimeout(() => {
      console.log("show game message timeout");
      $("#gameMessage").show();
    }, 2001);
    setTimeout(() => {
      console.log("hide game message timeout");
      $("#gameMessage").hide();
    }, 5000);
  }

  $("#forms").hide(); // Before the user clicks the start, the forms should be hidden
  $("#gameMessage").hide();

  function loadQuestion(questionIndex) {
    var index = questions[questionIndex];
    $("#question").text(index.question);
    $("#choice1").text(index.possibleAnswers[0]);
    $("#choice2").text(index.possibleAnswers[1]);
    $("#choice3").text(index.possibleAnswers[2]);
    $("#choice4").text(index.possibleAnswers[3]);
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

      currentQuestion++;

      if (currentQuestion === totalQuestion) {
        console.log("You are finished");
        clearTimeout(hideFormTimeout);
        displayFinishMessage("Finish");
        setTimeout(location.reload.bind(location), 5000); // After 5 seconds the page will reload
        return;
      }
      loadQuestion(currentQuestion);
    });
  } //

  $("#start").on("click", function() {
    $("#start").hide();
    $("#forms").show();
    loadQuestion(currentQuestion);
    checkUserGuess();
  });
});
