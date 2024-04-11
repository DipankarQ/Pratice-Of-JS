/*
let student = {
    name:"max",
    age:25,
    derpt: "ECE",
    cgpa:8.2,
    elctronic: 85,
    dsa:70,
    math:65,
    getAvg () {
        console.log(this);
        let Avg = (this.elctronic +this.dsa +this.math ) /3;
        console.log(`${this.name} got avg marks=${Avg}`);
    }
 
  
};

//console.log(a);

try{
console.log(a);
} catch (error) {
console.log(error);
}


// Implicit Return in Arrow Function
const cube =(b) => b*b*b;

cube(45);





// Set Time out (function, timeout){}

console.log("hi,there!");

setTimeout( ()=> {
    console.log("collage");
},4000);
console.log("welcome to");


// set Interval (function, timeout)

console.log("hello");

let id = setInterval( () =>{
    console.log("Collage");
},2000);

clearInterval(id);
*/

// practice Qs

// write an arrow function that the aquare of a number 'n'
 const square=(n) => (n*n);


// write a function that prints "Hello World" 5 times at intervalsof 2s each.


 let id= setTimeout(()=>{
    console.log("Hello World");
 },2000);


 setTimeout(()=>{
    clearInterval(id);
 }, 10000)

  
 