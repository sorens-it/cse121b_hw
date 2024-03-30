/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Soren Petersen"; // Declare and instantiate a variable to hold your name.
const currentYear = new Date().getFullYear(); // Declare and instantiate a variable to hold the current year.
const profilePicture = "images/profilePicture.png"; // Declare and instantiate a variable to hold the file path (location) and file name of the image that you placed in the images folder as a string.

/* Step 3 - Element Variables */

const nameElement = document.getElementById("fullName"); // Use the document.getElementById() method to get the HTML element with the id of name and store it in a const variable named "nameElement".
const foodElement = document.getElementById("food"); // Use the document.getElementById() method to get the HTML element with the id of food and store it in a const variable named "foodElement".
const yearElement = document.querySelector("#year"); // Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement".

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`; // Assign the nameElement's innerHTML property the fullName variable value. Surround the fullName value with <strong> tags using a template literal.
yearElement.textContent = currentYear; // Use the textContent property to set the value of the element to the value of the variable currentYear.
const imageElement = document.querySelector('img[src="images/yourimagefilename.png"]'); // Use any viable method to get the profile image element stored into a variable named "imageElement".
imageElement.setAttribute('src', profilePicture); // Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
imageElement.setAttribute('alt', `Profile image of ${fullName}`); // Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]'.

/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Sushi", "Burgers"]; // Declare an array variable to hold your favorite foods.
foodElement.textContent = favoriteFoods.join(", "); // Modify the HTML element with the id of food to display your favorite foods array.

// Declare and instantiate a variable to hold another single favorite food item.
let newFavoriteFood = "Tacos";

// Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
// using a += operator and a <br> (line break character) to provide a line break.
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

// Remove the first element in the favorite food array.
favoriteFoods.shift();

// Again, append the array output showing the modified array, using a line break.
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

// Remove the last element in the favorite food array.
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array.
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

