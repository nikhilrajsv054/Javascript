let globarvar = 'Global variable'

function demo(){
    let globarvar = 'new global variable'
    console.log(globarvar);
    localVar = 'local variable'
   
    
}

demo();


console.log(localVar);