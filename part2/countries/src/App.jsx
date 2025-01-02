import { useEffect, useState } from 'react'
import CountryList from './components/CoutryList'
import apiService from './services/apiService'

function App() {
  const [nameInput, setNameInput] = useState('')

  const [countryArray, setCountryArray] = useState([])

  const fetchAndFilterCountries = () => {
    apiService
      .fetchCountryNames()
      .then((response) => {
        const filteredCountries = response
          .map((countryList) => countryList.name.common)
          .filter((name) =>
            name.toLowerCase().includes(nameInput.toLowerCase())
          )
        setCountryArray(filteredCountries)
      })
      .catch((error) => {
        console.error('Error fetching countries:', error)
      })
  }

  useEffect(fetchAndFilterCountries, [nameInput])

  const handleNameChange = (event) => setNameInput(event.target.value)

  return (
    <>
      <div>
        <form>
          Find countries <input value={nameInput} onChange={handleNameChange} />
        </form>
        <CountryList country={countryArray} />
      </div>
    </>
  )
}

export default App
