var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which of the following process unit is used for air pollution control in chemical plants?",
    "options": [
    {
    "a": "Thermal Oxidizer",
    "b": "Chemical plant",
    "c": "Daniel Babbage",
    "d": "Jacky Babbage"
    }
    ],
    "answer": "Thermal Oxidizer",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": " Full form of CTBT is;",
    "options": [
    {
    "a": "Comprehensive Nuclear-Test-Ban Treaty.",
    "b": "Nuclear testing",
    "c": "Radiation Management"
    }
    ],
    "answer": "Comprehensive Nuclear-Test-Ban Treaty.",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the full form of BOD?",
    "options": [
    {
    "a": "Biological Oxygen Demand",
    "b": "Body Oxygenation Demand",
    "c": "Random Access Memory"
    }
    ],
    "answer": "Biological Oxygen Demand",
    "score": 0,
    "status": ""
    },
    {
        "id":4,
        "question": " Full form of COD is;",
        "options": [
        {
        "a": "Chemical Oxygen Demand",
        "b": "Chemical Oxygen Dissociation",
        "c": "Chemical Demand",
        "d": "Chemical Defference"
        }
        ],
        "answer": "Chemical Oxygen Demand",
        "score": 0,
        "status": ""
    },
    {
    "id": 5,
    "question": "The disease “Itai Itai” is caused by;",
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
    "question": " Human being can hear range of sound frequency between",
    "options": [
    {
    "a": "20Hz",
    "b": "20-20,000 Hertz.",
    "c": "44Hz",
    }
    ],
    "answer": "20-20,000 Hertz.",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which of the following energy sources is/are the alternative energy to fossil fuel?",
    "options": [
    {
    "a": "Solar Energy",
    "b": "Wind Energy",
    "c": "All of the above",
    }
    ],
    "answer": "All of the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "What percentage of land area should remain covered by forest in India to maintain ecological balance?",
    "options": [
    {
    "a": "10%",
    "b": "5%",
    "c": "33%",
    "d": "None of these",
    }
    ],
    "answer": "33%",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "First International Conference on environment held on",
    "options": [
    {
    "a": "February,2015",
    "b": "January,2018",
    "c": "May,1960",
    "d": "June,1972."
    }
    ],
    "answer": "June,1972.",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which of the following is a primary pollutant?",
    "options": [
    {
    "a": "Sulphur Dioxide",
    "b": "Water",
    "c": "Carbon",
    "d": "Carbon dioxide",
    }
    ],
    "answer": "Carbon dioxide",
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