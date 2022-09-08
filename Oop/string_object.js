// indexOf()
// Used for finding the index of a character or a string present inside the string variable.

let myString = 'Aeroplane'
console.log("firts character:",myString)

let index = myString.indexOf('plane')
console.log('Index value:', index);

let index1 = myString.indexOf('plane')
console.log('Index value:', index1);

// if the index value is know and we want to find the character 
// at that position it can be done using charAt().

let charat = myString.charAt(4)

console.log('charcter at 6 index:',charat);

//split()
// to split the string based on the certain character we can use the split() method

let splitarr = myString.split('A',1);
console.log('split Array: ',splitarr)

// to extract some character from the existing string we can use the substr() method

let substr = myString.substr(0,5)
console.log('substring',substr)

// to extract characters from a string using the starting and ending index use the substring() method

let substring = myString.substring(5)
console.log('substring',substring)

//We can change the case of the string by using: toUpperCase() or toLowerCase()
let uppercase = myString.toLowerCase();
let lowercase = myString.toUpperCase();

console.log('lower:',lowercase,'upper:',uppercase)
