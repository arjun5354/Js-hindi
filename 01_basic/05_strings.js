const name="Arjun"
const repocount=50
// console.log(name+repocount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


// Another way to declear a string

const gameName=new String('Arjun');

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('j'));

 const newStr=gameName.substring(0,4)
 console.log(newStr);


 const anotherStr=gameName.slice(-5,2)
 console.log(anotherStr);

 const newStringOne="  Arjun  "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url="https://Arjun.com/Arjun%20nayak"
 console.log(url);
console.log( url.replace('%20','-'));

console.log(url.includes("Arjun"));

console.log(url.split('/'));