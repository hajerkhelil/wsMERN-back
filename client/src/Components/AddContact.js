

import React , {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { addcontact, editcontact } from '../redux/actions/Contactactions';
import ContactReducer from './../redux/reducers/ContactReducer';

function AddContact() {

  const [email,setEmail]= useState('')
  const [name,setName]= useState('')
  const [age,setAge]= useState(0)

 const dispatch=  useDispatch()
 const navigate= useNavigate()
 const contact = useSelector(state=> state.ContactReducer.contact)
 const edit= useSelector(state=> state.ContactReducer.edit)

 useEffect(() => {
  if (edit) {setName(contact.name); setEmail(contact.email); setAge(contact.age)}
  else {setName(''); setAge(0); setEmail('')}
 }, [])


    return (
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  onChange={(e)=> setEmail (e.target.value)} value={email} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>name</Form.Label>
    <Form.Control  onChange={(e)=> setName (e.target.value)} value={name} type="text" placeholder="your name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>age</Form.Label>
    <Form.Control  onChange={(e)=> setAge (e.target.value)} value={age} type="number" placeholder="your age " />
  </Form.Group>

{edit  ? <Button variant="primary"  onClick={(e)=>{e.preventDefault(); dispatch(editcontact( contact._id, {name, age, email}, Navigate  ))}} type="submit">
    edit contact 
  </Button>  :   <Button variant="primary"  onClick={(e)=>{e.preventDefault(); dispatch(addcontact({name, age, email}, Navigate ))}} type="submit">
    add contact 
  </Button> }
  
</Form>
    )
}

export default AddContact
