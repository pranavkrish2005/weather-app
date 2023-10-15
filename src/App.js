import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { weather_api_url } from './api';
import { weather_api_key } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';



function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const current_weather_fetch = fetch(
      `${weather_api_url}/current.json?key=${weather_api_key}&q=${lat},${long}`
    );
    const forecast_weather_fetch = fetch(
      `${weather_api_url}/forecast.json?key=${weather_api_key}&q=${lat},${long}&days=3`
    );

    Promise.all([current_weather_fetch, forecast_weather_fetch])
      .then(async (response) => {
        const weather_response = await response[0].json();
        const forecast_response = await response[1].json();

        setCurrentWeather(weather_response);
        setForecastWeather(forecast_response);
      })
      .catch((err) => console.log(err));
  }



  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;
