// Color quiz
    // show the user a color swatch (or change the background?)
    // show the user 3 name options
    // collect the data from the users guess - ? 
        // I think because I didn't set this up as a form I can't collect the data? Got stuck here
    // compare the data to the correct answer
        // if correct give feedback to say correct, show the next question button
        // if incorrect give feedback to say incorrect, they have to guess again


// questions

    let questions = [
        {
            question : '01. What "fishy" color is this?',
            colorSwatch : 'assets/swatch01.jpg',
            hexColor : '#fa8072',
            choiceA : 'A. Salmon',
            choiceB : 'B. DarkSalmon',
            choiceC : 'C. LightSalmon',
            correct : 'A'
        },
        {
            question : '02. Which fragrant color is this?',
            colorSwatch : 'assets/swatch02.jpg',
            hexColor : '#e6e6fa',
            choiceA : 'A. Fuchsia',
            choiceB : 'B. Lavender',
            choiceC : 'C. Violet',
            correct : 'B'
        },
        {
            question : '03. Name this neutral!',
            colorSwatch : 'assets/swatch03.jpg',
            hexColor : '#faf0e6',
            choiceA : 'A. Linen',
            choiceB : 'B. OldLace',
            choiceC : 'C. Cornsilk',
            correct : 'A'
        },
        {
            question : '04. What blue might this be?',
            colorSwatch : 'assets/swatch04.jpg',
            hexColor : '#1e90ff',
            choiceA : 'A. SlateBlue',
            choiceB : 'B. DodgerBlue',
            choiceC : 'C. RoyalBlue',
            correct : 'B'
        },
        {
            question : '05. Give this green a guess!',
            colorSwatch : 'assets/swatch05.jpg',
            hexColor : '#7cfc00',
            choiceA : 'A. LimeGreen',
            choiceB : 'B. SpringGreen',
            choiceC : 'C. LawnGreen',
            correct : 'C'
        }
        
    ];
    

// creating the variables to update the html

    const $welcome = $('#welcome');
    // console.log($welcome);

    const $beginQuiz = $('#begin-quiz')
    // console.log($beginQuiz);

    const $quiz = $('#quiz');
    // console.log($quiz);

    const $colorSwatch = $('#color-swatch');
    // console.log($colorSwatch);

    const $hexColor = $('#hex-color');
    // console.log($hexColor);

    const $question = $('#question');
    // console.log($question);

    const $choiceA = $('#A');
    // console.log($choiceA);

    const $choiceB = $('#B');
    // console.log($choiceB);

    const $choiceC = $('#C');
    // console.log($choiceC);

    const $nextQuestion = $('#next-button');
    // console.log($nextQuestion);


// get the questions

    const previousQuestion = questions.length - 1;
    let currentQuestion = 0;

    function showQuestion(){
        let q = questions[currentQuestion];
        $colorSwatch.html('<img src=' + q.colorSwatch + '>');        
        $hexColor.html('<p>' + q.hexColor + '</p>');
        $question.html('<p>' + q.question + '</p>');
        $choiceA.html('<p>' + q.choiceA + '</p>');
        $choiceB.html('<p>' + q.choiceB + '</p>');
        $choiceC.html('<p>' + q.choiceC + '</p>');
    };


// begin the quiz (update this to only use jquery methods) - use jquery to update the classes instead of display:none (<-- removes from the DOM) - eg: $welcome.addClass()

    $beginQuiz.on('click', startQuiz);

    function startQuiz(){
        $beginQuiz.addClass('invisible');
        $welcome.addClass('invisible');
        $quiz.removeClass('invisible');
        showQuestion();
        $quiz.addClass('make-flex');
    };


// check the answer, show or hide the continue button depending on the answer

    function checkAnswer(answer) {
        if(answer == questions[currentQuestion].correct){
            correctAnswer();
            $nextQuestion.removeClass('invisible');
        } else {
            wrongAnswer();
            $nextQuestion.addClass('invisible');
        }
    };


// feedback to the user - highlighting with either green or red  

    function correctAnswer() {
        $question.addClass('right-answer');
        $question.removeClass('wrong-answer');
    };

    function wrongAnswer() {
        $question.addClass('wrong-answer');
        $question.removeClass('right-answer');
    };

// move to the next question, hide the continue button when they get to a new question

    $nextQuestion.on('click', moveToNextQuestion);

    function moveToNextQuestion() {
        if(currentQuestion < previousQuestion) {  
            currentQuestion++;
            showQuestion();
            $nextQuestion.addClass('invisible');
            $question.removeClass('right-answer');
            $question.removeClass('wrong-answer');
        }
    };


// hide the next button after the last question - ?

