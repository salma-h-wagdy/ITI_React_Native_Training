function getUserInfo() {
    var name;
    while (true) {
        name = prompt("Enter your name (letters):");
        if (/^[a-zA-Z]+$/.test(name)) break;
        alert("Please enter a name with letters only.");
    }

    var mobile;
    while (true) {
        mobile = prompt("Enter your mobile number (11 digits):");
        if (/^(010|011|012|015)\d{8}$/.test(mobile)) break;
        alert("Please enter a mobile number.");
    }

    var phone;
    while (true) {
        phone = prompt("Enter your phone number (8 numbers):");
        if (/^\d{8}$/.test(phone)) break;
        alert("Please enter a phone number.");
    }

    var email;
    while (true) {
        email = prompt("Enter your email (ex@email.com):");
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(email)) break;
        alert("Please enter a email address.");
    }

    var color;
    while (true) {
        color = prompt("Choose a color (red, greeen,or blue):").toLowerCase();
        if (["red", "green", "blue"].includes(color)) break;
        alert("Please choose a color: red, green, or blue.");
    }

    var welcome = document.getElementById("welcome");
    var phoneMes = document.getElementById("phone");
    var mobileMes = document.getElementById("mobile");
    var emailMes = document.getElementById("email");

    welcome.textContent = `Welcom ${name}`;
    phoneMes.textContent = `Your phone number is ${phone}`;
    mobileMes.textContent = `Your mobile number is ${mobile}`;
    emailMes.textContent = `Your email is ${email}`;


    var messages = document.getElementsByClassName("message");
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.color = color;
    }
}
