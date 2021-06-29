
const buttonElement = document.getElementById('btn');

var questionNum = 0;                          // keep count of question, used for IF condition.
var question = '<h1>what is your name?</h1>';         // first question

var output = document.getElementById('output');       // store id="output" in output variable
output.innerHTML = question;                          // ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';// output response
    document.getElementById("input").value = "";      // clear text box
    question = '<h1>how old are you?</h1>';           // load next question   
    setTimeout(timedQuestion, 2000);                  // output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2021 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';                  
    setTimeout(timedQuestion, 2000);
    }   
}

function timedQuestion() {
    output.innerHTML = question;
}

