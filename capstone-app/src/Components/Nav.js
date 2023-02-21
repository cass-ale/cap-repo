import React from 'react';


function Nav() {
    return (
        <>
        <nav>
        <ul id='navlink' style={{listStyle: "none"}}>
            <li><a href='#' className='navbar'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservations</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
        </nav>
        </>
    )
    }
    export default Nav;