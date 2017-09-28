
// Three question two dimensional array
var questions = [
	['How many states are in the United States of America?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have?', 6]

];

// Keep track of the questions answered correctly & incorrectly
var correctAnswers = 0;
var questions;
var answer;
var response;
var correct = [];
var wrong = [];

function print(message) {
  document.write(message);
}

// Use a loop to cycle through each question

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question));
	if (response === answer) {
		correctAnswers += 1;
	}
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);



