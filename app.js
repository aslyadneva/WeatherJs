// Init weather obj
let weather = new Weather('london'); 

// Init UI obj
const ui = new UI(); 

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event 
document.querySelector('#w-change-button').addEventListener('click', (event) => {
  event.preventDefault(event);
  const city = document.querySelector('input').value;

  weather = new Weather(city); 
  getWeather();

  // close modal 
  $('#locModal').modal('hide');
})

function getWeather () {
  weather.getWeather()
  .then(results => ui.paint(results))
  .catch(err => console.log(err))
}

