// const tinderuser = new Object() // singletone object
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="Arjun"
tinderuser.isLoggedin=false
console.log(tinderuser);

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Arjun",
            lastname:"Nayak"
        }
    }
}
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:"abc",
        email:"a.gmail.com"
    },
]

console.log(users[0].email);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedin"));