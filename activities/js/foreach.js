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


numbers.forEach(double);
numbers.forEach(display);