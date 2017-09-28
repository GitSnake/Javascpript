
// Three question two dimensional array
var questions = [
	['How many states are in the United States of America?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have?', 6]

];

// Keep track of the questions answered correctly & incorrectly
var correctAnswers 
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
	response = prompt(question);
	response = parseInt prompt(response);
	if (response === answer) {
		correctAnswers += 1;
		correct.push(qustion);
	} else{
		wrong.push(qustion);
	}
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);



