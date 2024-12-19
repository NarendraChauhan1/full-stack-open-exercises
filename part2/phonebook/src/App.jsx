import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Form from "./components/Form";
import backendService from "./services/noteService";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    backendService.getPersons().then((response) => setPersons(response));
  }, []);

  const newNameFunc = (event) => setNewName(event.target.value);
  const newPhoneFunc = (event) => setNewPhone(event.target.value);

  const saveNameFunc = (event) => {
    event.preventDefault();
    const newPersons = {
      name: newName,
      number: newPhone,
      id: String(persons.length + 1),
    };
    if (persons.some((person) => person.name === newName)) {
      if (
        confirm(
          `${newName} is already to phonebook, replace the old number with a new one?`
        )
      ) {
        const matchingContact = persons.find(
          (person) => person.name === newName
        );
        const updatingContact = { ...matchingContact, number: newPhone };
        backendService
          .updatedContact(updatingContact)
          .then(() => {
            return backendService.getPersons();
          })
          .then((response) => setPersons(response))
          .then(alert("Contact is successfully updated"))
          .catch((error) => {
            alert("Failed to update contact");
            console.error(error);
          });
      } else {
        setNewPhone("");
        setNewName("");
      }
    } else {
      backendService
        .sendContactDetails(newPersons)
        .then((response) => setPersons(persons.concat(response)));
      setNewPhone("");
      setNewName("");
    }
  };

  const deleteNoteById = (id) => {
    const contactToDelete = persons.find((contact) => contact.id === id);
    if (confirm(`Delete ${contactToDelete.name} ?`)) {
      backendService
        .deleteById(id)
        .then(
          setPersons(
            persons.filter((contact) => contact.id !== contactToDelete.id)
          )
        )
        .catch((error) => {
          alert("This contact has already been deleted from the server.");
          setPersons(
            persons.filter((contact) => contact.id !== contactToDelete.id)
          );
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter copy={persons} setPersons={setPersons} />
      </div>
      <h1>Add new contact</h1>
      <Form
        newName={newName}
        newPhone={newPhone}
        newNameFunc={newNameFunc}
        saveNameFunc={saveNameFunc}
        newPhoneFunc={newPhoneFunc}
        hello={deleteNoteById}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} deleteNoteById={deleteNoteById} />
    </div>
  );
};

export default App;
