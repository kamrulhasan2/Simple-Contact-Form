import React, { useState } from 'react'
import './App.css';
import ContactForm from './components/ContactForm'
import Table from './components/Table';

function App() {

  const [contacts,setContacts] = useState([]);

  const getContacts = (contact)=>{
    setContacts([].concat(contacts,contact));
  }

  return (
    <div className='container'>
      <h2 className='heading'>Contact Form</h2>
      <ContactForm getContacts={getContacts}/>
      <Table contacts={contacts} />
    </div>
  )
}

export default App