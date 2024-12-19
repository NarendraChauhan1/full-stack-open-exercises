const Persons = ({ persons, deleteNoteById }) => {
  return (
    <ul>
      {persons.map((contact) => (
        <li key={contact.id}>
          {contact.name} {contact.number}{" "}
          <button onClick={() => deleteNoteById(contact.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
