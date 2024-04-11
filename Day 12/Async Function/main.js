//Async Function
/*
async function hello() {

    return "hello!";
}

hello()

    .then((result)=>{
        console.log("promise was reslove");
        console.log("result was: ", result);
    })
        .catch((err)=>{
            console.log("promise was rejected");
            console.log("weak conncetion",err);
    })
*/



    let getnum = async () => {
        
        return 56;
   }


    getnum()


   .then((result)=>{
        console.log("promise was slove");
        console.log("result was:",result);
   })
   .catch((err)=>{
        console.log("promise was rejected");
        console.log("weak connection:", err);
   })

    


//async function getnum () {
//    return new promises((reslove, reject)=>{
//        let num = Math.floor(Math.random()*10)+1;
//        setTimeout(()=>{
//            
//        })
//    })
//}



