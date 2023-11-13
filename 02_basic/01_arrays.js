//arrays

// const myArray=[0,1,2,3,4,5,true ,"Arjun"]
const myArray=[0,1,2,3,4,5]
console.log(myArray[3]);
const heros=["saktiman","naagRaj"]

const array2=new Array(1,3,4,5,6)

myArray.push(6)
myArray.push(7)
myArray.pop()

myArray.unshift(4)
myArray.shift()

console.log(myArray.includes(9));
console.log(myArray.includes(9));

const newArray=myArray.join()
console.log(myArray);
console.log(typeof newArray);
console.log(newArray);


// slice , splice

console.log('A',myArray);
const myna1=myArray.slice(1,3)
console.log(myna1);
console.log();
console.log('B',myArray);


const myna2=myArray.splice(1,3)
console.log('C',myArray);
console.log(myna2);