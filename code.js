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

    //refactored code

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

function isFive(input){

    if(input === "5"){
        return true;
    }
    else{
        return false;
    }
}


function isEven(input){

    if(input === true || input === false){
        return false;
    }
    if(input % 2 === 0){
        return true;
    }
    if(input % 2 !== 0){
        return false;
    }
    if(typeof input === "undefined") {
        return false;
    }
}

function isVowel(input){

    //refactored code to get all green lights no matter the input

    if(input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u'){
        return true;
    } else if(input == 'A' || input == 'E' || input == 'I' || input == 'O' || input == 'U'){
        return true;
    }else{
        return false;
    }

    // Step by Step testing to have everything green following TDD
    // if(input === 'a'){
    //     return true;
    // }
    // if(input === 'A'){
    //     return true;
    // }
    // if(input === 'y'){
    //     return false;
    // }
    // if(typeof input !== 'string'){
    //     return false;
    // }
    // if(input.length > 1){
    //     return false
    // }

}

