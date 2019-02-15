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
  var currentQuestion = 0;
  var totalQuestion = questions.length;
  var winLossMessage = document.getElementById("win-loss-message");

  // helper function for displaying results
  var hideFormTimeout;
  function displayResult(rightOrWrong) {
    console.log(rightOrWrong);
    $("#forms").hide();
    winLossMessage.textContent = rightOrWrong;
    $("#win-loss-message").show();
    setTimeout(function() {
      $("#win-loss-message").hide();
    }, 2000);
    hideFormTimeout = setTimeout(function() {
      $("#forms").show();
    }, 2000);
  }

  $("#forms").hide(); // When page loads the forms should be hidden
  $("#gameMessage").hide();

  function loadQuestion(questionIndex) {
    var index = questions[questionIndex];
    $("#question").text(index.question);
    $("#choice1").text(index.possibleAnswers[0]);
    $("#choice2").text(index.possibleAnswers[1]);
    $("#choice3").text(index.possibleAnswers[2]);
    $("#choice4").text(index.possibleAnswers[3]);
  }

  function loadNextQuestion() {
    $("input").on("click", function() {
      var selectedOption = document.querySelector("input[type=radio]:checked");
      var userChoice = selectedOption.value;
      console.log("DEBUG userchoice answer's value is " + userChoice);
      console.log(
        "DEBUG  answer value is " + questions[currentQuestion].answer
      );

      var ans = questions[currentQuestion].answer;
      if (userChoice == ans) {
        displayResult("CORRECT");
      } else {
        displayResult("NOPE");
      }

      selectedOption = false;
      currentQuestion++;

      if (currentQuestion === totalQuestion) {
        console.log("You are finished");
        clearTimeout(hideFormTimeout);

        $("#gameMessage").text("Finish");

        setTimeout(() => {
          console.log("show game message timeout");
          $("#gameMessage").show();
        }, 2001);
        setTimeout(() => {
          console.log("hide game message timeout");
          $("#gameMessage").hide();
        }, 5000);
        setTimeout(location.reload.bind(location), 5001); // After 5 seconds the page will reload
        return;
      }
      loadQuestion(currentQuestion);
    });
  } // end of the loadNextQuestion function

  $("#start").on("click", function() {
    $("#start").hide();
    $("#forms").show();
    loadQuestion(currentQuestion);
    //     var count = 10;
    //     setInterval(function(){
    //         loadQuestion(currentQuestion);
    //         document.getElementById('count').innerHTML='Time Remaining ' + count + ': Seconds';
    //         count--;
    //         if (count == 0 && totalQuestion >0){
    //             currentQuestion++;

    //             loadNextQuestion();
    //             count=10;
    //             return;

    //         }
    // }, 1000); // end od setInterval

    //
    loadNextQuestion();
  });
});

// game.questions[0].question;
// if game.question[0].possibleAnwsers[1] then return true;

// var currentQuestion = game.question[0];

// if (userChoice ==== currentQuestion.answer.indexOf(user)) {
//     var currentQuestion = game.question[0];
//     var answerChoices = game.possibleAnswers;
// }

// function createContent(questionIndex, contentArea){
//     var index = questions[questionIndex];
//     var formsDiv = $("<div class='forms' >");
//     var questionDiv = $("<div id ='question'>").text(index.question);
//     var input1 = $('input[type="checkbox"]').wrap('<label> </label>');
//     var input2 = $ ('<label class="option" <input>').attr('type', 'radio').attr('name', 'quiz').attr('value', '2').text(index. possibleAnswers[1]);
//     var input3 = $ ('<label class="option" <input>').attr('type', 'radio').attr('name', 'quiz').attr('value', '3').text(index. possibleAnswers[2]);
//     var input4 = $ ('<label class="option" <input>').attr('type', 'radio').attr('name', 'quiz').attr('value', '4').text(index. possibleAnswers[3]);
//     $(formsDiv).append(questionDiv).append(input1).append(input2).append(input3).append(input4);
//     $(contentArea).append(formsDiv);
// }
