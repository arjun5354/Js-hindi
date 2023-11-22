const coding=['js','ruby','java','python','cpp']

// coding.forEach( function (item){
//     console.log(item);
// });
coding.forEach((val)=>{
    console.log(val);
})
function printme(item){
    console.log(item);
}
coding.forEach(printme)

coding.forEach((item,idx,arr)=>{
    console.log(item,idx,arr);
})
const myCoding=[
    {
    languageName:'javascript',
    languageFile:'js'
    },
    {
    languageName:'c++',
    languageFile:'cpp'
    },
    {
    languageName:'Python',
    languageFile:'py'
    },
]
myCoding.forEach( (item)=>{
console.log(item.languageName);
})