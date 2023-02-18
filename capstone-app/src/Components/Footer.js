import React from 'react';
import RestaurantImg from "./Images/restaurant.jpg";

function Footer() {
    return (
        <>
        <footer>
        <img src={RestaurantImg} alt='Little Lemon Dining Area' />
        <ul>
            Navigation
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul>
            Contact
            <li>123 Hacker Way,<br/>
            Chicago, IL 60607</li>
            <li>(888) 123-4567</li>
            <li><a href="mail.google.com">info@littlelemon.com</a></li>
        </ul>
        </footer>
        </>
    )
    }
    
    export default Footer;