class Weather {
  constructor (city) {
    this.apiKey = '2d9462e18d3d1e92d73d2b88421d2993'; 
    this.city = city
  }

  // Fetch weather from API
  async getWeather () {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);
    const responseData = await response.json(); 
    return responseData
  }
}