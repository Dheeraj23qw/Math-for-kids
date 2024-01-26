let correct = document.getElementById("Correct");
let wrong = document.getElementById("wrong");
let option = document.getElementsByClassName("options");
let container = document.getElementById("container");
const audio1 = new Audio("correct.mp3");
const audio2 = new Audio("moye.mp3");
let operation = document.getElementsByClassName("operation");

for (let i = 0; i < operation.length; i++) {
  operation[i].addEventListener("click", function () {
    currentOperation = operation[i].textContent;
    console.log(currentOperation);
  });
}
let result;

let correctScore = 0;
let wrongScore = 0;

// Function to update the scoreboard
function Scoreboard() {
  document.getElementById(
    "correctans"
  ).textContent = `Correct: ${correctScore}`;
  document.getElementById("wrongans").textContent = `Wrong: ${wrongScore}`;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
function generateRandomNumber2() {
  return Math.floor(Math.random() * 100);
}

for (var i = 0; i < option.length; i++) {
  option[i].addEventListener("click", function () {
    check(this.innerHTML);
  });
}

//ADDITION FUNCTIONS
function addition() {
  var randomNumber = generateRandomNumber();
  var randomNumber2 = generateRandomNumber2();
  result = randomNumber + randomNumber2;

  document.getElementById("operation-container").innerHTML =
    randomNumber + "+" + randomNumber2 + "=?";

  for (var i = 0; i < option.length; i++) {
    option[i].innerHTML = generateRandomNumber();
  }

  var index = Math.floor(Math.random() * 3);
  var newresult = option[index];
  newresult.innerHTML = result;
}

//SUBTRACTION FUNCTION
function subtraction() {
  var randomNumber = generateRandomNumber();
  var randomNumber2 = generateRandomNumber2();
  var randomNumber3=randomNumber2+ randomNumber;

  result = randomNumber3 - randomNumber2;

 

  document.getElementById("operation-container").innerHTML =
    randomNumber3 + "-" + randomNumber2 + "=?";

  for (var i = 0; i < option.length; i++) {
    option[i].innerHTML = generateRandomNumber();
  }

  var index = Math.floor(Math.random() * 3);
  var newresult = option[index];
  newresult.innerHTML = result;
}

//MULTIPLICATION FUNCTION
function multiply() {
  var randomNumber = generateRandomNumber();
  var randomNumber2 = generateRandomNumber2();
  result = randomNumber * randomNumber2;

  document.getElementById("operation-container").innerHTML =
    randomNumber + "*" + randomNumber2 + "=?";

  for (var i = 0; i < option.length; i++) {
    option[i].innerHTML = generateRandomNumber() * 24;
  }

  var index = Math.floor(Math.random() * 3);
  var newresult = option[index];
  newresult.innerHTML = result;
}

//DIVISION FUNCTION

function division() {
  var randomNumber = generateRandomNumber();
  var randomNumber2 = generateRandomNumber2();
  while (randomNumber === 0) {
    var randomNumber = generateRandomNumber();
  }

  result = (randomNumber2 * randomNumber) / randomNumber;

  document.getElementById("operation-container").innerHTML =
  (randomNumber2 * randomNumber) + "/" + randomNumber+ "=?";

  for (var i = 0; i < option.length; i++) {
    option[i].innerHTML = generateRandomNumber();
  }

  var index = Math.floor(Math.random() * 3);
  var newresult = option[index];
  newresult.innerHTML = result;
}

// check the result

function check(userAnswer) {
  if (userAnswer == result) {
    correctScore++;
    Scoreboard();
    audio1.play();
    correct.style.display = "block";

    setTimeout(() => {
      correct.style.display = "none";
    }, 6000);

    
      operationValue();

  } else {
    wrongScore++;
    Scoreboard();
    audio2.play();
    wrong.style.display = "block";

    setTimeout(() => {
      wrong.style.display = "none";
    }, 7000);
  }
}

function operationValue() {
  if (currentOperation == "Subtract") {
    return subtraction();
  }
  else if (currentOperation === "Add") {
    return addition();
  } 
   else if (currentOperation === "Multiply") {
    return multiply();
  } else if (currentOperation === "Divide") {
    return division();
  }
}
