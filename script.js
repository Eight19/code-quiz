var questions = document.querySelectorAll(".question");
var cursor = 0;

// var questions = [
    // "What does HTML mean?",
    // "What does CSS?",
    // "What is the role of javascript?",
    // "What is the term used for human-written code that describes what a program is supposed to do and what the programmer wants the code to do?",
    // "A diagram used to describe algorithms and structures of programs and programming languages?",
    // "A process that aims to locate the exact source of errors or flaws in the code?"
    // ];

    var correctAnswers = ["2", "2", "0", "1","2", "3"];

    var displayQuestion = function () {
        for (var question of questions) {
            console.log(question);
            if (question.dataset.index != cursor) {
                question.style.display = "none";
            } else {
                question.style.display = "block";
            }
        }
    };

    var advance = function(event) {
        var element = event.target;

          if (element.matches(".question button")) {
              var answer = element.dataset.choice ===correctAnswers[cursor]
            if (cursor < questions.length - 1) {
                console.log(answer);
            cursor++;
        }
        displayQuestion();
    }
    };

    document.addEventListener("click", advance);

    displayQuestion();
