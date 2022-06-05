import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,

} from 'reactstrap';
import { APP_NAME } from '../config';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggler = (e) =>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
        <Navbar color="light" light expand="md">
          <Link href={'/'}>
            <NavbarBrand>{APP_NAME}</NavbarBrand> 
          </Link>
          <NavbarToggler onClick={toggler} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link href='/signin'>
                    <NavLink>Signin</NavLink>
                  </Link>
              </NavItem>
              <NavItem>
                <Link href={'/signup'}>
                    <NavLink>Signup</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default Header