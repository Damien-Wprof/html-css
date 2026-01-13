'use strict';



function favColor(){
const color = prompt("What's my mother's favorite color?");
const colorful = document.getElementById("color");

if (color && color.trim() !== "") {
    colorful.textContent = `Her favorite color is ${color}!`;
} else {
    colorful.textContent = "Sorry, you didn't enter anything.";
}
}

function birthMonth(){
    const birthday = Number(prompt("In number format, what month is my mother's birthday?)"));
const input = document.getElementById("birthday");

if (birthday === 8) {
    input.textContent = "Right, her birthday is in August!";
} else if (birthday >= 1 && birthday <= 12) {
    input.textContent = "Sorry, it is August.";
} else {
    input.textContent = "Please enter a number between 1 and 12.";
}
}


document.getElementById("rickroll").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});


favColor();
birthMonth();