import { useState, useEffect } from 'react'
import apiService from '../services/apiService'
import Languages from './Languages'

const CountryList = ({ country }) => {
  const [selectedCountry, setSelectedCountry] = useState(country)
  const sync = () => {
    setSelectedCountry(country)
  }
  useEffect(sync, [country])
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

  if (selectedCountry.length === 250) {
    return null
  } else if (selectedCountry.length > 10) {
    return 'Too many matches, specify another filter'
  } else if (selectedCountry.length === 1) {
    return <Country name={selectedCountry[0]} />
  } else {
    return selectedCountry.map((name) => (
      <li key={name}>
        {name}
        <button
          onClick={(event) => {
            event.preventDefault()
            const oneCountry = [name]
            setSelectedCountry(oneCountry)
          }}
        >
          show
        </button>
      </li>
    ))
  }
}

export default CountryList
