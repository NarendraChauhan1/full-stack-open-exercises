
const Persons = ({persons}) => {
    return (
    <ul>
      {persons.map(contact => <li key={contact.id}>{contact.name} {contact.number}</li>)}
    </ul>)
     
}

export default Persons