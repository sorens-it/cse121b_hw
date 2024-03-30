/* Profile Object */
let myProfile = {
    name: "John Doe",
    photo: "images/profile.jpg",
    favoriteFoods: ["Pizza", "Sushi", "Burgers"],
    hobbies: ["Reading", "Traveling", "Cooking"],
    placesLived: []
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push(
    {
      place: 'San Francisco, CA',
      length: '1 year'
    },
    {
      place: 'New York, NY',
      length: '3 years'
    }
    // Add more places lived as needed
  );
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.getElementById('name').textContent = myProfile.name;
  
  /* Photo with attributes */
  const photoElement = document.getElementById('photo');
  photoElement.setAttribute('src', myProfile.photo);
  photoElement.setAttribute('alt', myProfile.name);
  
  /* Favorite Foods List */
  const favoriteFoodsList = document.getElementById('favorite-foods');
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });
  
  /* Hobbies List */
  const hobbiesList = document.getElementById('hobbies');
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
  
  /* Places Lived DataList */
  const placesLivedList = document.getElementById('places-lived');
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
  });
  