
var userMessage = prompt("Enter a message:");

if (userMessage) {
    for (var i = 1; i <= 6; i++) {
        var heading = document.createElement('h' + i);
        
        heading.textContent = userMessage;

        document.body.appendChild(heading);
    }
} else {
    alert("Please refresh the page and enter a valid message.");
}
