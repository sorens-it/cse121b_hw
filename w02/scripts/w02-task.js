/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullname = "Soren Petersen";
let currentYear = new Date().getFullYear();
let profilePicture = "images/profilePicture.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img[src="images/profile.jpg"]');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Sushi", "Burgers"];
foodElement.textContent = favoriteFoods.join(", ");
let newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.shift();
