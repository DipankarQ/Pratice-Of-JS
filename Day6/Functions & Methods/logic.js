// Function Scope & Global Scope 
//let sum = 65; // Gobal scope 
//function calculate(a,b) {
//    let sum =a+b; // Function Scope
//    console.log(sum);
//}
//calculate(5,5);
//console.log(sum);// Global Scope 


// Block Scope 



//for(let i=0;i>=10;i++) {
//    console.log(i);   // Block Scope
//    
//}

//console.log(i);


//function age (age) {
//if(age>=18){
//    let str ="is adult"; // Block Scope
//    console.log(str);
//} else {
//   let str1 ="is not Adult";    
//    console.log(str1);
//    }
//};


// Lexical Scope


//function outerFunc() {
//    let x = 5;
//    let y = 6;
//    function innerFunc() { // fuction Scope
//      console.log(x);  
//    }
//
//    innerFunc();
//}



// 
// function changeGreet() {
//     let greet = "namaste";  // Function Scope
//     console.log(greet);
//     function innerGreet() {  
//    console.log(greet); // Lexical Scope
   
//    }
//}
//
//console.log(greet);
//    changeGreet();

/*
// Function Expression
let sum  = function(a ,b) {
    return a+b;
}

sum(4,5);


let name  = function() {

    console.log("dipankar");

}

name();



//Higher Oder Function

 function multipleGreet(func , n) {
         for(let i=1;i<=n;i++)  {
            func();
        }
    }

    let greet = function() {
        console.log("hello");
    }



 multipleGreet(greet,3);


 function sum(a,b) { 
    return a*b

 }

 sum();
 


 // Higher Order Function (Return)


 function oddEventTest(request) {
        if(request=="odd") {
            return function(n) {
                console.log(!(n%2==0));
            }
        } else if(request=="even") {
            return function(n) {
                console.log(n%2==0);
            }

        } else {
            console.log("wrong request");
        }
        
    }
 

    //Methods

const calculator = {
    add: function(a,b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b; 
    },
    mul: function (a, b) {
        return a*b;
    }

}
   */
