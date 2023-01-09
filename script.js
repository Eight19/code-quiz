// Start button disappears when clicked
    $('#start').on('click', function(){
        $('#start').remove();
      quiz.loadQuestion();
    })

var quiz = {
    questions:questions,
    currentQuestion:0, 
    counter:30, 
    correctAnswer:0,
    incorrectAnswer:0,
    unansweredQuestion:0,
    
    countdown: function(){
        quiz.timer --;
        $('#timer').html(quiz.timer); 
        if(quiz.timer<=0){
            console.log("TIME IS UP!")
            quiz.timesUp();
        }
    },
    loadQuestion: function (){
        timer = setInterval(quiz.countdown,1000);
        $('#subwrapper').html("<h2> Time Running Out!: <span id ='counter'>10</span> Seconds</h2>");
        $('#subwrapper').append('<h2>'+questions[quiz.currentQuestion].question+'</h2>');
        for(var i=0;i<questions[quiz.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class="answer-button id="button- '+i+'" data-name="'+questions[quiz.currentQuestion].answers[i]+'">'+questions[quiz.currentQuestion].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){
        quiz.timer = 30;
        $('#timer').html(quiz.timer);
        quiz.currentQuestion++;
        quiz.loadQuestion();

    },
    timesUp: function(){
        clearInterval(timer);
        quiz.unansweredQuestion++;
        $('#subwrapper').html('<h2>Time Ran Out!<h2>');
        $('#subwrapper').append('<h3>The correct answer is: '+questions[quiz.currentQuestion].correctAnswer+'</h3>');
        if(quiz.currentQuestion==questions.length-1){
            setTimeout(quiz.results,3*1000);
        } else{
            setTimeout(quiz.nextQuestion,3*1000);
        }

    },
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html('<h2>End</h2>')
        $('#subwrapper').append(" Correct: " +quiz.currentAnswer + '<br/>');
        $('#subwrapper').append(" Incorrect: " +quiz.incorrectAnswer + '<br/>');
        $('#subwrapper').append(" Unanswered: " +quiz.unansweredQuestion + '<br/>');
        $('#subwrapper').append("<button id= reset>Re-try?</button>")


    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[quiz.currentQuestion].correctAnswer){
            quiz.currentAnswer();
    } else {
        quiz.incorrectAnswer();
    }

    },
    correctAnswer: function(){
        console.log("correct")
        clearInterval(timer);
        quiz.correct++;
        $('#subwrapper').html('<h2> Correct</h2>');
        if(quiz.currentQuestion==questions.length-1){
            setTimeout(quiz.results,2*1000);
        } else{
            setTimeout(quiz.nextQuestion,2*1000);
        }

    },
    incorrectAnswer: function(){
        console.log("incorrect")
        clearInterval(timer);
        quiz.incorrect++;
        $('#subwrapper').html('<h2> Incorrect</h2>');
        $('#subwrapper').append('<h3>The correct answer is: '+questions[quiz.currentQuestion].correctAnswer+'</h3>');
        if(quiz.currentQuestion==questions.length-1){
            setTimeout(quiz.results,2*1000);
        } else{
            setTimeout(quiz.nextQuestion,2*1000);
        }

    },
    resetQuiz: function(){
        quiz.currentQuestion = 0;
        quiz.clock = 0;
        quiz.currentAnswer = 0;
        quiz.incorrectAnswer = 0;
        quiz.unansweredQuestion = 0;
        quiz.loadNewQuestion();

    }

}

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

// click event when you click the answer

$(document).on('click','.answer-button',function(e){
    quiz.clicked(e);
})

$(document).on('click','#reset',function(){
    quiz.reset();
})
