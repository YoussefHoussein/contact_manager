import { useState } from "react";
import axios from 'axios';
import ContactForm from './components/contactForm'
import ContactList from "./components/contactList";
import Map from "./components/Map"
const App = () => {
  const [contacts , setContacts] = useState([])
  const [geoCode, setGeoCode] = useState([])
 
  return (
    <>
    <ContactForm setContacts={setContacts} contacts={contacts} setGeoCode = {setGeoCode} geoCode={geoCode}/>
    <ContactList contacts={contacts}/>
    <Map geoCode={geoCode}/>
    </>
  );
};

export default App;