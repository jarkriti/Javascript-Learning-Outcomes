
//Hoisting and creation 

b(); //b called!
console.log(a); //undefined
console.log(c); //c is not defined error


var a = "Hello World"

function b(){
    console.log("b called!");
}

console.log(a); //Hello World
b(); //b called!


//Undefined


console.log(d); // d is not defined. Uncaught Reference error means I don't have it in memory

var a;
if(a===undefined)
console.log("a is undefined"); //a is undefined
else
console.log(' a is defined');

var b;
if(b===undefined)
console.log("b is undefined"); 
else
console.log('b is defined'); // b is defined





