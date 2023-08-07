import React, { useState } from 'react'
import axios from 'axios';
import "./index.css";
const ContactForm = ({contacts , setContacts,geoCode,setGeoCode}) => {
  const [name , setName] = useState("");
  const [phone_number , setPhoneNumber] = useState("");
  const [latitude , setLatitude] = useState("");
  const [longitude , setlongitude] = useState("");
  const [name_error , setNameError] =useState(false);
  const [phone_number_error , setPhoneNumberError] = useState(false);
  const [latitude_error , setLatitudeError] = useState(false);
  const [longitude_error , setLongitudeError] = useState(false);
  const [empty, setEmpty] = useState(false)


  const addContact = () => {
    axios.post('http://127.0.0.1:8000/api/add-contact',{
      name: name,
      phone_number : phone_number,
      latitude: latitude,
      longitude: longitude,
    }).then((response)=>{
      console.log(response.data);
      if(response.data.status == "Failed"){
        if(response.data.message == "Empty field"){
          console.log("error")
          setEmpty(true)
        }
        else if(response.data.message == "Contact name already exists"){
          console.log("error")
          setNameError(true)
          setLatitudeError(false)
          setLongitudeError(false)  
          setPhoneNumberError(false)
          setEmpty(false)
        }
        else if(response.data.message == "Contact phone number already exists"){
          setPhoneNumberError(true)
          setNameError(false)
          setLatitudeError(false)
          setLongitudeError(false)
          setEmpty(false)
        }
        else{
          setPhoneNumberError(false)
          setNameError(false)
          setEmpty(false)
        }
        
      }
      else{
        setPhoneNumberError(false)
        setNameError(false)
        setLatitudeError(false)
        setLongitudeError(false)
        setEmpty(false)
       
        const newCard = {
          name : name,
          phone_number: phone_number,
          latitude: latitude,
          longitude: longitude,
        }
        setContacts([...contacts,newCard]);
        setGeoCode([...geoCode,[latitude,longitude]])
        
        setName("")
        setPhoneNumber("")
        setLatitude("")
        setlongitude("")
      }
    })
  }
 
  return (
    <div className='container flex col'>
      <h1 >Add Contact</h1>
      <div className='input-container flex col'>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} name="name" id="name" placeholder='name' className= {`input ${name_error ? 'error' : ''}`} onChange={(e) => {
        setName(e.target.value);
      }}/>
      {name_error && <span className='name-error'>Error: Name already exists</span>}
      </div>
      <div className='input-container flex col'>
      <label htmlFor="phone-number">Phone number</label>
      <input type="text" value={phone_number} name="phone-number" id="phone-number" placeholder='phone number' className= {`input ${phone_number_error ? 'error' : ''}`} onChange={(e) => {
        setPhoneNumber(e.target.value);
      }}/>
      {phone_number_error && <span className='name-error'>Error: Phone number already exists</span>}
      </div>
      <div className='input-container flex location'>
        <div className='test'>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" value={latitude} name="latitude" id="latitude" className= {`input half ${latitude_error ? 'error' : ''}`} placeholder='latitude' onChange={(e) => {
        setLatitude(e.target.value);
      }}/>
        </div>
        <div className='test'>
        <label htmlFor="longitude">Longitude</label>
        <input type="text" value={longitude} name="longitude" id="longitude" className= {`input half ${longitude_error ? 'error' : ''}`} placeholder='longitude' onChange={(e) => {
        setlongitude(e.target.value);
      }}/>
        </div>
      </div>
      <div className='input-container flex location'>
      <button className='button-add' onClick={() => addContact()}>Add</button>
      </div>
      {empty && <span className='name-error empty'>Error: You should fill all the fields</span>}
    </div>
  );
};

export default ContactForm;
