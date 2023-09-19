// console.log("js has been loaded");

// variables, methods, and functions

// 1. variables
const myName = "Cc Gulbrandsen";
//console.log(myName); //if there are "quotes" you are refering to variable

const myAge = 21;
const myCity = "Syracuse";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;

//console.log(introduction);

// 2. methods
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

//console.log(menuBtn);

// need to identify: "event name", callback function // every function has its own set of () and {}
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event

// closeBtn and menuBtn are doing the same thing but in reverse //
closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); //end of closeBtn click event

// arrays and objects

//basic variable
const coffeeName = "Mocha"; //const prevents variable from being modified
const coffeeHeadline = document.createElement ("h2");
coffeeHeadline.textContent = coffeeName;
//document.body.appendChild(coffeeHeadline);

// objects 
const coffee = {
    // properties (no quotes around)
    name: "Mocha", 
    price: 3.99,
    description: "This is a delicious cup of coffee."
};
//console.log(coffee.description);

// basic array - for looping purposes and structuring a list
//const basicCoffees = ["mocha", "latte", "espresso"];
//basicCoffees.forEach(function(basicCoffee) {
//   console.log({basicCoffee});
//}); // end of basicCoffee forEach method


const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
//document.body.appendChild(coffeeObjHeadline);

// arrays [0,1,2]
//const coffees = ["Mocha", "Latte", "Espresso"];

//const coffees = [ 
    // {
    //     name: "Mocha",
    //     price: 3.99,
    //     description: "this is a delicious cup of coffee.",
    //     image: {
    //         fileName: "coffee.jpg",
    //         width: 630,
    //         height: 630,
    //         altText: "A cup of coffee."
    //     }
    // },
    // {
    //         name: "Lattee",
    //         price: 3.99,
    //         description: "this is a delicious cup of coffee.",
    //         image: {
    //             fileName: "coffee.jpg",
    //             width: 630,
    //             height: 630,
    //             altText: "A cup of coffee."
    //         }
    // },
    // {
    //     name: "Espresso",
    //     price: 3.99,
    //     description: "this is a delicious cup of coffee.",
    //     image: {
    //         fileName: "coffee.jpg",
    //         width: 630,
    //         height: 630,
    //         altText: "A cup of coffee."
    //     }
    // }
// ];
//console.log(coffees[2]);

function buildTextElement(element, className, content) {
    const newElement = docuument.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement; 
}

coffees.forEach(function(coffee) {
    // 1. deconstruct the coffee object
    const { title, price, description, image } = coffee; 

    // 2. create the html elements
    const coffeeArticle = document.createElement("article");
    coffeeArticle.classList.add("coffee-item");

    // referincing objects within the image array above
    const coffeeImage = document.createElement("img");
   // coffeeImage.src = `images/${image.fileName}`; // dynamic name within hard code ``
    coffeeImage.width = image.width;
    coffeeImage.height = image.height;
    coffeeImage.alt = image.altText;

    //const coffeeTitle = coffee; 

    // const coffeeTitle = document.createElement("h2");
    // coffeeTitle.classList.add("coffee-title");
    // coffeeTitle.textContent = title;

    const coffeeTitle = buildTextElement("h2", "coffee-title", title);

    // const coffeePrice = document.createElement("h3");
    // coffeePrice.classList.add("coffee-price");
    // coffeePrice.textContent = `$${price}`;

    const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);

    const coffeeDescription = document.createElement("p");
    coffeeDescription.classList.add("coffee-description");
    coffeeDescription.textContent = description; 

    // 3. append the elements to the parent article
    //coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    // 4. append the article to the body
    document.body.appendChild(coffeeArticle);
}); // end of coffees forEach method