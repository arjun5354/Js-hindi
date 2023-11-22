// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const it of arr) {
    console.log(it);
}const grettings='hello world';
for (const it of grettings) {
    console.log(it);
}

// maps
const map=new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('US',"United state of India")
map.set('fr',"France")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':->',value);
}

const myObject={
    Game1:'NFS',
    game2:'Spiderman'
// }
// for (const [key,value] of myObject) {  // Ye nehi chalega
//     console.log(key,':->',value);

// }