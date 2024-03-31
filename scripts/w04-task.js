/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Soren Petersen",
  photo: "images/profilePicture.png",
  favoriteFood: ["Dr Pepper","Red Bull","Chocolate Ice Cream"],
  hobbies: ["SAHD", "Reading", "Watching Interesting Movies", "Road to Recovery"],
  placeLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
  {
      place: "Fremont, California",
      length: "21 Years"
  },
  {
      place: "Sunnyvale, California",
      length: "1 year",
  },
  {
      place: "Pasco, Washington",
      length: "1.5 Years"
  },
  {
      place: "Rexburg, Idaho",
      length: "3 Years"
  },
  {
      place: "Saint Anthony, Idaho",
      length: "10 Years"
  },
  {
    place: "Marana, Arizona",
    length: "3 Years"
  }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
  let bullets =  document.createElement("li");
  bullets.textContent = food;
  document.querySelector("#favorite-foods").appendChild(bullets);   
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
  let bullets = document.createElement("li");
  bullets.textContent = hobby;
  document.querySelector("#hobbies").appendChild(bullets);
})
/* Places Lived DataList */
myProfile.placeLived.forEach(places=>{
  let place = document.createElement("dt");
  place.textContent = places.place;
  document.querySelector("#places-lived").appendChild(place);
  
  let length = document.createElement("dd");
  length.textContent = places.length;
  document.querySelector("#places-lived").appendChild(length);
})