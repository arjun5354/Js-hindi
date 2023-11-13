let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate);

// let mycreatedDate=new Date(2023,0,23)
// console.log(mycreatedDate.toDateString());

// let mycreatedDate=new Date(2023,0,23,5,3)
// console.log(mycreatedDate.toLocaleString());

// let mycreatedDate=new Date("2023-01-14")
// console.log(mycreatedDate.toLocaleString());

let mycreatedDate=new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log((myTimeStamp));
console.log((mycreatedDate.getTime()));
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long"
})