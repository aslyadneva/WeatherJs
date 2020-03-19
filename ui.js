class UI {
  constructor () {
    this.location = document.querySelector('#w-location');
    this.description = document.querySelector('#w-desciption');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.humidity = document.querySelector('#w-humidity');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind'); 
    this.icon = document.querySelector('#w-icon'); 
  }

  paint (results) {
    this.location.textContent = `${results.name}, ${results.sys.country}`; 
    this.description.textContent = results.weather[0].main;
    this.string.textContent = `${results.main.temp} C`;
    this.humidity.textContent = `Relative Humidity: ${results.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${results.main.feels_like} C`;
    this.wind.textContent = `Wind: ${results.wind.speed} MS`; 
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`)
  }
}