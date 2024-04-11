// For Each 


//let arr=[1, 2, 3, 4, 5]; // Using for Array

//function print (el) {
//    console.log(el);
//    }
//arr.forEach(print);

//OR

//arr.forEach((el)=> {
//console.log(el);
//});

// OR

//arr.forEach(function(el){
//console.log(el);
//});


// Using for Objects
/*

let arr =[{
    name:"Max",
    marks:96,
    
},
{
    name:"Suraj",
    marks:89,
   
},
{
    name:"chatan",
    marks:87,
    
},
{
    name:"sonu",
    marks:88,
   
}];

arr.forEach((student)=>{
 console.log(student.marks);
 console.log(student.name);
});










// Map


// Using for Array


let num =[1, 2, 3, 4, 5];

//let double = num.map(function(el){
//    return el*2;
//});

//OR


let double = num.map((el)=>{
        return el*2;
    });





// Using for Object 

let studentInfo =[{
    name:"Max",
    marks:96,
    gpa:"O",
    
},
{
    name:"Suraj",
    marks:89,
    gpa:"E",
   
},
{
    name:"chatan",
    marks:77,
    gpa:"A",
    
},
{
    name:"sonu",
    marks:65,
    gpa:"B",
   
}];


 let gpa=studentInfo.map((el)=>{
    return el.marks/10;
 
});











// Filter 



//Using for Array





let nums = [2, 1, 4, 5, 8, 7, 3];

let ans = nums.filter((el)=>{
    //return el % 2==0; // even-> true
    return el  %2 !=0;  // odd-> false
});



// Every
[1,3,4,5,6].every((el)=>(el%2==0));


[2,4].every((el)=>(el%2==0));



//Some

[1,3,4,5,6].some((el)=>(el%2==0));


[1,3,5].some((el)=>(el%2==0));






// Reduce 


//[1,3,4,5,6].reduce((res,el)=>(res+el));
 
let nums =[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 12];


let result = nums.reduce((res,el)=>{
    if(res<el) {
       return el;
    }else{
        return res;
    }
});




// check if all numbers in our array are multiples of 10 or not 

let arr =[11, 20, 40, 30, 35];

let result = arr.every((el)=>el % 10 ==0);

console.log(result);



// Create a function to find the   min nuber in an array.

let arr = [3,10, 12, 11, 15, 3, 2, 265, 65];

let res = arr.reduce((res,el)=>{
    if(res > el){
    return el;
    }else{
        return res;

    }
});

console.log(res);





// Default Parameter 

function sum(a,b=6) {
    return a+b;
}

sum(5);


function func(b ,a=2) {
    return a*b;
}





// Spread


let arr = [1, 2, 3, 4, 5];

let min= Math.min(...arr);
console.log(min);


console.log(...arr);

console.log(..."DIPANKAR");



//Spread With Array Literals


let nums = [1, 2, 3, 4, 5];

nums.push(7,8);
console.log(nums);


let char =[..."Dipankar"];

console.log(char);

 



// Spread with object Literals


let data = {
    email:"dipu@gmail.com",
    password:"abcd",
};


let data2 ={...data,id:123};
console.log(data2);



const info={

    name:"Max",
    email:"max1998@gmail.com",
    roll:5,
};

const infocopy ={...info,regid:13005678};

console.log(infocopy);







// Rest



function sum(...args) {
    return args .reduce((add,el)=>add+el) ;      
    
};


function sum(...args) {
    for(let i=0;i<args.length;i++) {
       console.log("you gave us:",args[i]); 
    }

}


function max() {
    console.log(arguments);
}



function min(msg,...args) {
   console.log(msg);
  return args.reduce((min,el)=>{
        if(min>el){
            return el;
        } else {
            return min;
       }
    });
 }

 


 // Destructuring

 let names =["Tony","max","steve","peter",];
 let [winner, runnerup,others] =names;
console.log(winner,runnerup,others);


// Destructuring Objects


const student ={
    name:"max",
    class:10,
    age:20,
    subject:["English","Math","science"],
    userid:"max@123",
    password:"abcd"
};


const {userid ,password} = student;
*/