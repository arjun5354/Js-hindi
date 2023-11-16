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

// const obj3=Object.assign({},obj1,obj2) // (Target , source)

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

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// *************** Object destructure ************************
console.log();
// course.courseInstructor
// const {courseInstructor}=course
// console.log(courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);

const navbar=({company})=>{  // props.company->{company} [destructuring]

}
navbar(company="hitesh")

// Api->upne kam dusro se karwa lene ko bolte hai api
// Backend se kuch value ate hai un value ko app kaise likhte hai (old->xml structure || new->json structure)

// API

// {
//     "name":"Arjun",
//     "coursename":'js in hindi',
//     "price":"free"
// }

[
{},
{},
{},
]