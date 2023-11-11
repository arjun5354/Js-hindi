// let score="33abc"
// let score=null
// let score=undefined
let score=true
console.log(typeof(score));
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Note : 
// "33" => 33
// "33abd"=>NaN

let isloggedIn=1;
let booleanisloggedIn=Boolean(isloggedIn)
console.log(typeof booleanisloggedIn);
console.log( booleanisloggedIn);
// 1->true, 0->false
// ""->false,"Arjun"->true

let somenumber=33
let stringsomenumber=String(somenumber)
console.log(typeof stringsomenumber );
console.log(stringsomenumber );


// ********************** Operations ************************

let value=3
let negvalue=-value;
console.log(negvalue);

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2**3);
console.log(2%3);

let str1="hello"
let str2= " Arjun"

console.log(str1+str2);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(2+1+"2");
console.log(3+4*5%3);

console.log(+true)
console.log(+"")

let gameCounter=100
gameCounter++;
console.log(gameCounter);