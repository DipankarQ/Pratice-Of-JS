// Await Functions 
/*
function getNum () {
 return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            reslove();
        },1000);
    });
}

async function res () {
    await getNum();
    await getNum();
    await getNum();
    getNum();
    getNum();
    getNum();
}
*/

h1= document.querySelector("h1");

function Colorchange (color,delay) {
    return new Promise ((reslove,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num >3) {
              reject("promise rejected");   
            }


            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            reslove("color changed!");
        },delay)
    });
}
 

async function Colorshow () {
    try {
        await    Colorchange("red",1000);
        await     Colorchange("orange",1000);
        await         Colorchange("blue",1000);
    }  catch(err) {
        console.log("error cautch");
        console.log(err);
    }

    }
 
    Colorshow();