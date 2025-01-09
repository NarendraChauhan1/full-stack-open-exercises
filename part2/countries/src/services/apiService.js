import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const fetchCountryInfo = (country) => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
  )
  return request.then((response) => response.data)
}

const fetchCountryNames = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const fetchWeather = (city) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc9a35e1c602a77d9cf0efcee1832320`
  )
  return request.then((response) => response.data)
}

export default { fetchCountryInfo, fetchCountryNames, fetchWeather }
