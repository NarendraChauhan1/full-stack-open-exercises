import { useState } from "react"

const Filter = ({copy, setPersons}) => {
const [newCopy, setNewCopy] = useState(copy)

    const filtering = (event) => {
        setNewCopy(copy)
        const searchName = event.target.value.toLowerCase()
        const filterList = copy.find(contacts => contacts.name.toLowerCase() === searchName)
        filterList ? setPersons([filterList]) : setPersons(newCopy)   
    }
    
    return (<p>Filter shown with <input onChange={filtering} placeholder="Enter the name" /></p>)

  }
  export default Filter