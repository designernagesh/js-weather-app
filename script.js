let inputForm = document.getElementById('inputForm');
let weatherReport = document.querySelector('.weatherReport');
weatherReport.style.display = 'none';

inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(document.querySelector('.inputCity').value != ''){
        let inputCity = document.querySelector('.inputCity').value;  
        
        weatherReport.style.display = 'block';
        let cityName = document.querySelector('.cityName');
        let weather = document.querySelector('.weather');
        let weatherIcon = document.getElementById('weatherIcon');
        let lat = document.querySelector('.lat');
        let lon = document.querySelector('.lon');

        let temp = document.querySelector('.temp');
        let minTemp = document.querySelector('.minTemp');
        let maxTemp = document.querySelector('.maxTemp');

        let key = '16b74458dd620edf6984bfafbdcfb9b3';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('.inputCity').value}&appid=${key}&units=metric`;        

        fetch(url)
        .then( response => response.json() )
        .then( result => {
            console.log(result)
            cityName.innerText = result.name;
            lon.innerText = result.coord.lon;
            lat.innerText = result.coord.lat;

            temp.innerHTML =    `${Math.round(result.main.temp)}&deg; C`;
            minTemp.innerHTML = `${Math.floor(result.main.temp_min)}&deg; C`;
            maxTemp.innerHTML = `${Math.ceil(result.main.temp_max)}&deg; C`;

            weather.innerText = result.weather[0].description;
            let icon = result.weather[0].icon;
            weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`
        })
        .catch( error => console.log('The Error is = ' + error) )
    }else{
        alert('Please, enter the location name.')
    }    
})

/* 
Today's Day and Date Script */

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let d = new Date();
let date = d.getDate();
let day = d.getDay();
let month = d.getMonth()
let year = d.getFullYear();

let todayDayDate = `${days[day]}, ${date} ${months[month]}, ${year}` 

let todayDt = document.querySelector('.todayDt');
todayDt.innerText = todayDayDate;