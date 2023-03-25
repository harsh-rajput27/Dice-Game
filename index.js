// taking random number from math.random between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// picking random images based on  random numbers
let randomDiceImage = "images/dice" + randomNumber1 + ".png";

// selecting the 1st  image attibute
let image = document.querySelectorAll("img")[0];
//  setting image attribute to random dice number
image.setAttribute("src", randomDiceImage);

// generating another random number for second dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
let image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImage2);
//  if player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
}
// if player 2 wins
 else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 wins ";
}
// if it is a draw
 else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
