function calculateCircleArea() {
    let radiusIn = prompt("Enter the radiuss of the circle:");
    let radius = Number(radiusIn);
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a +ve number for the radius.");
        return;
    }

    let area = Math.PI * Math.pow(radius, 2);
    alert(`Arerea of the circle with radius ${radius} = ${area.toFixed(2)}`);

    let numberIn = prompt("Enter a number to calculate its square root:");
    let number = Number(numberIn);
    if (isNaN(number) || number < 0) {
        alert("Please enter a non-neg number.");
        return;
    }

    let squareRoot = Math.sqrt(number);
    alert(`SR of ${number} = ${squareRoot.toFixed(2)}`);

    let angleInput = prompt("Enter an angle in degrees to calculate its cos:");
    let angle = Number(angleInput);
    if (isNaN(angle)) {
        alert("Please enter a number for the angle.");
        return;
    }

    let radians = angle * (Math.PI / 180);
    let cosine = Math.cos(radians);
    document.getElementById("result").innerText = `Cos of ${angle}  = ${cosine.toFixed(2)}`;
}