let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); 
console.log(minimum);


let sample = [12,2,3,4,5,6];
let max = sample[0];

for(let i = 0; i<sample.length; i++){
    if(sample[i]>max){
        max = sample[i];
        console.log(`New max: ${max}`);
    }
}

console.log(`Final max: ${max}`);

let username = "Paulonism";

for(let i in username){
    console.log(username[i]);
}

let good = [...username, ...sample];
console.log(good, `type is ${typeof good}`, typeof username);