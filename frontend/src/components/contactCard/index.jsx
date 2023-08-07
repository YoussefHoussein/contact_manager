import React from 'react'
import "./index.css";
import axios from 'axios';

const ContactCard = ({name,phone_number,latitude,longitude}) => {
  const deleteContact = () => {
    axios.post('http://127.0.0.1:8000/api/delete-contact',{
      name: name
    }).then((response)=>{
      if(response.data.status == "Success"){
        console.log("erer")
      }
    })
  }

  return (
 
    
    <div className='cont'>
        <div className='card-container'>
      
      <img src="/Google_Contacts_icon.svg.png" alt="contact icon" className='image'/>
      <div><h1>{name}</h1></div>
      <div>{phone_number}</div>
      <div>
        <span>{latitude} .</span>
        <span> {longitude}</span>
      </div>
      <button className='remove' onClick={() => deleteContact()}>Remove</button>
    </div>
  </div>
  
  
  )
};
export default ContactCard;