// APIS

/*
let jsonRes = '{"fact":"Blue-eyed, pure white cats are frequently deaf.","length":47}';
//console.log(jsonRes);

let vaildRes = JSON.parse(jsonRes);

console.log(vaildRes);




let student = {

    FirastName:"Dipankar",
    LastName:"Dutta",
    Age :25,
    Marks: 85,
    Grade:"A+",

}

// Using fetch 
let url = "https://catfact.ninja/fact";



fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url);
    })
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data2)=>{
        console.log(data2.fact);
    })
    .catch((err) => {
        console.log("ERROR -",err);
    })
  

// Using fetch with async/ await

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
         console.log(data1.fact);

         let res2 = await fetch(url);
         let data2 = await res2.json();
          console.log(data1.fact);
    } catch (err){
        console.log("ERROR -",err);
    }

   
}

  */

//  Using Axios keyword

 let btn =document.querySelector("button");

  btn.addEventListener("click", async () =>{
    let fact = await getFacts();
    console.log(fact);
    let p  = document.querySelector("#result");
    p.innerText = fact;
  });

let url ="https://catfact.ninja/fact";

async function getFacts () {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(err) {
        return "No fact found";
    }
}
