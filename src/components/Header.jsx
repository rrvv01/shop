import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'



function ColorSchemesExample() {
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={'/'}>MYTH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={'/bags'}>BAGS</Nav.Link>/
            <Nav.Link href={'/clothes'}>CLOTHES</Nav.Link>
            <Nav.Link href={'/pants'}>PANTS</Nav.Link>
            <Nav.Link href={'/outer'}>OUTER</Nav.Link>
            <Nav.Link href={'/shoes'}>SHOES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample