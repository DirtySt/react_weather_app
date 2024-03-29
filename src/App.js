import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./api";
import {useState} from "react";
import Forecast from "./components/forecast/forecast";

function App() {

    const [currentWeather,setCurrentWeather] = useState(null)
    const [forecastWeather,setForecastWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
      const [latitude,longitude] = searchData.value.split(" ");

      const currentWeatherFetch =
          fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
      const forecastWeatherFetch =
          fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);

      Promise.all([currentWeatherFetch, forecastWeatherFetch])
          .then(async (response) => {
              const weatherResponse = await response[0].json();
              const forecastResponse = await response[1].json();

              setCurrentWeather(weatherResponse);
              setForecastWeather(forecastResponse);
          })
          .catch((e) => console.log(e));
  }

    return (
        <div className={"container"}>
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
            {forecastWeather && <Forecast data={forecastWeather}/>}
        </div>
    );
}

export default App;
