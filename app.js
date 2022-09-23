var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Who is the father of Computer science?",
    "options": [
    {
    "a": "Charles Babbage",
    "b": "Char Babbage",
    "c": "Daniel Babbage",
    "d": "Jacky Babbage"
    }
    ],
    "answer": "Charles Babbage",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "In a computer, most processing takes place in _______?",
    "options": [
    {
    "a": "CPU",
    "b": "RAM",
    "c": "ROM"
    }
    ],
    "answer": "CPU",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "In which type of computer, data are represented as discrete signals?",
    "options": [
    {
    "a": "Digital Computer",
    "b": "Google cloud",
    "c": "Random Access Memory"
    }
    ],
    "answer": "Digital Computer",
    "score": 0,
    "status": ""
    },
    {
        "id":4,
        "question": "A fault in a computer program which prevents it from working correctly is known as _______?",
        "options": [
        {
        "a": "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)",
        "b": "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
        "c": "var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
        "d": "var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;"
        }
        ],
        "answer": "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
        "score": 0,
        "status": ""
    },
    {
    "id": 5,
    "question": "What is the name of the display feature that highlights are of the screen which requires operator attention?",
    "options": [
    {
    "a": "Reverse Video",
    "b": "Reverse Audio",
    "c": "Floating Video",
    "d": "Reserve Video",
    }
    ],
    "answer": "Reverse Video",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Computers, combine both measuring and counting, are called _______?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "What translates and executes program at run time line by line?",
    "options": [
    {
    "a": "Personal Computer",
    "b": "Hybrid Computer",
    "c": "Static Computer",
    }
    ],
    "answer": "Hybrid Computer",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What converts an entire program into machine language?",
    "options": [
    {
    "a": "Compiler",
    "b": "Microprocessor",
    "c": "Memory",
    "d": "Screen",
    }
    ],
    "answer": "Compiler",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Who is the father of personal computer?",
    "options": [
    {
    "a": "Edward Robert",
    "b": "Charles Babbage",
    "c": "Robert Darwin",
    "d": "Edwin King"
    }
    ],
    "answer": "Edward Robert",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Who developed the first electronic computer?",
    "options": [
    {
    "a": "J.V. Atansoff",
    "b": "D.R Kennedy",
    "c": "Runold Watson",
    "d": "Kenn Joseph",
    }
    ],
    "answer": "J.V. Atansoff",
    "score": 0,
    "status": ""
    },
]
}
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });