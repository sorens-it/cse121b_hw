/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function Declaration
function add(number1, number2) {
    return number1 + number2;
  }
  
  /* Function Expression - Subtract Numbers */
  // Function Expression
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  /* Arrow Function - Multiply Numbers */
  // Arrow Function
  const multiply = (number1, number2) => number1 * number2;
  
  /* Open Function Use - Divide Numbers */
  // Function Declaration
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  /* Decision Structure */
  // Event listener for Get Total Due button
  document.querySelector('#getTotalDue').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.querySelector('#membershipCheckbox').checked;
    let total = subtotal;
    if (membershipCheckbox) {
      total *= 0.8; // Apply 20% discount
    }
    document.querySelector('#total').textContent = `Total Due: $${total.toFixed(2)}`;
  });
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  // Array to hold numbers 1 through 13
  const numbersArray = Array.from({length: 13}, (_, index) => index + 1);
  document.querySelector('#array').textContent = numbersArray.join(', ');
  
  /* Output Odds Only Array */
  // Use the filter() method to find odd numbers
  const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
  document.querySelector('#odds').textContent = oddNumbers.join(', ');
  
  /* Output Evens Only Array */
  // Use the filter() method to find even numbers
  const evenNumbers = numbersArray.filter(number => number % 2 === 0);
  document.querySelector('#evens').textContent = evenNumbers.join(', ');
  
  /* Output Sum of Org. Array */
  // Use the reduce() method to sum the array elements
  const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.querySelector('#sumOfArray').textContent = sumOfArray;
  
  /* Output Multiplied by 2 Array */
  // Use the map() method to multiply each element by 2
  const multipliedArray = numbersArray.map(number => number * 2);
  document.querySelector('#multiplied').textContent = multipliedArray.join(', ');
  
  /* Output Sum of Multiplied by 2 Array */
  // Use the map() and reduce() methods to sum the array elements after multiplying each element by two
  const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
  