function sortArray() {
    let numbers = [];

    for (let i = 0; i < 5; i++) {
        let input = prompt(`Enter number ${i + 1}:`);
        let number = Number(input);
        if (isNaN(number)) {
            alert("Please enter a valid number.");
            i--;
        } else {
            numbers.push(number);
        }
    }

    let ascending = [...numbers].sort((a, b) => a - b);
    let descending = [...numbers].sort((a, b) => b - a);

    document.getElementById("results").innerHTML = `
                <p>Entered values: ${numbers.join(', ')}</p>
                <p>Descending order: ${descending.join(', ')}</p>
                <p>Ascending order: ${ascending.join(', ')}</p>
            `;
}

sortArray();