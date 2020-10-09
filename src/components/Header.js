import React from 'react'
import logo from '../img/logo.svg'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


export default function Header() {
  return (
    <div>
      <Navbar style={{ background: "black" }}>
        <Navbar.Brand id="navbar-title">
          BROTHER BARBER
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link
            href="#about"
            style={{ color: "white", fontFamily: "Lato", fontSize: "15px" }}>
            ABOUT
          </Nav.Link>
          <Nav.Link
            href="#team"
            style={{ color: "white", fontFamily: "Lato", fontSize: "15px" }}>
            TEAM
          </Nav.Link>
          <Nav.Link
            href="#book"
            style={{ color: "white", fontFamily: "Lato", fontSize: "15px" }}>
            BOOK
          </Nav.Link>
          <Nav.Link
            href="#contact"
            style={{ color: "white", fontFamily: "Lato", fontSize: "15px" }}>
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}