var userString = prompt("Enter a string:");

while (!userString) {
  userString = prompt("Please enter a valid string:");
}

var charCount = prompt("Enter the char to count:");

while (!charCount || charCount.length !== 1) {
  charCount = prompt("Please enter a single character:");
}

var count = 0;

for (var i = 0; i < userString.length; i++) {
  if (userString.charAt(i) === charCount) {
    count++;}
}

alert("Char '" + charCount + "' appears " + count + " times in the string.");
