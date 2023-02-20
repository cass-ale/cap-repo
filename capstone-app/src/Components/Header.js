import React from 'react';
import Logo from "./Images/Logo.svg";


function Header() {
return (
    <>
    <header className='navbar'>
        <a href='#'>
    <img src={Logo} alt="Little Lemon logo" />
    </a>
    </header>
    </>
)
}

export default Header;