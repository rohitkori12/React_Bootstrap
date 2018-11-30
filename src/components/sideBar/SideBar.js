import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class SideBar extends Component {
  render() {
    return (
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Alert Configuration</NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default SideBar;
