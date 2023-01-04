var questionEl = document.querySelector(".question");
var cursor = 0;

var questions = [
    { Text: "What does HTML mean?", correctAnswer: "2",
        possibleAnswers: [
        "0. ",
        "1. ",
        "2. ",
        "3. ",
        ]
    },
    { Text: "What does CSS?", correctAnswer: "2",
        possibleAnswers: [
        "0. ",
        "1. ",
        "2. ",
        "3. ",
        ]
    },
    { Text: "What is the role of javascript?", correctAnswer: "0",
        possibleAnswers: [
        "0",
        "1",
        "2",
        "3",
        ]
    },
    { Text: "What is the term used for human-written code that describes what a program is supposed to do and what the programmer wants the code to do?", correctAnswer: "1",
        possibleAnswers: [
        "0",
        "1",
        "2",
        "3",
        ]
    },
    { Text: "A diagram used to describe algorithms and structures of programs and programming languages?", correctAnswer: "2",
        possibleAnswers: [
        "0",
        "1",
        "2",
        "3",
        ]
    },
    { Text: "A process that aims to locate the exact source of errors or flaws in the code?", correctAnswer: "3",
        possibleAnswers: [
        "0",
        "1",
        "2",
        "3",
        ]
    },
    ];

    var correctAnswers = ["2", "2", "0", "1","2", "3"];

    var displayQuestion = function () {
        questionEl.querySelector("h2").textContent = questions[cursor].Text;
        for (var buttonLabel of questions[cursor].possibleAnswers) {
            var buttonEl = document.createElement("button")
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

   
