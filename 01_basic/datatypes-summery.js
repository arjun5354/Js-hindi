// primitive // call by value

// 7 types : String , Number,Bollean,null,undefined,Symbol,BigInt

// Refrence Type/ Non premitive

// Array,objects,Functions

// Symbol->Stores unique value
const id=Symbol('123')
const Anotherid=Symbol('123')
console.log(id==Anotherid);

// BigInt
const bigNumber=34235246563454232352354633463n;
console.log(bigNumber);
console.log(typeof bigNumber);
// Array, Objects,Function

const heros=[ "Shaktiman","naagraj","doga"]

let obj={
    name:"Arjun",
    age:22,
}

const myfunction=function () {
    console.log("Hello World");
}
myfunction();

// ***************** Memory *****************
// stack(Primitive) , Heap(Non-Primitive)
let myYoutube = "Arjun.youtube.com";

let anothername=myYoutube
 
anothername="nayakTheBoss";
console.log(myYoutube);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="arjun@google.com"
console.log(userOne.email);
console.log(userTwo.email);