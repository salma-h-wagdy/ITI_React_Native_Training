function swap(x, y) {
    [x, y] = [y, x];

    console.log(`x: ${x}, y: ${y}`);
}


function getMaxValue(...arr) {
    max = Math.max(...arr);
    console.log(`Max = ${max}`);
}

function getMinMaxValue(...arr) {

    min = Math.min(...arr),
        max = Math.max(...arr)
    console.log(`Min = ${min}, Max = ${max}`);
}


function fruits() {
    var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

    //a
    const areAllStrings = fruits.every(fruit => typeof fruit === 'string');
    console.log(`Elements are strings: ${areAllStrings}`);

    //b
    const someStartWithA = fruits.some(fruit => fruit.startsWith('a'));
    console.log(`Elements start with "a": ${someStartWithA}`);

    //c
    const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
    console.log(`Filtered fruits: ${filteredFruits}`);

    //d
    const likedFruits = fruits.map(fruit => `I like ${fruit}`);
    console.log(`Liked fruits: ${likedFruits}`);

    //e
    likedFruits.forEach(likedFruit => console.log(likedFruit));
}