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

export default { getPersons, sendContactDetails, deleteById };
