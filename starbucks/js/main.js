// console.log("js has been loaded");

// variables, methods, and functions

// 1. variables
const myName = "Cc Gulbrandsen";
console.log(myName); //if there are "quotes" you are refering to variable

const myAge = 21;
const myCity = "Syracuse";

const introduction = `Hi, my name is ${myName} I am ${myAge} years old and I live in ${myCity}`;

console.log(introduction);

// 2. methods
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
console.log(menuBtn);

// need to identify: "event name", callback function // every function has its own set of () and {}
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event