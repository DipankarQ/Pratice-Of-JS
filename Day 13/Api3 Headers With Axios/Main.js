/*
const url="https://icanhazdadjoke.com/";

async function getJokes () {
    try {
        const config = {headers: {Accept:"application/json"} };
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (e)  {
        console.log("Error- ",e);
    }
}
*/

// Activity using Query String

let url= "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);


    let colArr = await getCollage(country);
    show(colArr);
});




function show(colArr) {
    let list = document.querySelector("#List");
    for(col of colArr){
        console.log(col.name);

        // Create a list iteam
        let li =document.createElement("li");
        li.innerText =col.name;
        list.appendChild(li);
    }
}


async function  getCollage (country) {
   try{
        let res = await axios.get(url+country); 
        return res.data;
   } catch(e) {
        console.log("ERROR -",e);
        return[];
   }
}