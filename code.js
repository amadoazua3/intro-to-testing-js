// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function notHelloWorld(){
//     return "let's hope this works";
// }

function sayHello(input){

    // if(input === "Alex") {
    //     return "Hello, Alex!";
    // }else if(input === "Pat"){
    //     return "Hello, Pat!";
    // }else{
    //     return "Hello, Jane!";
    // }

    if (input === undefined){
        return "Hello, World!";
    }

    if(input === true){
        return "Hello, World!";
    }

    if(input === false){
        return "Hello, World!";
    }
    return "Hello, " + input + "!";

}


//continue from exercise #6 

function isFive(input){

    if(input === "5"){
        return true;
    }
    else{
        return false;
    }
}


function isEven(input){


    if(typeof input === "undefined") {
        console.log("hello");
        return false;
    }
    // if(input !== "undefined"){
    //     console.log("YOU DEFINITELY SHOULDN'T BE HERE=");
    //     return Boolean;
    // }
    if(input === true || input === false){
        console.log("I am here");
        return false;
    }

    if(input % 2 === 0){
        console.log("you shouldn't be here");
        return true;
    }
    if(input % 2 !== 0){
        console.log("hmm so weird its rather odd");
        return false;
    }

}

