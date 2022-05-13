let loc = document.getElementById('location');
let tempicon = document.getElementById('temp-icon');
let tempvalue = document.getElementById('temp-value');
let climate = document.getElementById('climate');

let iconfile;

// for searcbtn and searchinput
 
const searchButton=document.getElementById('search-button'); 
const searchInput=document.getElementById('search-input');

searchButton.addEventListener("click",(e)=>{
    if(searchInput.value === 0){
        alert("invalid")
    }
    else if(isNaN(searchInput.value)){
        //    const searchInput=document.getElementById('search-input'); 
        //    document.getElementById('app-container').style.display="block";
           console.log(searchInput.value)
           getData(searchInput.value)
         }
    else{
        alert('invalid')
    }
     });

function getData(city){
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9bd032e26d3f9c3c20d217f0194661d9&units=metric`
    fetch(url)
    .then(response => {
        return response.json()
    }).then((response)=>{
        console.log(response)
        loc.innerText=`${response.name}`
        tempvalue.innerText=Math.round(response.main.temp)
        climate.innerText=`${response.weather[0].main}`

    }).catch(()=>alert('error occured'))
}
   



