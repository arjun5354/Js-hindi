const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
   console.log(myObject[key]);
}
const programming=['js','rb','py','cpp']
for (const key in programming) {
   console.log(programming[key]);
}
const map=new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('US',"United state of India")
map.set('fr',"France")
console.log(map);
for (const key in map) {
    console.log(key);
}
