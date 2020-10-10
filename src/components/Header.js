import React from 'react'
import logo from '../img/logo.svg'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


export default function Header() {
  return (
    <div>
      <Navbar className="fixed-top" style={{ background: "black" }}>
        <div>
          <DrawerToggleButton />
        </div>
        <Navbar.Brand id="navbar-title">BROTHER BARBER</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#about" id="navbar-link">
            ABOUT
          </Nav.Link>
          <Nav.Link href="#team" id="navbar-link">
            TEAM
          </Nav.Link>
          <Nav.Link href="#book" id="navbar-link">
            BOOK
          </Nav.Link>
          <Nav.Link href="#contact" id="navbar-link">
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}