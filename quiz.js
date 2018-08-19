process.stdout.write('\n\n Hello and welcome to the Quiz \n\n');
var questions = [
    'What is 1+1?',
    'Who directed Gone Girl?',
    'What year did WW2 End?'
];

var answers = [
    '2',
    'David Fincher',
    '1945'
];
var usersAnswers = [];
var correctAnswers = [];

function askQuestions(i){
    process.stdout.write(`\n\n${questions[i]}\n`);

};

process.stdin.on('data', function(answer){
    var questionNumber = usersAnswers.length;
    var inputAnswer  =  answer.toString().trim();
    usersAnswers.push(inputAnswer);
    if (inputAnswer == answers[questionNumber]){
        correctAnswers.push('1');
    }

    if (usersAnswers.length < answers.length) {
        askQuestions(usersAnswers.length);
    } else {
        process.exit();
    }
})
askQuestions(0);



process.on('exit', function(){
    process.stdout.write(`\n\n\n You got ${correctAnswers.length} out of 3 right \n\n\n`);
});


