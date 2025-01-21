import React, { useState } from 'react'
import './App.css';
import ContactForm from './components/ContactForm'

function App() {

  const [contacts,setContacts] = useState([]);

  const getContacts = (contact)=>{
    setContacts([].concat(contacts,contact));
    console.log(contacts);
    console.log(contact.name);
  }

  return (
    <div className='container'>
      <h2>Contact From</h2>
      <ContactForm getContacts={getContacts}/>
    </div>
  )
}

export default App