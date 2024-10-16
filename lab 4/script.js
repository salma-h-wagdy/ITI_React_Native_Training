function checkPalindrome() {
    var input = prompt("Enter a string:");

    var caseSensitive = confirm("Should thee check be case-sensitive? ( cancel for no)");

    var string = input.replace(/[^a-zA-Z0-9]/g);
    if (!caseSensitive) {
        string = string.toLowerCase();
    }

    var isPal = string === string.split('').reverse().join('');

    if (isPal) {
        alert(`String "${input}" is a palindrome.`);
    } else {
        alert(`The string "${input}" is not a palindrome.`);
    }
}

checkPalindrome();
