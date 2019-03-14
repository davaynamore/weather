const forecastData = {
  "request": "Amount of rainfall by day",
  "days": [{
    "day": 1,
    "amount": 50
  }, {
    "day": 2,
    "amount": 10
  }, {
    "day": 3,
    "amount": 10
  }, {
    "day": 4,
    "amount": 150
  }, {
    "day": 5,
    "amount": 130
  }, {
    "day": 6,
    "amount": 45
  }, {
    "day": 7,
    "amount": 10
  }]
}

export default class WeatherApiService {
  async getForecast() {
    return await forecastData;
  }
}