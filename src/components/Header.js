import React, {useState} from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


const Header = (props) => {

    return(
    <div>
      <Navbar className="fixed-top" style={{ background: "white" }}>
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
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

export default Header;
