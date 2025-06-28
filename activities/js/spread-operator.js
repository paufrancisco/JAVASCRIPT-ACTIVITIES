let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); 
console.log(minimum);


let sample = [4, 12, 8, 210, 5];
let max = sample[0];

for(let i = 0; i<sample.length; i++){
    if(sample[i] > max){
        max = sample[i];
        console.log(`This is the max: ${max}`);
    }
    console.log(sample[i]);
}
console.log(`Final max ${max}`);