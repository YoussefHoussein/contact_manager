import React from 'react'
import ContactCard from '../contactCard';
import "./index.css";

const ContactList = ({contacts}) => {
    
    return(
        <div className='flexbox'>
            {
                 contacts.map((contact) => (                    <ContactCard 
                    name = {contact.name}
                    phone_number = {contact.phone_number}
                    latitude = {contact.latitude}
                    longitude = {contact.longitude}
                    key= {contact.name}
                    />
                 ))
            }
        </div>
      
    )
};
export default ContactList;