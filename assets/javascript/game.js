

var words = [
	["A", "W", "E", "S", "O", "M", "E"]
	["R", "A", "D", "I", "C", "A", "L"]
	["B", "A", "N", "G", "I", "N"]
	["K", "I", "L", "L", "E", "R"]
]

var random = words[Math.floor(Math.random() * 
	(words.length-1))];

var word = words[random];

document.onkeyup = function(event) {

var userGuess = event.key;

console.log(userGuess);










}