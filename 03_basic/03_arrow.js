const user={
    username:"Arjun",
    price:999,
 
      welcomeMsg:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
      }


}
user.welcomeMsg()
user.username="Sam"
user.welcomeMsg()

console.log(this);

// function chai(){
//     const username="Arjun"
//     console.log(this.username);  // we cannot access this in the function it only accessible in object
// }
// chai()

// const chai =function(){
//     let username="Arjun"
//     console.log(this.username);     //  we cannot access this in the function it only accessible in object
// }
// chai()
const chai =()=>{   // Arorw function
    let username="Arjun"
    console.log(this);
}
chai()

// const addTwo=(num1,num2)=>{ // Explicitly return
//     return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2   // Implecit return
// const addTwo=(num1,num2)=> (num1+num2 )  // Implecit return
const addTwo=(num1,num2)=> ({username:"Arjun"})  // Implecit return

console.log(addTwo(349,11));