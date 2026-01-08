'use strict'
const color= prompt("What's my mother's favorite color?")
const colorful= document.getElementById("color");

if (color && color.trim() !== "") {
    const color = prompt("What's my mother's favorite color?");
        
        colorful.textContent = `Her favorite color is ${color}!`;
} else {
    colorful.textContent = 
        `Sorry, you didn't enter anything.`;
}

const birthday= prompt("What month number is my mother's birthday? (1-12)");
const input= document.getElementById("birthday");

if (birthday === "8") {
    output.textContent = "Right, her birthday is in August!";
} else if (birthday >= "1" && birthday <= "12") {
    input.textContent = "Sorry, it is August.";
} else {
    input.textContent = "Please enter a number between 1 and 12.";
}