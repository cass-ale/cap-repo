import React from 'react';
import Logo from "./Images/Logo.svg";
import Nav from './Nav';

function Header() {
return (
    <>
    <header className='navbar'>
            <a href='#'>
             <img src={Logo} alt="Little Lemon logo" id="navlogo" />
            </a>
            <Nav />
    </header>
    </>
)
}

export default Header;