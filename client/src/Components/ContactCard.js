

import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deletecontact, getcontact, toggletrue } from './../redux/actions/Contactactions';
import { Link } from 'react-router-dom';

function ContactCard({contact}) {
  const dispatch=useDispatch()
    return (
        <div>
           <Card style={{ width: '18rem', marginTop:"15px" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>  {contact.name} </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary"   onClick={() => dispatch(deletecontact(contact._id))}>DELETE</Button>
    <Link  to= {`/edit/${contact._id}`}> <Button variant="primary" onClick={()=> {dispatch(getcontact(contact._id)) ; dispatch(toggletrue())}}>EDIT</Button> </Link>
   <Link  to= {`/conatcts/${contact._id}`}> <Button  onClick={() => dispatch(getcontact(contact._id))}> Details </Button> </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default ContactCard
