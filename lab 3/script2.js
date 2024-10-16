let sum = 0;
let Flag = true; 
while (Flag) {
  let userInput = prompt("Enter a number (0 to stop):");
  let number = parseFloat(userInput);

  if (!isNaN(number)) {
    sum += number;
  } else {
    alert("Please enter a valid number.");
  }


  Flag = !(number === 0 || sum > 100);
}

alert("Total sum of entered values: " + sum);
