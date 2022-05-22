import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo1 from '../images/logo1.jpg';
import cart from '../images/cart.jpg';



const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo1} style= {{width: '150px', height:'80px'}} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Clothes-List' activeStyle>
            Clothes List
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/cart'>
          <img src={cart} style= {{width: '50px', height:'50px'}} />
          </NavLink>
          <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        </NavMenu>
       
        
      </Nav>
    </>
  );
};

export default Navbar;
