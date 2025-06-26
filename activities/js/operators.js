let students = 31;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2; 
do{
    if (students%2==0){
        console.log(`students population is even`);  
    }else{
        console.log(`studens population is odd`);  
    }
    students++;
}while(students<60);

console.log(students);
