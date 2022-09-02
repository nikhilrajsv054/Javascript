// if,else if,switch

let n=10;
if(n>0){
    console.log('n is positive');
}else if(n>0){
    console.log('n is negative')
}else{
    console.log('n is zero')
}

// ternary operator

let age =20
let status = age >= 18 ? 'Eligible' :'not eligibel';
console.log('Status is',status)

//switch

let choice ='a';
switch(choice){
    case 'a': console.log('trip to paris');
                break;
    case 'b': console.log('trip to new york');
                break;          
    default : console.log('trip to delhi');
}