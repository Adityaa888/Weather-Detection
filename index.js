// let arr= ["Aditya ",1,2,3];
// // console.log(b);
// // console.log(b[3]);
// arr.push("Snaskar")
// let name = arr.pop();
// console.log(name);
// let brr = [1,2,3,4];
//  let n = arr.concat(brr)
// console.log(arr,brr,n);

// console.log(arr.join("->"))
// console.log(arr.splice(1,2,4))
// console.log(arr)
//  function myfun(){
//     let sum=0
//     for(var i=0;i<arguments.length;i++){
//         sum = sum+arguments[i]
//     }
//     return sum
//  }
//  console.log(myfun(1,2,3,4,5,6,7))

// //  arrow function ---
//  const  num = (x,y)=> x*y  

//  console.log(num(3,4))
//  function sayhi(){
//     return ()=> {
//         console.log("Aditya")
//     }
//  }
//  let res =  sayhi();
 
// console.log("start")
// setTimeout(function (){
//     console.log("time completed");
// },4000);
// for(let i=0;i<10000000000;i++){}
// console.log("end");
const apikey="a3642db51d21a1d7c161f0b78ac51f59";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


// const weather = document.querySelector(".weather").style.display="none";
async function checkWeather(city){
    const response = await fetch (apiUrl +city+`&appid=${apikey}`);
    const data = await response.json();
   console.log(data);
   if(response.status==404){
document.querySelector(".error").style.display="block"
document.querySelector(".weather").style.display="none";
   }
   else{
    
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
   
    if(data.weather[0].main=="clouds"){
        document.querySelector(".weather-icon").src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
{
    
        document.querySelector(".weather-icon").src="images/clear.png"
    
}
else if(data.weather[0].main=="Rain")
{
    
        document.querySelector(".weather-icon").src="images/rain.png"
    
}
else if(data.weather[0].main=="Drizzle")
{
    
        document.querySelector(".weather-icon").src="images/drizzle.png"
    
}
else if(data.weather[0].main=="Snow")
{
    
        document.querySelector(".weather-icon").src="images/snow.png"
    
}
else
{
    
        document.querySelector(".weather-icon").src="images/mist.png"
    
}
document.querySelector(".error").style.display="none"
document.querySelector(".weather").style.display="block";
   }
}

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })


