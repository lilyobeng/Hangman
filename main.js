// Define Variables
let guess = 10;
let canvas;
let incorrectLetter = [];
let correctLetter = [];
let underScore = [];
let clickedLetters;
let chosenWord;

let spacesBox = document.querySelector(".underscores");
let letter = document.querySelectorAll(".letters");
let message = (document.getElementById("message").innerHTML = "Winner!!");
letter.forEach((el) => el.addEventListener("click", alphabetLetter));
let hint = document.getElementById("hint");
hint.addEventListener("click", hinting);
let reset = document.getElementById('reset');
reset.addEventListener("click",newGame);
canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let currentCategory = document.getElementById("current-category");
let currentClue = document.getElementById("clue");

const category = {
  Topics: [
    { word: "Reggae", hint: "Bob Marely" },
    { word: "R&B", hint: "SZA" },
    { word: "Jazz", hint: "Louis Armstrong" },
    { word: "Soul Music", hint: "Ray Charles" },
    { word: "Rap", hint: "Pop Smoke" },
    { word: "Disco", hint: "Gloria Gayner" },
    { word: "Toronto", hint: "CN Tower" },
    { word: "Accra", hint: "An African country known for its gold" },
    { word: "Manchester", hint: "Famous Football Team" },
    { word: "New Delhi", hint: "The capitol of India" },
    { word: "Montego Bay", hint: "The capital of Saint James Parish" },
  ],
};



function displayUnderscores() {
    underScore = [];
    for (let el = 0; el < chosenWord.length; el++) {
        underScore.push("__");
  }
  spacesBox.innerHTML = underScore.join(" ");
}


function checkLetter() {
  for (let index = 0; index < chosenWord.length; index++) {
       if (clickedLetters.toLowerCase() == chosenWord[index].toLowerCase()) {
      underScore[index] = clickedLetters;
      correctLetter.push(clickedLetters);    
      }
    }
  
    if (!chosenWord.includes(clickedLetters)) {
    incorrectLetter.push(clickedLetters);
  }
}

function drawStickMan() {
  if (incorrectLetter.length == 1) {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle = "#04009A";
    ctx.moveTo(100, 145);
    ctx.lineTo(15, 145);
    ctx.stroke();
  } else if (incorrectLetter.length == 2) {
   
    ctx.moveTo(55, 145);
    ctx.lineTo(55, 20);
    ctx.stroke();
  } else if (incorrectLetter.length == 3) {
    
    ctx.lineTo(100, 20);
    ctx.stroke();
  } else if (incorrectLetter.length == 4) {
    ctx.lineTo(100, 35);
    ctx.stroke();
  } else if (incorrectLetter.length == 5) {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(100, 50, 15, 0, Math.PI * 2);
    ctx.stroke();
  } else if (incorrectLetter.length == 6) {
    ctx.beginPath();
    ctx.moveTo(100, 65);
    ctx.lineTo(100, 100);
    ctx.stroke(); 
  } else if (incorrectLetter.length == 7) {
    ctx.beginPath();
    ctx.moveTo(100, 80.5);
    ctx.lineTo(70, 70);
    ctx.stroke();
  } else if (incorrectLetter.length == 8) {
    ctx.beginPath();
    ctx.moveTo(130, 70.3);
    ctx.lineTo(100, 80);
    ctx.stroke();
  } else if (incorrectLetter.length == 9) {
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(80, 132);
    ctx.stroke();
  } else if (incorrectLetter.length == 10) {
    ctx.beginPath();
    ctx.moveTo(118, 132);
    ctx.lineTo(100, 100);
    ctx.stroke();
     message = (document.getElementById("message").innerHTML = "GAME OVER");
  }
}

function alphabetLetter(evt) {
    clickedLetters = evt.target.id;
    document.getElementById(`${clickedLetters}`).removeEventListener("click", alphabetLetter);
    checkLetter();
    drawStickMan();
    if(correctLetter.length === chosenWord.length) {
      message = (document.getElementById("message").innerHTML = "Winner!!");
    }
    spacesBox.innerHTML = underScore.join(" ");
  }

function hinting() {
  currentClue.innerHTML = category.Topics[indexNum].hint;
}

function newGame() {
    indexNum = Math.floor(Math.random() * category.Topics.length);
    chosenWord = category.Topics[indexNum].word.toLowerCase();

    if (indexNum < 6) {
        currentCategory.innerHTML = "Category is Music Genre";
    } else if (indexNum > 5) {
        currentCategory.innerHTML = "Category is Cities";
      }
    displayUnderscores();
    message = (document.getElementById("message").innerHTML = "New Game");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    correctLetter = [];
    incorrectLetter = [];

}

 newGame();
 
