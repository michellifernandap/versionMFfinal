

fetch('https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=49d26d6e2f5861c25563caa77ee12fa3')
  .then(response => response.json())
  .then(data => {
    const kelvinTemp = data.main.temp;
    const celsiusTemp = kelvinTemp - 273.15;
    const humidity = data.main.humidity;
    console.log(data.main)
    document.getElementById("temperatura").innerHTML = celsiusTemp.toFixed(0) + ' °C';
    document.getElementById("humidity").innerHTML = humidity.toFixed(0) + ' %';
  });


  fetch('https://api.openweathermap.org/data/2.5/weather?q=texas&appid=49d26d6e2f5861c25563caa77ee12fa3')
  .then(response => response.json())
  .then(data => {
    const kelvinTemp = data.main.temp;
    const celsiusTemp = kelvinTemp - 273.15;
    const humidity = data.main.humidity;
    console.log(data.main)
    document.getElementById("temperatura-texas").innerHTML = celsiusTemp.toFixed(0) + ' °C';
    document.getElementById("humidity-texas").innerHTML = humidity.toFixed(0) + ' %';
  });

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  $('.carousel').carousel({
    interval: 10000
  });
  

  /*
  let weather = {
    apiKey: "49d26d6e2f5861c25563caa77ee12fa3",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Clima en " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humedad: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Viento: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Madrid");
  */


  