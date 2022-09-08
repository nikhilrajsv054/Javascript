//#1 
function doSomething(name){
    console.log(10+"SKD" +12);
    }
    result=doSomething(10);
    console.log(result);   //line 5
// Identify the value that will be displayed in console at line 5?
// Ans: undefined

//#2

myFun=function doSomething(a){
    console.log(a*a);
}
myFun(10)

// function validateTravellerPassword(password) {
//     for (i = 0; i < password.length; i++) {
//     }
// }

// function validateTravellerName(name) {
//     console.log(i);
//     for (i = 0; i < name.length; i++) {
//     }
// }

// validateTravellerPassword("123456");
// validateTravellerName("Jack");

// function displayMessage(package){
//     if(package == "Paris"){
//         var message = "Paris package selected";
//     }
//     console.log(message);
// }
// displayMessage("Paris");
// displayMessage("New York");
let addValues=(a=30,b)=>a+b;
console.log(addValues(35));