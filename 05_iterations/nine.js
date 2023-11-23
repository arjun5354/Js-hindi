const myNums=[1,2,3]
let myTotal=myNums.reduce((acc,currVal)=>{
    return acc+currVal;
},0) // Accumulator first value it may be 0,1,2,4 etc.
 myTotal=myNums.reduce(function(acc,currVal){
    console.log(`acc:${acc} and currval: ${currVal}`);
    return acc+currVal;
},0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'data science course',
        price:2999
    },
    {
        itemName:'SWE course',
        price:2999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+(item.price),0)
console.log(priceToPay);