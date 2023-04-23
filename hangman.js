document.addEventListener('DOMContentLoaded', function() {
let guesses = [];
const words = ["ronaldo", "casemiro", "ramos", "messi", "neymar","mbappe","halaand"];
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);


const messageDisplay = document.getElementById("message");

const startgame = document.getElementById("start");
const newgame = document.getElementById("newgame");

const start=()=>{
  startgame.classList.add("hidden");
  const message = document.getElementById("welcome");
  const input = document.querySelectorAll(".hidden");
  message.textContent="Good Luck!!";
  for (var i = 0; i < input.length; i++) {
    input[i].classList.remove("hidden");      
  }

}


startgame.addEventListener('click', start);



const guess = () => {
     
      const guess = document.getElementById("guessInput").value.toLowerCase();
      if (guess.length !== 1) {
        messageDisplay.textContent = "Please enter a single letter.";
      } else if (!/[a-z]/.test(guess)) {
        messageDisplay.textContent = "Please enter a letter from A to Z.";
      } else if (guesses.includes(guess)) {
        messageDisplay.textContent = "You already guessed that letter.";
      } else {
        guesses.push(guess);
        console.log(guesses);
        display();
      }
    }



const display=()=>{
  const guessDisplay = document.getElementById("guesses");
  guessDisplay.innerHTML = "Guessed letters: " + guesses.join(", ");
 
 let hiddenWord = "";
 for (let i = 0; i < word.length; i++) {
   if (guesses.includes(word[i])) {
     hiddenWord += word[i] + " ";
   } else {
     hiddenWord += "_ ";
   }
 }
 const wordDisplay = document.getElementById("message");
 wordDisplay.innerHTML = hiddenWord.trim();

 // Check if the user has won or lost
 if (!hiddenWord.includes("_")) {
   messageDisplay.innerHTML = "Congratulations, you win!";
   newgame.classList.add("hidden"); // hide new game button
 } else if (guesses.length === 6) {
   messageDisplay.innerHTML = "Sorry, you lose! The word was '" + word + "'.";
   newgame.classList.add("hidden"); // hide new game button
 }
}
const check = document.getElementById("guess");
check.addEventListener('click', guess);


const newGame = () => {
  guesses = [];
  word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  messageDisplay.innerHTML = "";
  display();
}



newgame.addEventListener('click', newGame);

    });


  
  