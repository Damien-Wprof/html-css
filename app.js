'use strict';


            //asks the user what her favorite color is\\
 function favColor(){
    const favcolor = prompt("What's my mother's favorite color?");
    const colorful = document.getElementById("color");

    if (favcolor && favcolor.trim() !== "") {
        colorful.textContent = `Her favorite color is ${favcolor}!`;
    } else {
        colorful.textContent = "Sorry, you didn't enter anything.";
    }
 }
            //asks user when her birth month is\\
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

function rickRoll(){
    document.getElementById("rickroll").addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });

}

function giveRating() {
    const rating = Number(prompt("How many stars would you rate this site?"));
    const output = document.getElementById("rating");

    output.textContent = "";

    if (!Number.isNaN(rating) && rating >= 1 && rating <= 5) {
        for (let i = 0; i < rating; i++) {
            output.textContent += "⭐";
        }
    } else {
        output.textContent = "Please enter a number between 1–5.";
    }
}


favColor();
birthMonth();
rickRoll();
giveRating();