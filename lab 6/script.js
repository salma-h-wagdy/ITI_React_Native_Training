var myWin;

function flyingWin() {
    myWin = window.open("", "", "width=200,height=150,top=0,left=0");
    let x = 0, y = 0;
    const moveInterval = setInterval(function () {
        myWin.moveTo(x, y);
        x += 50;
        y += 25;
        if (x >= screen.width - 200 || y >= screen.height - 150) {
            clearInterval(moveInterval);
            myWin.close();
        }
    }, 500);
}

function textWin() {
    var textWin = window.open("", "", "width=400,height=300 ,top = 200, left = 800");
    var message = "Typing Message";
    var index = 0;

    function showLetter() {
        if (index < message.length) {
            textWin.document.write(message.charAt(index));
            index++;
            setTimeout(showLetter, 200);
        } else {
            setTimeout(function() {
                textWin.close();
            }, 200);
        }
    }

    showLetter();
}

function registerUser() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    var queryString = `name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}`;
    location.href = `welcome.html?${queryString}`;
}


var currentIndex = 0;
var slideshowInterval;
var images = [
    "images/1.jpg", 
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];

function showImage(index) {
    var imgElement = window.document.getElementById("Image");
    imgElement.src = images[index];
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
}

function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
}

function startSlideshow() {
    slideshowInterval = window.setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 500);
}

function stopSlideshow() {
    window.clearInterval(slideshowInterval);
}


