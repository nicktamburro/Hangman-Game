var words = [
 	"radical",
 	"super",
 	"dude",
 	"awesome",
 	"totally",
 	"bro"
]

//all the variable I think I'll need
var wordToGuess = "";
var lettersInWordToGuess = [];
var Blanks = 0;
var blanksAndGuesses = [];
var wrongLetters = [];

//function startGame(){
var wins = 0;
var losses = 0;
var lives = 15;

//THIS IS WHERE MICHAEL PUT IT TOO...
//function startGame(){
	wrongLetters = [];
	lives = 15;
	blanksAndGuesses = [];

//tried to make this whole thing a function called 
//startGame... function startGame(){

//picks a random word from the "words" array:
wordToGuess = words[Math.floor(Math.random() * words.length)];
//splits them into each word into separate letters?
lettersInWordToGuess = wordToGuess.split("");
//makes the blanks to show user how many letters
Blanks = lettersInWordToGuess.length;

//puts up blanks for the words
for(var i = 0; i < Blanks; i++){
    blanksAndGuesses.push("-");
    console.log(wordToGuess);
}

 
document.getElementById('word').innerHTML = blanksAndGuesses.join(" ");
document.getElementById('lives-left').innerHTML = lives;
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;



//gets the user input... 
document.onkeyup = function(event){

	var userGuess = event.key //toLowerCase(); 

for (var i = 0; i < wrongLetters.length; i++)
	if(userGuess === wrongLetters[i])
		alert("You already guessed that one!");

	if (userGuess < 65 || userGuess > 90)
		alert("It needs to be a letter.");

	if (wordToGuess.indexOf(userGuess) > -1)
	{
		for (var i = 0; i < wordToGuess.length; i++){
			if(userGuess === wordToGuess[i])
				blanksAndGuesses[i] = userGuess;
		}
	}
	else {

		lives--;
		wrongLetters.push(userGuess)
		console.log(userGuess);
	}

document.getElementById('word').innerHTML =blanksAndGuesses.join(" ");
document.getElementById('wrong-letters').innerHTML = wrongLetters.join(" ");
document.getElementById('lives-left').innerHTML = lives;

//}  
//END of attempted startGame function!!

if(lettersInWordToGuess.join(" ") === blanksAndGuesses.join(" ")){
       wins++;
        alert("YEAH, BRO!");
      document.getElementById('wins').innerHTML = wins;
      var audio = new Audio('assets/sounds/Yeah.mp3');
	audio.play();
  //   startgame();



        }
  
        
    else if(lives === 0){
    	losses++;
        document.getElementById('losses').innerHTML  = losses;

        document.getElementById('wrong-letters').innerHTML = "";
        alert("AW, DUDE!");
        var audio = new Audio('assets/sounds/gnarly.mp3');
		audio.play();
   // startgame();

    }
}