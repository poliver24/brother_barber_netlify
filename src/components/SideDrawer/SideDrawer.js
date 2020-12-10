import React, { Component } from "react";
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
import { OpenInNewRounded } from "@material-ui/icons";

class sideDrawer extends Component {
  
  render() {
    return (
      <div>
        <Drawer modal open="true">
          <List>
            <ListItem button key="ABOUT">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="ABOUT" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="TEAM">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="TEAM" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="BOOK">
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="BOOK" />
            </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button key="CONTACT">
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="CONTACT" />
              </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default sideDrawer;
