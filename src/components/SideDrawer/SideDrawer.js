import React from 'react';

import './SideDrawer.css';

const sideDrawer = (props) => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#team">TEAM</a>
      </li>
      <li>
        <a href="#book">BOOK</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;