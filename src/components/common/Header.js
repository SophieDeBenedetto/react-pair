import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router';


const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Code Pair</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to={'/'}>challenges</Link></NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header;