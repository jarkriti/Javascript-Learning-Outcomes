
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


