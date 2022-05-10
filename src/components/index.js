import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import Logo1 from '../images/logo1.jpg';
import Cart from '../images/cart.jpg';

const Navbar = () => {
  return (
    <>
      <Nav className="Navbar">
        <NavLink to='/'>
          <img src={Logo1}  style = {{'width':"100px", 'height':"100px", 'alt':'logo'}} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/'>
          <img src={Cart} style = {{'width':"50px", 'height':"50px", 'alt':'logo'}} />
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};

export default Navbar;
