const useremail="A@gmail.ai"
if(useremail) console.log("Got user email");
else console.log("Don't have user email");

//  falsy value

// false,0,-0,BigInt 0n ,"",null,undefined,NaN

// Truthy value
// "0",'false'," ",[],{},function(){}

const obj={}
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}

// nullish Coalescing Operator(??): null operator

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??10
val1=undefined??12??23
console.log(val1);