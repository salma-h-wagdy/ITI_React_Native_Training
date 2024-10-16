function fetchData(url) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText);
            displayTable(data); 
        } else {
            displayError(`Request failed with status ${xhr.status}`);
        }
    };

    xhr.onerror = function() {
        displayError('Network error');
    };

    xhr.send();
}

function displayTable(data) {
    const tableBody = document.getElementById('table');

    tableBody.innerHTML = '';

    data.forEach(user => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        tableBody.appendChild(row);
    });
}

function displayError(message) {
    const errorMsg = document.getElementById('error');
    errorMsg.textContent = message;
}

// fetchData("https://jsonplaceholder.typicode.com/users");


function* fibonacciCount(count) {
    let a = 0, b = 1, n = 0;
    
    while (n <count) {
        yield a;
        [a, b] = [b, a + b]; 
        n++;
    }
}

function printFibonacciCount(count) {
    let fibGen = fibonacciCount(count);
    for (let num of fibGen) {
        console.log(num);
    }
}


function* fibonacciMaxValue(maxValue) {
    let a = 0, b = 1;
    
    while (a <= maxValue) {
        yield a;
        [a, b] = [b, a + b]; 
    }
}

function printFibonacciMaxValue(maxValue) {
    let fibGen = fibonacciMaxValue(maxValue);
    for (let num of fibGen) {
        console.log(num);
    }
}

