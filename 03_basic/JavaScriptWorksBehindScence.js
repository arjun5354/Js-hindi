/*

Java script Execution context

Global Execution Contenxt->This main rakh dia jata hai
function Execution Contenxt
Eval Execution Contenxt

1.memory phase and 2.  Execute phase
By default value in memory phase of a variable is Undefined
*/

let val1=10
let val2=5
function addNumber(num1,num2){
    return num1+num2;
}
let result1=addNumber(val1,val2)
let result2=addNumber(10,2)