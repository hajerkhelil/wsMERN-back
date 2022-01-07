

import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import {getcontacts, togglefalse} from '../redux/actions/Contactactions'
import {useDispatch} from "react-redux"
import {Link} from 'react-router-dom'


function Navbare() {
   const dispatch = useDispatch()
    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">CONTACT LIST </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link as={Link} to='/contacts'  onClick={()=>dispatch(getcontacts())}>contacts</Nav.Link>
        <Nav.Link as={Link} to='/addcontact'  onClick={()=> dispatch(togglefalse())}>Add</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    )
}


export default Navbare
