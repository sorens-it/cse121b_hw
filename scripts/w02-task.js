/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Soren Petersen";
let currentYear = new Date().getFullYear();
let profilePicture = "images/profilePicture.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodELement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = ["Reese's Fast Break","PMPP", "French Toast", "Chocolate Milk", "Chocolate Ice Cream", "Tacos", "Ham"];

foodELement.innerHTML += `<br>${favoriteFood}`;
let missingFood = "Burger";
favoriteFood.push(missingFood);
foodELement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodELement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodELement.innerHTML += `<br>${favoriteFood}`;