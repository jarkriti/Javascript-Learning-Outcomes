
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


//---------------------------------------------//

// Objects and its operators

var person = new Object();
person["firstname"]="Kriti"
person["secondname"]="Jar"

var firstnameproperty = "firstname"

console.log(person)
console.log(person["firstnameproperty"]); //Kriti
console.log(person.firstname); //Kriti


person.address = new Object();
person.address.stree="77N Almaden Ave"
person.address.city="San Jose"

console.log(person.address.stree); //77N Almaden Ave //clean easy to debug
console.log(person["address"]["city"])//San Jose //use when dynamically property is obtained


//---------------------------------------------//

//Object literals

var Kriti = {
    firstname:"Kriti",
    lastname:"jar",
    address:{
        street:"77N Almaden Ave",
        city:"San Jose"
    }
}
//console.log(person.firstname); //Kriti

function greet(person){
    console.log("Hi "+person.firstname); 
}


greet(Kriti)//Hi Kriti
greet({firstname:"Manu",lastname:"gupta"}) //Hi Manu //creating object on the fly

//---------------------------------------------//

//JSON to object literal

var jsonValue = JSON.parse('{"firstname":"Kriti","lastname":"jar"}')
console.log(jsonValue) //Object literal

//Object literal to JSO value

var objectLiteral = {
    firstname: "Kriti",
    lastname: "jar"
}

console.log(JSON.stringify(objectLiteral));

//---------------------------------------------//

// First class functions

function greet(){
    console.log("Hello");
}

greet.language="English";

console.log(greet.language); //English


//---------------------------------------------//

// Function statements and function expressions

function greet(){   //function statement
    console.log("Hi");
}
greet();

var anonymousGreet = function(){ //function expression
    console.log("Hi");
}
anonymousGreet();

function log(a){
    a(); //Hi
}
log(function(){
    console.log("HI");
}); //passing function on the fly

//---------------------------------------------//

//By value and by reference

var a =3
var b = a  // by value

console.log(b) //3

b=5
console.log(b) //5
console.log(a) //3

var a = {name:'kriti'}
var b = a //by reference

b.name='manu'
console.log(a.name) //manu

// b = {name: 'Kriti'}//equal to operator assigns a new memory space.

//Now b and a points to different memory loaction and modifying b won't change a


//---------------------------------------------//

//This keyword for functions

function a(){
    console.log(this) //window
}

var b = function(){
    console.log(this) //window
}

var c ={
    name:'c object',
    log: function(){
        var self = this //by reference
        console.log(this); //c object
        function greet(){
            console.log(this) //window
            console.log(self) //c object
        }
    }
}

//---------------------------------------------//

//Arrays

var arr = [
    1,
    false,
    {
        name: 'kriti',
        age: 26
    },
    function name(){
        console.log("hello");
    }
];

arr[3](); //hello

//---------------------------------------------//

function greet(a,b,c,...d){
    console.log(a) //kriti
    console.log(arguments[1]) //sunhera
    console.log(arguments.length) //5
    console.log(d) //['ashna','mansi']
}
greet('kriti','sunhera','brina','ashna','mansi');

//---------------------------------------------//

//IIFE

var greeting = function(name){
    return 'Hello '+name;
}('John');

console.log(greeting); //Hello John

//greeting now contains a string that was returned by IIFE.

//if you want to avoid function expressions as above, a standalone function wrapped in paranthesis is also treted as function exp'


//classic ex of IIFE
(function(name){
    console.log('Hello '+name);
}('kriti')); //hello kriti

//Invocation can be done inside the paranthesis or outside it. Anything is fine.


//---------------------------------------------//

//Closures

function greet(whattosay){
    return function(name){
        console.log(whattosay +' '+ name);
    }
}

greet('Hello')('Kriti'); //Hello Kriti

//After greet is invoked it return a function but it is then removed from execution stack. Then that function is added to stack.

//This function knows what is th evalue of whattosay variable because it is pointed by functions outer reference.
//So function keeps value of their outer reference dow the scope chain. It is determined by their lexical presence.


//Ex 2
function buildfunctions(){
    var arr = [];
    for(var i=0;i<3;i++){

        //let j =i
        //let has block scoping so every time there will be a different memory spot for j and value of i will be preserved

        arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}

var fs = buildfunctions();

fs[0](); //3
fs[1](); //3  
fs[2](); //3

//arr is returned by buildfunctions. then it is removed from that stack.
//But it contains reference to outer env.
//When fs[0]() is invokded that time loop was already finished and value of i was 3.
//Hence every time 3 is returned.


//preserving value of i with IIFE
function buildfunctions(){
    var arr = [];
    for(var i=0;i<3;i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i)));
    }
    return arr;
}

var fs = buildfunctions();

fs[0](); //0
fs[1](); //1  
fs[2](); //2

//---------------------------------------------//

//Callback functions and closures

function sayhiLater(){
    var greeting = 'Hi';
    setTimeOut(function(){ //callback function
        console.log(greeting); //closure greeting takes the value from functions outer reference 
    },3000);
}

sayhiLater(); //HI after 3000 sec

//---------------------------------------------//

// bind() function example

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logname = function(lang1,lang2){
    console.log(this.fullname()); //without bind this points to global env and will return undefined for fullname
    console.log('Arguments: '+lang1+' '+lang2);
}

var logPersonName = logname.bind(person); //binds person object to logname function. this will point to person
logPersonName('en');

//call() function

logname.call(person,'en','es');
//Unlike bind() call() calls the function with first argument as the object for this variable and next arguments parameters to the function

//apply() function
logname.apply(person,['en','es']);
//it does the eaxct samething but it expects argument array 

(function(lang1,lang2){
    console.log(this.fullname()); //without bind this points to global env and will return undefined for fullname
    console.log('Arguments: '+lang1+' '+lang2);
}.apply(person,['en','es'])) //calling function on the fly

//Use

//1. function borrowing

var person2 = {
    firstname:'Jane',
    lastname:'Doe'
}

person.getFullName.apply(person2); //Jane DOe

//2. function currying

var multiply = function(a,b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this,2); // permanently sets value of a as 2 for multiplyByTwo function ref

console.log(multiplyByTwo(3)); //6 3 sill be come 2



//---------------------------------------------//

//Functional programming usage

function mapForEach(arr, fn){
    var newArr = [];
    for(var i=0; i<arr.length;i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
};

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(function(item){
    return item *2;
});
console.log(arr2); //2,4,6

var checkPastLimit = function(limiter,item){
    return item>limiter;
}
var arr4=mapForEach(arr1,checkPastLimit.bind(this,1));
console.log(arr4); //false true true

//simplified 

var checkPastLimitSimplified = function(limiter){
    return function(limiter,item){
        return item>limiter;
    }.bind(this,limiter);
}

var arr5 = mapForEach(arr1,checkPastLimitSimplified(2));
console.log(arr5); //false false true for arr1 1,2,3 

//---------------------------------------------//

//Prototypal inheritance

var person = {
    firstname:'default',
    lastname:'default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var p1 = {
    firstname: 'Kriti',
    lastname: 'Jar'
}

//Never ever do this
//This tells that now p1 inherits from person. Any property method not found in p1 will  be checked in person
p1.__proto__ = person;
p1.getFullName(); //Kriti Jar

//Reflection tells the properties and methods of the object

for(var prop in john){ //prop states the properties on john object
    if(john.hasOwnProperty(prop)){ //this checks if property is not on proto objects
        console.log(prop + " "+john[prop]); //in square bracket notation peroperty name is passed as string
    }
}

var jane={
    address:'77N almaden'
}
var jim={
    getFIrstName: function(){
        return firstName;
    }
}


_.extend(john,jane,jim) //john will contain all the properties and methods of jane and jim. 
//In addition to this it will contain __proto__ property that will point to base object
