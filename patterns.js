// let n=5; // height of pattern
// let string = "";

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         string += j;
//     }
//     string+= "\n";
// }
// console.log(string)


placesToVisit = ["Paris", "New York", "Switzerland"];
costPerPerson = [2500, 1500, 4500]; //corresponding value as per above array

totalAmount = null;

function calculateCost(myChoice, noOfPeople) {
  try {
    for (i = 0; i < placesToVisit.length; i++) {
      if (myChoice == placesToVisit[i]) {
        totalAmount = costPerPerson[i] * noOfPeople;
        console.log(totalAmount);
      }
    }
  } catch (err) {
    console.log("Some error occured");
  }
}

calculateCost("Paris", 5);
