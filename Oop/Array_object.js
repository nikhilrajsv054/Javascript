// object is a collection of properties
// types 1. Builtin Objects(Array,String,Date) 
//2.Custom Objects (Defined by the programmer)


let phones = [110,'Onplus',6300];
console.log('Phone array:',phones)

console.log('length :',phones.length)

for(let i =0 ;i<phones.length;i++){
    console.log('Index :',i,'Array element:',phones[i]);
}

phones[2] = 'iphone x'
console.log('new array:',phones)

phones.push('iqoo');
console.log('push',phones)

phones.pop();
console.log('pop',phones)

phones.forEach((element)=>{console.log('array element :',element)})

// map() used for creating a mapped array
// mapped array: an array created after applying some transormation to the existing array
// size of the mapped array always same as size of the initial array
let mappedarray = phones.map((phones)=>{
    if(typeof phones === 'string'){
        return phones.toUpperCase();}
    // }else{
    //     return phones;
    // }
})

console.log('phones sting:',mappedarray)

//filter()
//filters the array based on some condition

let filteredPhones = phones.filter((phones)=>{
    return typeof phones === 'number'
});

console.log('filtered array :',filteredPhones);

// find()
// find the particular element in the array

let foundphone =phones.find((phones)=>{
    return phones === 'Onplus'
})

console.log('find_phone:',foundphone)


//shift()
//Removes the first element of an array and returns that element.

let myArray = ["Android", "iOS", "Windows"];

console.log(myArray.shift()); //Android

console.log(myArray); //["iOS", "Windows"]

//unshift()
//Adds new element to the beginning of an array and returns the new length
let myArray1 = ["Android", "iOS", "Windows"];

myArray.unshift("Linux"); 

console.log(myArray);

//["Linux","Android","iOS","Windows"]

//splice()
// Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements.

// Syntax:

// array.splice(index,deleteCount,items);

// index = index for new item

// deleteCount = number of items to be removed, starting from index next to index of new item

// items = items to be added

let myArray2 = ["Android", "iOS", "Windows"];

//inserts at index 1

myArray.splice(1, 0, "Linux"); 

console.log(myArray); 

// ["Android","Linux", "iOS", "Windows"]


