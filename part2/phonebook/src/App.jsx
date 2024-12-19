import { useState,useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import backendService from './services/noteService'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    backendService.getPersons().then(response => setPersons(response))
  }, [])

  const newNameFunc = (event) => setNewName(event.target.value) 
  const newPhoneFunc = (event) => setNewPhone(event.target.value)

  const saveNameFunc = (event) => {
    event.preventDefault()
    const newPersons = {
      name: newName,
      number: newPhone,
      id: String(persons.length + 1)
    }
    persons.some(person => person.name === newName ) ? alert(`${newName} is already added to phonebook`) : backendService.sendContactDetails(newPersons).then(response => setPersons(persons.concat(response)))
    setNewPhone('')
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter copy={persons} setPersons={setPersons}/>
      </div>
      <h1>Add new contact</h1>
      <Form newName={newName} newPhone={newPhone} newNameFunc={newNameFunc} saveNameFunc={saveNameFunc} newPhoneFunc={newPhoneFunc}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App