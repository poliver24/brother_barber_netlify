import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventIcon from "@material-ui/icons/Event";
import PeopleIcon from "@material-ui/icons/People";
import EmailIcon from "@material-ui/icons/Email";


import InfoIcon from "@material-ui/icons/Info";

import "@material/drawer/dist/mdc.drawer.css";

const sideDrawer = (props) => (
  <div onClick={props.closeDrawer}>
    <Drawer modal open="true">
      <BrowserRouter>
        <List>
          <ListItem button component={Link} to="#about" key="ABOUT">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="ABOUT" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="#team" key="TEAM">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="TEAM" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="#book" key="BOOK">
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="BOOK" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="#contact" key="CONTACT">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="CONTACT" />
          </ListItem>
        </List>
      </BrowserRouter>
    </Drawer>
  </div>
);

export default sideDrawer;
