// console.dir()
//       The method console.dir() displays an interactive list of the properties of the specified JavaScript
// object.The output is presented as a hierarchical listing with disclosure triangles that let you see the 
// contents of child objects
     var person ={
        name:"praveen",
        age:25
     }
    var employee={
        name:"john"
    }
 
    console.log(person,employee);
    console.dir(person,employee);


// console.error()
//      The console.error() method outputs an error message to the Web console.  
     console.error()

// ---------------------------------------------------------------------------------------------
//CONVERSION

// convert number to string
var num=20
var str=String(num)
console.log(str);               // 20
typeof(str)                     // string

// convert boolean to string
var a=true
var string=String(a);
console.log(s)                // true
typeof(string)                     // string

// convert boolean to number
var number=Number(a)         
console.log(n);               // Not a Number
typeof(n)                     // number

// convert boolean to float
var f=parseFloat(a) 
console.log(f);                // Not a Number
typeof(f)                      //number     


// How to create a object in js
    // Create a single object using object literal
    // using new keyword
    // using Object.create()

    var employee={
        name:"Praveen",
        age:25
    }

    var person=new Object()
    person.name="Praveen";
    person.age=25

// use strict
  //  It helps you to write cleaner code,like preventing you from using undeclared variables.

var a=10
console.log(a);      //10

"use strict";
a=10
console.log(a);       //error

// What is the output of

typeof(null)                     //object
typeof(undefined)                // undefined
console.log(null===undefined)    // false
console.log(null==undefined)     // true

console.log(1===true)           // false
console.log(0===false)          // false
console.log(1==true)            // true
console.log(0==false)          //true