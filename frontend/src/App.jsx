import { useState } from "react";
import axios from 'axios';
import ContactForm from './components/contactForm'
import ContactList from "./components/contactList";

const App = () => {
  const [contacts , setContacts] = useState([])

  return (
    <>
    <ContactForm setContacts={setContacts} contacts={contacts} />
    <ContactList contacts={contacts}/>
    
    </>
  );
};

export default App;