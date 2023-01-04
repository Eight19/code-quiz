var nextEl = document.querySelector
("#next");
var cursor = 0;

// var questions = [
    // "What does HTML mean?",
    // "What does CSS?",
    // "What is the role of javascript?",
    // "What is the term used for human-written code that describes what a program is supposed to do and what the programmer wants the code to do?",
    // "A diagram used to describe algorithms and structures of programs and programming languages?",
    // "A process that aims to locate the exact source of errors or flaws in the code?"
    // ];

    var displayQuestion = function () {
        nextEl.textContent = questions
        [cursor];
    };

    var advance = function() {
        if (cursor < questions.length - 1) {
            cursor++;
        }
        // displayQuestion();
    };

    nextEl.addEventListener("click", advance);

    // displayQuestion();
    