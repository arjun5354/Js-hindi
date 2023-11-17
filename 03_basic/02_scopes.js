// let a=20;
// const b=34;
// var c=32;

let a=300
if(true){
let a=20;
const b=34;
var c=32;
console.log("Inner ",a);
}
console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username="Arjun";
    function two(){
        const website="youtube"                   // Closer scope
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true) {
    const username="Arjun"
    if(username==="Arjun"){
        const website=" youtube"
        console.log(username+website);
    }
    // console.log(website); --> Error
}
// console.log(username); -->Error


// ++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}

addTwo(5)  // It will give error
const addTwo=function (num){
    return num+2;
}