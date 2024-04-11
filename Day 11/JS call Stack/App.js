// Call Stack
/*
function One () {
    return 1;
}
function two () {
     return One() +  One();
}
function three () {
    let ans = two() + One();
    console.log(ans);
}

three();
*/

// Js is Single Threaded (// synchrous nature)
/*
setTimeout (function () {
    console.log("Hello");
},2000);
 
console.log("Hi");


setTimeout(()=>{
    console.log("I have done my B.Tech");
},2000);
console.log("I am Dipankar");

// callback hell

h1= document.querySelector("h1");



function changeColor(color, delay,nextColorChange ) {
    setTimeout(()=>{
        h1.style.color= color;
       if(nextColorChange) nextColorChange();
    },delay);
} 

changeColor ("red",1000, ()=>{
    changeColor("blue",1000, () =>{
        changeColor("green",1000, ()=>{
            changeColor("yellow", 1000, ()=>{
                changeColor("orange",1000, ()=>{
                    changeColor("pink",1000);
                });
            });
        });
    });
});



function saveToDb (data, success, failure) {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4) { 
        success();
    } else{
        failure();
    }
    
}

saveToDb(
    "Dipankar",
     ()=> {
        console.log("success:your data was saved: ");
        saveToDb(
            "hello world",
            ()=> {
                console.log("success2:data2 saved");
                saveToDb(
                    "Dipu",
                     ()=> {
                    console.log("success3: data3 saved")
                },
                () => {
                        console.log("failure3: weak connection");
                        saveToDb (
                            "manu",
                            ()=>{
                            console.log("success4:data4 was saved");
                        },
                        ()=>{
                            console.log("failure4: weak connection");

                        }
                        );
                });
                
        },
            ()=>{
                console.log("failure2: weak connection");
            }
        );
    }, 
    ()=> {
      console.log("failure: weak connection. data not saved");   
    } 
);

// Promicess(Asynchronous Functions)
function savetoDb (data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}

// Promisess method
function savetoDb (data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random () *10 ) +1;
        if(internetSpeed > 4) {
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }

    });
}
   
    
 savetoDb("collage")
    .then(()=>{
            console.log("promises was resolved");
            console.log("data1 was saved");
           savetoDb("hello World")
           .then(()=>{
                console.log("data2 was saved");
           });
           
    })
    .catch(()=>{
        console.log("promises was reject");
    });

//Promices Chaining (Improved Version)


function savetoDb (data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random () *10 ) +1;
        if(internetSpeed > 4) {
            resolve("success: data was saved");
        }else{
            reject("failure: weak connection");
        }

    });
}

savetoDb("collage")

.then(()=>{
    console.log("Promises1 data1 was saved");
    return savetoDb("Hello World")
})
.then(()=>{
    console.log("Promises2  data2 was saved");
})
.then(()=>{
    console.log("Promises3  data3 was saved");
    return savetoDb("Hi")
})
.then(()=>{
    console.log("promises4 data4 was saved");
})
.catch(()=>{
        console.log("weak connection");
});


// Result & Error in Promises


function saveToDb (data) {
    return new Promise((resolve, reject) => {
    let internetSpeed   = Math.floor(Math.random() * 10)+1;
        if(internetSpeed > 4) {
            resolve ("reslove: data was saved")
        } else {
            reject(" reject: weak Connection")
        }
    }) 
}


saveToDb("Dipanakar Dutta")

.then ((result)=>{
    console.log("result: ", result);
    console.log("promises1 resloved");

    return saveToDb("Hello world")
})
.then((result)=>{
    console.log("result: ", result);
    console.log("Promise2 resloved");
    return saveToDb("hello")
})
.then((result)=>{
    console.log("result : ", result);
    console.log("promises3 resloved");
})
.catch((error)=>{
    console.log("error: ", error);
    console.log("some promises rejected"); 
})
*/


div = document.querySelector("div");




function changeColor (color,delay) {
   return new Promise ((reslove, reject)=>{
        setTimeout (()=>{
            div.style.color = color;
            reslove("color was changed");
        },delay)
    });
}



changeColor("red",1000)
.then(()=>{
    console.log("color was changed");
    return changeColor("blue",1000)
})
.then(()=>{
    console.log("color was changed");
    return changeColor("orange",1000)
})
.then(()=>{
    console.log("color was changed");
    return changeColor("pink",1000)
})
.then(()=>{
    console.log("color was changed");
    return changeColor("green",1000)
})
.then(()=>{
    console.log("color was changed");
    return changeColor("yellow",1000)
})
.then(()=>{
    console.log("color was changed");
    return changeColor("brown",1000);
})
.then(()=>{
        console.log("color was changed");
})


/*
changeColor ("red", 1000,() =>{
    changeColor("orange",1000,()=>{
        changeColor("blue",1000, ()=>{
            changeColor("pink",1000, ()=>{
            });
        });
    });
});
*/


