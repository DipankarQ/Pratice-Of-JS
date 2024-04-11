
/*

// Add Two numbers 
function sum(x,y) {
    return x + y;
 } 

 function isAdult(age) {
    if(age>=18) {
      return"adult";  
    }else{
        return "not adult";
    }
 }



 // square of numbers
 let  ArrowMulti = (x,y)=> {
    return (x*y);
 };






  let  Arrowsum =  (a,b)=>{
    return (a+b);
   };
   
    


    // Pratice Set  
    
    // Q1:-
    function countvowles(str){
        let count =0;
        for (const char of str) {
            if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
                count++;

            }
    
        }
        return count;
    }


    //Q2:- 
    const countVow = (str) => {
        let count= 0;
        for(const char of str ) {
            if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
                count++;
            }

        }

        return count;
    }

    
     //Q3

    // create a Function that return the sum of numbers from 1 to n.


    function sum2(n) {
       let sum =0;
       for(let i=1;i<=n; i++) {
       sum +=i;
       } 
        return sum;
    }

    
    //Q4

    // Create a Function that return concatenation of all string in an array


   let arr = ["hello","hi","welcome","tata","bye"];
 
   function con (arr) {
    let result="";
    for(let i=0;i < arr.length;i++) {
        result+=arr[i];
    }

        return result;
   }

  */



    /*
    // for Each Loop in Array:-

let arr = ["delhi","mumbai","pune","kolkata"];


arr.forEach((val,idx) => {
    console.log(val.toUpperCase(), idx);
});
 


// pratice set:-

//Q1:-

let Arr = [32,35,56,65,70,75];

Arr.forEach((Arr)=>{
    console.log(Arr**2);
});




//function hello () {
//    console.log("hello");
//}

//hello();

//let arr = [1, 2, 3, 4, 5, 6];

// maping Function

//let newArr = arr.map ((val)=>{
  //  return val*2;
//});
//console.log(newArr);



// for Each loop (Call Back Function)

//arr.forEach((arr) =>{
//  console.log( arr**3);    
//});

// Filter Functions

//let evenArr=arr.filter((val)=>{
    //return val % 2 ===0; // Even Number
    //return val %2 !==0; // Odd Number
    //return val < 3;
   // return val **2;
//});

//console.log(evenArr);



//const students =[
//    {name: "max",age:15 },
//    {name:"dip",age:20 },
//    {name:"sohini",age:18 } 
//];

//const over18students = students.filter(student => student.age > 15 );
//console.log(over18students);


//const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];

//const filteredNames = names.filter(name => name.length > 3);

//console.log(filteredNames); 

// creat a function that print a poem

function printpeom() {
    console.log("Deep into that darkness peering,");
    console.log("Long I stood there, wondering, fearing,");
    console.log("Doubting, dreaming dreams no mortals");
    console.log("Ever dared to dream before;");
    console.log("But the silence was unbroken,");
    console.log("And the stillness gave no token,");
    console.log("And the only word there spoken");
    console.log("Was the whispered word, Lenore!");
    console.log("This I whispered, and an echo");
    console.log("Murmured back the word, Lenore!");
    console.log("Merely this, and nothing more.");

}
 printpeom();
 

 // create a function to roll a dice Always display the dice (1 to 6).


 function rolldice() {
    let random = Math.floor( Math.random() *6 ) + 1 ;
    console.log(random);
    
}
rolldice();


// Function Arguments

function sum(a,b) {
    console.log(a+b);
}

sum(1,21);
sum(52,98);
sum(899,789);


// Create a function that gives us the average of 3 numbers

function average(a,b,c) {
   let average =(a +b +c)/3;
    console.log(average);
    }

    average(89,88,87);
    average(89,65,89);
  


    // Create a Function that prints the multiplication table of number.
    
    function multiplicationTable (b) {
    for(let i=b;i<=b*10;i+=100) {
        console.log(i);
    }
}

    multiplicationTable(5);
    


*/

