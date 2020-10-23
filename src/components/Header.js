import React, {useState} from 'react'
import logo from '../img/logo.svg'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import SideDrawer from "./SideDrawer/SideDrawer";

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


const Header = (props) => {

    // const [drawerStatus, setDrawerStatus] = useState(false)

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
        {/* <SideDrawer drawer={drawerStatus} /> */}
      </Navbar>
    </div>
  );
}

export default Header;
