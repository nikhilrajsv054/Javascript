//

calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPrice = ticketPrice*noOfPerson;
    return noOfPrice;
}

console.log(calculateCost(100,5));

// No parameter, single line code 

greet = () => {"single line"}
console.log(greet())

//One parameter, single line code
let trip = place => "Trip to " + place;
console.log(trip("Paris")); // Trip to Paris

//One parameter, single line code:
trip = _ => "Trip to " + _;
console.log(trip("Paris"));  // Trip to Paris
