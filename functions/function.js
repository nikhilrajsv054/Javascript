// Declarative function
function add(num1, num2){
    return num1+num2;
}
let result = add(1,2);
console.log('sum:',result)


//Anonymous Function
// function as a parameter to another function

// Functions which either accept or return other functions 
// are called Higher order Functions


function greet(choice){
    choice();
}

greet(function(){console.log('Hello world')})


// Function Expression 

// var myFunction = function (parameters){
    // function body
//}

function greet_1(choice){
    let message = choice();
    console.log(message);
}

let message = function(){return "hello world"};

greet_1(message)

// ** functions can be assigned to a variable
// ** Functions can be passed as a function Parameter
// Function can be returned from another function


//_ ADVANCED FUNCTION PARAMETERS_

//Default Parameters

function multiply(num1, num2 = 1){
    return num1 * num2;
}
const result1 = multiply(5, 5);
console.log("Result 1: ", result1); 

const result2 = multiply(5);
console.log("Result 2: ",result2); 

const result3 = multiply(5, undefined);
console.log("Result 3: ",result3); 

//Destructured Parameters - Array
const names = ["Andrew", "James", "Chris"];
function showDetails([arg1, arg2]){
    console.log("Arg1: ",arg1);
    console.log("Arg2: ",arg2);
}
showDetails(names);

//Destructured Parameters - Object
const empObj = {name : "Mark", age : 25, country : "India"}
function showEmpDetails({name, country}){
    console.log("Name: ",name);
    console.log("Country: ",country);
}

showEmpDetails(empObj);


// FUNCTION AS OBJECTS

// function passed as a paramter
function welcome(){console.log("Hello World");}
function goodbye(){console.log("See you later");}

function greet(choice){
choice();
}

greet(welcome);
greet(goodbye);
