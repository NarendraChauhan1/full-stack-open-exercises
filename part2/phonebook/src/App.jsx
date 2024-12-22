import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Form from "./components/Form";
import backendService from "./services/noteService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    backendService.getPersons().then((response) => setPersons(response));
  }, []);

  const newNameFunc = (event) => setNewName(event.target.value);
  const newPhoneFunc = (event) => setNewPhone(event.target.value);

  const styleRed = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const styleGreen = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

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
          .then(() => {
            setMessage(<p style={styleGreen}>Updated {newName}</p>);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch(() => {
            setMessage(<p style={styleRed}>Failed to update contact</p>);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      } else {
        setNewPhone("");
        setNewName("");
      }
    } else {
      backendService
        .sendContactDetails(newPersons)
        .then((response) => setPersons(persons.concat(response)))
        .then(() => {
          setMessage(<p style={styleGreen}>Added {newName}</p>);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
      setNewPhone("");
      setNewName("");
    }
  };

  const deleteNoteById = (id) => {
    const contactToDelete = persons.find((contact) => contact.id === id);
    if (confirm(`Delete {contactToDelete.name} ?`)) {
      backendService
        .deleteById(id)
        .then(
          setPersons(
            persons.filter((contact) => contact.id !== contactToDelete.id)
          )
        )
        .then(() => {
          setMessage(
            <p style={styleGreen}>
              {contactToDelete.name} is successfully deleted
            </p>
          );
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch(() => {
          setMessage(
            <p style={styleRed}>
              This contact has already been deleted from the server.
            </p>
          );
          setPersons(
            persons.filter((contact) => contact.id !== contactToDelete.id)
          );
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
