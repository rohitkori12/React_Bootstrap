/**
 * Created by bharatm on 4/21/18.
 */

import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    // Header html starts here
    // return <div />;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">EPISCAN</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default PageHeader;
