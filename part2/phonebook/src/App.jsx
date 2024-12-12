import { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const newNameFunc = (event) => setNewName(event.target.value) 
  const newPhoneFunc = (event) => setNewPhone(event.target.value)

  const saveNameFunc = (event) => {
    event.preventDefault()
    const newPersons = {
      name: newName,
      number: newPhone,
      id: String(persons.length + 1)
    }

    persons.some(person => person.name === newName ) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPersons))
    setNewPhone('')
    setNewName('')
  } 

  const filter = (event) => {
    const filterName = event.target.value
    const filerList = [persons.find(person => person.name === filterName)]
    const copyPersons = persons
    persons.some(person => person.name.toLowerCase() === filterName.toLowerCase()) ? setPersons(filerList) : setPersons(copyPersons)    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input onChange={filter}/>
      </div>
      <h2>Add new contact</h2>
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
      {persons.map(contact => <Name names={contact} key={contact.id}/>)}
      </ul>
    </div>
  )
}

export default App