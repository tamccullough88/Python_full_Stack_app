import { useState, useEffect } from 'react'
import ContactList from './contactList'

import './App.css'

function App() {
  const [contacts, setContacts] = useState([{ "firstName": "Tommy", "lastName": "McCullough", "email": "email", id: 1 }])

  useEffect(() => {
    fetchContacts()
  }, [])


  const fetchContacts = async () => {
    const response = await fetch(`http://localhost:5000/contacts`)
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }



  return (
    <>
      <ContactList contacts={contacts} />
    </>
  )
}

export default App
