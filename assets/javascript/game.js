console.log("hello world");

// https://opentdb.com/api.php?amount=50&category=15&difficulty=medium&type=multiple
// trivia API
// format as follows
// {"results": [
//     {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "In which country&#039;s version of Half-Life are the HECU Marines replaced with robots?",
//     "correct_answer": "Germany",
//     "incorrect_answers": [
//     "Japan",
//     "China",
//     "France"
//     ]
//   } ...MORE OBJECTS
//  ]
// }
$(document).ready(function () {
    // on page load, make ajax query to trivia API and store as an object (questions)
    var queryURL = "https://opentdb.com/api.php?amount=50&category=15&difficulty=easy&type=multiple"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // turns JSON into string and stores it
        var rawQuestions = JSON.stringify(response)
        // takes string and turns it into object
        var rawQuestions = JSON.parse(rawQuestions)
        // discards everything but the array in the previous object and stores it
        var questionArray = rawQuestions.results;
        console.log(questionArray);
        console.log(questionArray[0].question);
    })

    function renderButtons() {
        // this function will 
        // 1) grab random question and push to question view area
        //      1a) question will then be excluded
        // 2) grab correct answer and push to array
        // 3) grab incorrect answers and push to arry
        // 4) generate 4 buttons randomly assigning correct and incorrect answers as A, B, C, D and store which answer value is correct
        // 5) start a timer??function that when expires will mark question as incorrect and move on to next question
    }

    function answerQuestion() {
        // this function will
        // on correct answer click will score++ (bonus for streak???) and run question generation
        // incorrect answer will fails++ and run question generation
    }

    function resetGame() {
        // this function will set all score/fail values to zero and reset question list, not sure if I want to include this when page can just be reloaded
    }

    $("#startButton").on("click", function (event) {
        event.preventDefault();

        renderButtons();
    })


    // listener for click on an answer
    $(document).on("click", ".answer", answerQuestion);

})