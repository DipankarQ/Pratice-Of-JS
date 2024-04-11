// Using for loop
/*
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


 for(let i = 0; i < arr.length; idx++) {
     console.log(arr[i]);
 }

console.log(arr.length);


console.log("End This Loop");
*/


// Using for-of loop

/*
let heroes = ["ironman","thor","antman","spiderman","hulk"];

for (let hero of heroes) {
    console.log(hero);

}
*/
   /*
    let cityes = ["kolkata","hariyan","dumbai","dehli"];
   for(city of cityes ) {
    console.log(city.toUpperCase());
    
   }
   */

   // Pratice Set
   /*

   let marks = [85,97,44,37,76,60,56,56];

   let sum = 0;

   for(let val of marks) {
        sum +=val;
    }
    let avg = sum / marks.length;

    console.log(`avg marks of the class = ${avg}`);
    */

   // let items = [250,645,300,900,50];
     
    // Using for of loop

   // let i =0;
     //   for(let val of items) {
     //console.log(`value at index ${i} = ${val}` );
     //let offer = val  /10;
     //items[i] = items[i]- offer;
     //console.log(`value after offer ${items[i]}`);
     //i++;
    
    //}
     
    //Using For Loop
       
     //for(let i=0;i <items.length;i++) {
      //      let offer = items[i] / 10;
      //      items[i] -= offer;
        //    }
       //console.log(items);


        // Arrays Methods 



        // Push Method


       //let homeItems = ["Fan","Light","Table","Chair","Switchboard"];
       //homeItems.push("bed","Window");
        // console.log(homeItems);

        //pop Method
       // homeItems.pop("Fan","Light","Chair");
       // console.log(homeItems);

       //   to string Method

 //       let num = [98,56,66,59,66];
 //       console.log(num);
 //       console.log(num.toString());
 //       console.log(num);


 //    Concat Method


// let firstName = ["Dipankar"];
// let lastName =  ["Dutta"];
//
// let fullName=firstName.concat(lastName);
//  console.log(fullName);

// UnShift Method

//let carsName = ["BMW","VOLVE","AUDI",]; 
//carsName.unshift("HONDA","MARUTI");
//console.log(carsName);


// shift Method
//carsName.shift("BMW");
//console.log(carsName);

// slice Method

//let car = ["BMW","VelVo","AUDi",];
//console.log(car.slice(1,2));


// splice Method

//let num = [1,2,3,4,5,6,7,8,9];
//console.log(num.splice(2,2,101,201)); 



// Nested for loops with Nested Arrays
/*
let heroes =[
    ["ironman","spiderman","thor"], //--> index=0;
    ["superman","wonder woman","flash"] //--> index=1;   
    ] 
    for(let i=0; i<heroes.length; i++) {
        console.log(i,heroes[i],heroes[i].length); // outer Array
            for(let j=0;j<heroes[i].length; j++ ) {
                console.log(`j=${j} ${heroes[i][j]}`); // inner Array
                
    }

} 
*/



// Nested for of loop with Nested Arrays 


let heroes = [
    ["ironman","spiderman","thor"],
    ["antman","batman","wonder woman"]
];

for(list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}




// pratices set
 
//Q1:-

//let compaines =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//console.log(compaines);

//console.log(compaines.shift(0));
//console.log(compaines.splice(2,1,"ola"));

//console.log(compaines.push("Amazon"));

















       

       






    
















