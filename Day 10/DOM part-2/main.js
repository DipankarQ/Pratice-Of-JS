// DOM Events
/*
let btns =document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
   btn.onmouseenter=function(){
    console.log("Enter the button");
   };
   console.dir(btn);
}


function sayHello () {
    alert("Hello");
};
btn.onclick =function(){
   alert("button was clicked");
};




btn.onclick= Hello;



// Event Listener


let btns = document.querySelectorAll("button");

for(btn of btns) {
   //btn.onclick= sayHello;
   //btn.onclick=sayName;

   //btn.addEventListener("click" ,sayHello),
    //btn.addEventListener("click" ,sayName);
     btn.addEventListener("dblclick", function() {
        console.log("you double clicked me");
    });
}


function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Dipankar");
}



let p = document.querySelector("p");

    p.addEventListener("click", function(){
        console.log("parah was clicked");
    });

let box =document.querySelector(".box");

box.addEventListener("mouseenter", function() {
 console.log("mouse inside the box");
});


// this Event Listeners

let h1 =document.querySelector("h1");
let p= document.querySelector("p");
let div =document.querySelector("div");
let btn = document.querySelector("button");




function colorChange() {
    console.dir(this);
    this.style.backgroundColor ="red";
}



h1.addEventListener("click",colorChange);

p.addEventListener("click",colorChange);

div.addEventListener("click",colorChange);

btn.addEventListener("click",colorChange);


let btn = document.querySelector("button");

btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});






// keyboard Event




let inp = document.querySelector("input");

//inp.addEventListener("keydown", function(){
//    console.log("key was pressed");
//});


//inp.addEventListener("keyup",function(){
//    console.log("key was pressed");
//});




//inp.addEventListener("keydown",function(event){
    //console.log(event);
    //console.log("key = ",event.key);
    //console.log("code = ",event.code);
    //console.log("key was pressed");
//});



let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("code= ",event.code); //ArrowUP(W), ArrowDown(S),ArrowLeft(A),ArrowRight(D)
    if (event.code =="keyW") {
        console.log("character moves up");
    } else if (event.code == "keyS") {
        console.log("character moves Down");
    } else if (event.code == "keyA") {
        console.log("character moves left");
    } else if (event.code == "keyD") {
        console.log("character moves Right");
    }

});



// Form Events

let form = document.querySelector("form");

form.addEventListener("submit" ,function(event) {
    event.preventDefault();
    console.dir(form);


   // alert("form submitted");
   // let inp =document.querySelector("input");
   // console.dir(inp);
   // console.log(inp.value);



    let user =this.elements[0];
    let pass =this.elements[1];

     console.log(user.value);
     console.log(pass.value);

    alert(`hello ${user.value} , your password is set to ${pass.value}`);


});



// change Event

let form = document.querySelector("form");

form.addEventListener("submit" ,function(event) {
    event.preventDefault();

});

let user = document.querySelector("#user");


user.addEventListener("change",function () {
    console.log("input changed");
    console.log("final value = ", this.value);

});


//Input  Event 

let form = document.querySelector("form");

    form.addEventListener("submit",function(event) {
    event.preventDefault();

});


let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener("input", function () {

    console.log("input event");
    console.log("final value =" ,this.value);
});




let inp = document.querySelector("#text");
let P = document.querySelector("P")

inp.addEventListener("input", function () {

    console.log(inp.value);
    P.innerText = inp.value;
});
*/


//Event Bubbling 


let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked");
})

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
})


for (li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    })
}


 


