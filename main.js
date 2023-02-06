
fetch('https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=49d26d6e2f5861c25563caa77ee12fa3')
  .then(response => response.json())
  .then(data => {
    const kelvinTemp = data.main.temp;
    const celsiusTemp = kelvinTemp - 273.15;
    document.getElementById("temperatura").innerHTML = celsiusTemp.toFixed(0) + ' °C';
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
  

  