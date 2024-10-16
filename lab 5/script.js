function arrayOperations() {
let numbers = [];

for (let i = 0; i < 3; i++) {
    let input = prompt(`Enter number ${i + 1}:`);
    let number = Number(input);
    if (isNaN(number)) {
        alert(" a number.");
        i--;
    } else {
        numbers.push(number);
    }
}

let sum=0 , product=1 , division=numbers[0];
for(let i =0 ; i<3 ;i++){
 sum += numbers[i];
 product *= numbers[i];
 if(i>0)
    division /= numbers[i];}
   
document.getElementById("results").innerHTML = `<p>Sum of the 3 values is: ${sum}</p>
                <p>Product of the 3 values is: ${product}</p>
                <p>Division Result of the 3 values is: ${division}</p>'`
}

arrayOperations();