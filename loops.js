//for while dowhile

for(let i=0; i<=5;i++){
    console.log(i);
}

let j =0;
while(j<=5){
    console.log('In while:',+j);
    j++;
}

let k=0;
do{
    console.log('Do while:', +k);
    k++;
}while(k<=5);

var x,y;
var chr='';
for(x=1; x <=5; x++)
{
   for (y=1; y <= x; y++)
     {
     if(y%2!=0){
        chr=chr+("1");
     }
     else{
         chr=chr+("#")
     }
         
      }
 console.log(chr);
 chr='';    
}

var i;
var x;
for(i=1; i<=5; i++)
{
 for(x=1; x<=i; x++)
    console.log(x);
    console.log("<br>");
}
// dow while should be used only when the body needs
//to be executed at least once,regardless of the outcome of the condition
