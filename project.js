// script.js

const chickenList = document.getElementById('chicken-list');
const addChickenBtn = document.getElementById('add-chicken-btn');
const chickenTemplate = document.getElementById('chicken-template');

// Sample data for testing
const chickensData = [
  {
    name: 'Chicken 1',
    age: '2 years',
    breed: 'Leghorn',
    eggColor: 'White',
    imageUrl: 'https://via.placeholder.com/100',
    eggs: []
  },
  {
    name: 'Chicken 2',
    age: '1.5 years',
    breed: 'Ameraucana',
    eggColor: 'Blue',
    imageUrl: 'https://via.placeholder.com/100',
    eggs: []
  }
];

// Render chickens
function renderChickens() {
  chickenList.innerHTML = '';
  chickensData.forEach(chicken => {
    const templateClone = chickenTemplate.content.cloneNode(true);
    const chickenElement = templateClone.querySelector('.chicken');
    const chickenName = templateClone.querySelector('.chicken-name');
    const chickenAge = templateClone.querySelector('.chicken-age');
    const chickenBreed = templateClone.querySelector('.chicken-breed');
    const chickenEggColor = templateClone.querySelector('.chicken-egg-color');
    const chickenImg = templateClone.querySelector('.chicken-img');
    const addEggBtn = templateClone.querySelector('.add-egg-btn');

    chickenName.textContent = chicken.name;
    chickenAge.textContent = `Age: ${chicken.age}`;
    chickenBreed.textContent = `Breed: ${chicken.breed}`;
    chickenEggColor.textContent = `Egg Color: ${chicken.eggColor}`;
    chickenImg.src = chicken.imageUrl;

    addEggBtn.addEventListener('click', () => {
      const eggWeight = prompt('Enter egg weight:');
      if (eggWeight !== null && eggWeight.trim() !== '') {
        const egg = { date: new Date().toLocaleDateString(), weight: eggWeight };
        chicken.eggs.push(egg);
        console.log(`Egg added for ${chicken.name}:`, egg);
        // Here you can store the updated data (chickensData) to localStorage or a server
      }
    });

    chickenList.appendChild(templateClone);
  });
}

// Event listener for adding a new chicken
addChickenBtn.addEventListener('click', () => {
  const chickenName = prompt('Enter chicken name:');
  const chickenAge = prompt('Enter chicken age:');
  const chickenBreed = prompt('Enter chicken breed:');
  const chickenEggColor = prompt('Enter egg color:');
  const chickenImageUrl = prompt('Enter chicken image URL:');

  if (chickenName && chickenAge && chickenBreed && chickenEggColor && chickenImageUrl) {
    const newChicken = {
      name: chickenName,
      age: chickenAge,
      breed: chickenBreed,
      eggColor: chickenEggColor,
      imageUrl: chickenImageUrl,
      eggs: []
    };
    chickensData.push(newChicken);
    renderChickens();
    console.log('New chicken added:', newChicken);
    // Here you can store the updated data (chickensData) to localStorage or a server
  } else {
    alert('Please fill in all fields.');
  }
});

// Initial rendering
renderChickens();
