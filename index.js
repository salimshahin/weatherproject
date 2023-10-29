let API_KEY = "6afd13eb3627e76136352d0eb59bda49";

// weather url = https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=6afd13eb3627e76136352d0eb59bda49

// image url : https://openweathermap.org/img/wn/01d@2x.png

//? target Using DOM api
//! form
// ! input
// ! article



let form = document.forms[0];
let input = form.elements.city;
let article = document.getElementsByClassName("searchcity")[0];

async function fetchWeather(city) {
  let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6afd13eb3627e76136352d0eb59bda49`);
  let data = await resp.json();
  let img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  article.innerHTML = `
    <div class="card">
            <h1>${data.name}</h1>
            <img src=${img}>
            <p>Temp Min : ${Math.floor(
              data.main.temp_min - 273.15
            )} <sup>o</sup>C</p>
              <p>Temp Max : ${Math.floor(
                data.main.temp_max - 273.15
              )} <sup>o</sup>C</p>

    </div>
    `;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  fetchWeather(input.value);
});
