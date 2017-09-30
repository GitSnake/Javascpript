
// Three question two dimensional array
var questions = [
	{
		question: 'How many states are in the United States of America?'
		answer: 50
	},
	{
		question: 'How many continents are there?'
		answer: 7
	},
	{
		question: 'How many legs does an insect have?'
		answer: 6
	}
];

// Keep track of the questions answered correctly & incorrectly
var correctAnswers 
var answer;
var response;
var correct = [];
var wrong = [];
var html;

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList(arr) {
	var listHTML = '<ol>';
		for (var i = 0; i < arr.length; i += 1) {
			listHTML += '<li>' + '</li>';
		}
		listHTML += '</ol>';
		return listHTML;
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
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);



