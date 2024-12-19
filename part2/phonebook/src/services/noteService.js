import axios from "axios";

const basePersonsUrl = "http://localhost:3001/persons";

const getPersons = () => {
  const request = axios.get(basePersonsUrl);
  return request.then((response) => response.data);
};

const sendContactDetails = (newDetails) => {
  const request = axios.post(basePersonsUrl, newDetails);
  return request.then((response) => response.data);
};

const deleteById = (id) => {
  const request = axios.delete(`${basePersonsUrl}/${id}`);
  return request;
};

const updatedContact = (contact) => {
  const request = axios.put(`${basePersonsUrl}/${contact.id}`, contact);
  return request.then((response) => response.data);
};

export default { getPersons, sendContactDetails, deleteById, updatedContact };
