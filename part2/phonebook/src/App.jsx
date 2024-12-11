import { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const newNameFunc = (event) => setNewName(event.target.value) 
  const newPhoneFunc = (event) => setNewPhone(event.target.value)

  const saveNameFunc = (event) => {
    event.preventDefault()
    const newPersons = {
      name: newName,
      number: newPhone
    }

    persons.some(person => person.name === newName ) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPersons))
    setNewPhone('')
    setNewName('')
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={saveNameFunc}>
        <div>
          name: <input value={newName} onChange={newNameFunc} placeholder='Enter your name' required/>
        </div>
        <div>
          number: <input value={newPhone} onChange={newPhoneFunc} placeholder='Enter your phone number' required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(contact => <Name names={contact} key={contact.name}/>)}
      </ul>
    </div>
  )
}

export default App