
import React from 'react'
import { useSelector } from 'react-redux';

function Contactdetails() {

    const contact= useSelector(state => state.ContactReducer.contact)
    return (
        <div>
            <h1>{contact.name}</h1>
            <h1>{contact.email}</h1>
            <h1>{contact.age}</h1>

        </div>
    )
}

export default Contactdetails
