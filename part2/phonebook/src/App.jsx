import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

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

  const personsCopy = [...persons]

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter copy={personsCopy} setPersons={setPersons}/>
      </div>
      <h1>Add new contact</h1>
      <Form newName={newName} newPhone={newPhone} newNameFunc={newNameFunc} saveNameFunc={saveNameFunc} newPhoneFunc={newPhoneFunc}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App