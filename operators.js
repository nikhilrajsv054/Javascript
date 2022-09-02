
//Below code shows use of console.log()
place = "Florida"
console.log(place);// Florida
console.log("Hello World!");// Hello World!


//Below code shows difference between undefined and null

//undefined
var placeToVisit;
console.log(placeToVisit); //undefined

//null
cabDetail = null;
console.log(cabDetail);    //null




//Double equals and tripe equals

//Double equals
// comparison between string and number
console.log('100' == 100)   //true
var x = 5;   // number
var y = '5' // string
console.log(x == y)    // true



//Tripe quals
// comparison between string and number
console.log('100' === 100)   // false
var x = 5; // number
var y = '5' // string
console.log(x === y)  // false

// use of + operator on string
console.log('hello' + ' world!'); // 'hello world!'
console.log('Trip' + 'to' + 'WonderLand'); // 'Trip to WonderLand'
console.log('Trip' + 100); // 'Trip100'
console.log('Trip ' + undefined); // 'Trip undefined' 
console.log('100'+20); //10020
console.log(null + 'Trip'); // 'nullTrip'


//use of typeof() operator
console.log(typeof 100); // "number"
console.log(typeof 'Lets go to Trip'); // "string"
trip = null; 
console.log(typeof trip); // "null"


//use of exponentiation operator (**)
console.log(5**2); // 25