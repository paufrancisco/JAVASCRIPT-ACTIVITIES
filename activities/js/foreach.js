let numbers = [1,2,3,4,5];
let fruits = ["Banana", "Apple", "Coconut"];
// for(i in numbers){
//     console.log(numbers[i]);
// }

function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
function sentenceCase(element, index, array){
    array[index] = element[0].toUpperCase() + element.slice(1);
}

// fruits
fruits.forEach(sentenceCase);
fruits.forEach(display);
// number
numbers.forEach(double);
numbers.forEach(display);