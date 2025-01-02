import { useState, useEffect } from 'react'
import apiService from '../services/apiService'
import Languages from './Languages'

const CountryList = ({ country }) => {
  const style = {
    margin: '0 20',
  }
  const Country = ({ name }) => {
    const [data, setData] = useState(null)
    const getCountryDetails = () => {
      apiService
        .fetchCountryInfo(name)
        .then((response) => {
          const newData = response
          setData(newData)
        })
        .catch((error) => {
          console.error('Error fetching country details:', error)
        })
    }
    useEffect(getCountryDetails, [])
    const countryDetails = data
    if (!data) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <h2 style={style}>{countryDetails.name.common}</h2>
        <p>Capital {countryDetails.capital}</p>
        <p>Area {countryDetails.area}</p>
        <h3 style={style}>languages:</h3>
        <Languages langs={countryDetails.languages} />
        <img src={countryDetails.flags.png} alt={`Flag of ${country}`} />
      </div>
    )
  }

  if (country.length === 250) {
    return null
  } else if (country.length > 10) {
    return 'Too many matches, specify another filter'
  } else if (country.length === 1) {
    return <Country name={country[0]} />
  } else {
    return country.map((name) => <li key={name}>{name}</li>)
  }
}

export default CountryList
