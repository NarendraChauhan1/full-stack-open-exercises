import { useEffect, useState } from 'react'
import apiService from '../services/apiService'

const Weather = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const fetchWeather = () => {
    apiService.fetchWeather(city).then((response) => {
      const data = response
      setWeatherInfo(data)
    })
  }
  const Temperature = ({ degree }) => {
    const kToc = () => {
      const celsius = degree - 273.15
      return celsius.toFixed(2)
    }
    console.log(kToc)
    return <p>Temperature {kToc()} Celcius</p>
  }
  useEffect(fetchWeather, [])
  const style = {
    height: '120px',
    width: '120px',
  }
  if (!weatherInfo) {
    return <p>Fetching weather of {city}...</p>
  } else {
    return (
      <>
        <Temperature degree={weatherInfo.main.temp} />
        <img
          style={style}
          src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
          alt={`icon of ${weatherInfo.weather.description}`}
        />
        <p>wind {weatherInfo.wind.speed} m/s</p>
      </>
    )
  }
}

export default Weather
