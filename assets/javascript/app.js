

$(document).ready (function(){

    var questions = [
        {
            question: "What is the capital of Nepal? ",
            possibleAnswers: ['Pokhara', 'Kathmandu', 'Jomsom', 'Delhi'],
            answer: 1
        },

        {
            question: "What is the capital of India? ",
            possibleAnswers: ['Delhi', 'Mumbai', 'Banglore', 'Chennai'],
            answer: 0
        },

        {
            question: "What is the capital of USA? ",
            possibleAnswers: ['New York', 'Boston', 'Washingon DC', 'Maryland'],
            answer: 2
        }
        
    ] // end of the questions array




    var currentQuestion = 0;
    var totalQuestion = questions.length;
    var message = document.getElementById('gameMessage');
    var winLossMessage = document.getElementById('win-loss-message');
   
   
    $("#forms").hide(); // When page loads the forms should be hidden

    function loadQuestion (questionIndex){
        var index = questions[questionIndex];
        $('#question').text(index.question);
        $('#choice1').text(index.possibleAnswers[0]);
        $('#choice2').text(index.possibleAnswers[1]);
        $('#choice3').text(index.possibleAnswers[2]);
        $('#choice4').text(index.possibleAnswers[3]);
    }

    function loadNextQuestion (){

        $('input').on('click', function(){
            var selectedOption = document.querySelector("input[type=radio]:checked")
            var userChoice = selectedOption.value;
            console.log("DEBUG userchoice answer's value is " + userChoice);
            console.log("DEBUG  answer value is " + questions[currentQuestion].answer);

            var ans = questions[currentQuestion].answer;
            if(userChoice == ans){
                console.log('CORRECT!');
                // winLossMessage.textContent = "CORRECT";
                // $("#forms").hide();   
            }

            else{
                console.log("NOPE!");
                loadQuestion(currentQuestion); 
            }

            selectedOption = false;
            currentQuestion++;

            if(currentQuestion == totalQuestion){
                console.log('You are finished');
                $("#forms").hide();
            //    message.textContent = 'Finish';
               reset();
               return;
            }
            loadQuestion(currentQuestion);
            
        });

        
    } // end of the loadNextQuestion function


    $("#start").on('click', function(){
        
        $("#start").hide();
        $("#forms").show();
        loadNextQuestion();
        loadQuestion(currentQuestion);
        
        
    });

   
    function reset(){
        $("#forms").hide();
        $("#start").show();

    }

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