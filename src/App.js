import { useState } from 'react';
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5));
  function getRandomContact() {
    const random = Math.floor(Math.random() * contactsJSON.length);

    const randomContact = contactsJSON[random];

    setContacts(contacts.concat(randomContact));
  }
  return <div className="App">
  <h1>IronContacts</h1>

  <button onClick={() => getRandomContact()}>Add Random Contact</button>

  <table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won an Oscar</th>
    <th>Won an Emmy</th>

  </tr>

  {contacts.map((celebrity) =>{
    return(
  <tr>
  <td> 
    <img 
    src={celebrity.pictureUrl} 
    alt="Artist" 
    width="100" 
    height="100" />
    </td>
    <td> {celebrity.name}</td>
    <td>{celebrity.popularity.toFixed(2)}</td>
    <td> {celebrity.wonOscar === true ? "🏆" : "" }</td>
    <td> {celebrity.wonEmmy === true ? "🏆" : "" }</td>
  </tr>
  )})}  
</table>
  
  </div>;
}
export default App;