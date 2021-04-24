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


