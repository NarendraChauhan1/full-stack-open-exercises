import { useState, useEffect } from 'react'
import apiService from '../services/apiService'
import Languages from './Languages'
import Weather from './Weather'

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
    if (!data) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <h2 style={style}>{data.name.common}</h2>
        <p>Capital {data.capital}</p>
        <p>Area {data.area}</p>
        <h3 style={style}>languages:</h3>
        <Languages langs={data.languages} />
        <img src={data.flags.png} alt={`Flag of ${country}`} />
        <h3 style={style}>Weather in {data.capital}</h3>
        <Weather city={data.capital} />
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
