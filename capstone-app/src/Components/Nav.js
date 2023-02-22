import React from 'react';


function Nav() {
    return (
        <>
        <nav>
        <ul id='navlink' style={{listStyle: "none", fontWeight: "bolder"}}>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/reservations'>Reservations</a></li>
            <li><a href='/delivery'>Order Online</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
        </nav>
        </>
    )
    }
    export default Nav;