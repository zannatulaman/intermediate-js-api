document.addEventListener("DOMContentLoaded", () => {
    const seachButton = document.getElementById("button-search");
    const weatherInfo = document.querySelector(".weather-status");


    seachButton.addEventListener("click", () => {
        const location = document.getElementById("inputLocation").value
        //console.log(location);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=de3eaae6e68e3b6cf4ba5b48a0dd67d5`)

        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const temperature = Math.round(data.main.temp -272.15)
            const farhenheit = Math.round(temperature * 9/5 + 32)
            const description = data.weather[0].description
            console.log(farhenheit, description);


           const weatherHtml = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1 id="city">${location}</h1>
            <h3><span id="temp">${farhenheit}</span>&deg;F</h3>
            <h1 id="status" class="lead">${description}</h1>
            `
            weatherInfo.innerHTML = weatherHtml
        })
        .catch((error) => console.log(error))
    })
})