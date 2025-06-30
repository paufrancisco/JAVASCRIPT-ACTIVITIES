



function func1(callback){
    setTimeout(()=> {console.log("after 3sec");
    callback()},3000);
}

function func2(){
    console.log("test 1");
    console.log("test 2");
    console.log("test 3");
}

func1(func2);