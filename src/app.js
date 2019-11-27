
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

//---------------------------------------------//
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


//---------------------------------------------//

// Function Invocation and execution stack

function b(){
}
function a(){
    b();
}
a();

/*
1. Global exceution contect is created and code is executed
    function b() and function a() are placed in memory during the creation phase.
    in execution phase, a is invoked

2) A new execution context is craeted and placed on execution stack.
3) b() invocation is encountered so a new execution context for b is created an dplaced in execution stack.

*/


//---------------------------------------------//


// Variable environments

function b(){
    var myVar;
    console.log(myVar); //undefined
}
function a(){
    var myVar =2;
    console.log(myVar); //2
    b();

}
var myVar =1;
console.log(myVar); //1
a();

// 1) Global execution is created myVar=1
// 2) a() execution context is created myVar=2
// 3) b() execution is created myVar=undefined

//---------------------------------------------//

// Scope Chain

function b(){
    console.log(myVar); //1
}
function a(){
    var myVar =2;
    console.log(myVar); //2
    b();

}
var myVar =1;
console.log(myVar); //1
a();



//-----



function a(){
    function b(){
        console.log(myVar); //2 Here b outer reference points to a
    }
    var myVar =2;
    console.log(myVar); //2
    b();

}
var myVar =1;
console.log(myVar); //1
a();




//---------------------------------------------//

// Asynchronous callbacks

function waitThreeSeconds(){
    var ms =3000 +new Date.getTime();
    while(new Date() < ms){}
    console.log("function finished");

}

function clickHandler(){
    console.log("click event");
}

//listen for click event
document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log("finished execution");

// If click event is called befor three seconds are over o/p will be:

/*
function finished
execution finished
click event
*/

//Because though event occured but execution stack was not empty. SO JS engine first executed execution stack then added event handler from queue.

//---------------------------------------------//


//Operators

var a = 3 + 4;
console.log(a); //7


/*
function +(a,b){
    return // add two numbers
}
*/


// +(a,b) is difficult to understand. So JS allows infix notation where operator sits between the two parameters.

//operator associativity and precedence

var a = 3 + 4 * 5
console.log(a); //23 multiplication has higher precedence


var a=2, b=3, c=4
a=b=c;
console.log(a); //4
console.log(b); //4
console.log(c); //4

// coercion

var a = 1 + '2'
console.log(a) //12 1 coerced to string 1

// comparison operators

console.log(1<2<3)
//Left to right associativity

//1<2 = True (1)
//1<3 True

console.log(3<2<1)
//o/p: true
//3<2 False(0) coercion false to 0
//0<1 true

// Strict equality

3==3 //true
'3'==3 //true because of coercion
false==0 //true

3 === '3' //false


//---------------------------------------------//

//Existence and booleans

var a;  //undefined
if(a || a===0) //a is converted to boolean and boolean value for undefined is false coercion advantage
console.log("A is true");
else
console.log("a is undefined"); 


//a===0 because if a is 0 it doesn't mean lack of existence


//---------------------------------------------//

//Default values

function greet(name){
    name =name || 'Kriti' //legacy way of setting default value. ES6 has introduced new way 
    //undefine || Kriti returns Kriti
    //careful about 0 0||1 is 1
    console.log("hello "+name);
}
greet("Kriti"); //Hello Kriti

greet(); //Hello undefined name coerced to string 

// || operator returns first value that is true 







