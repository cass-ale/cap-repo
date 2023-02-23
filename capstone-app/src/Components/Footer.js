import React from 'react';
import RestaurantImg from "./Images/restaurant.jpg";

function Footer() {
    return (
        <footer className='footer'>
            <div className="footerimg">
        <img src={RestaurantImg} alt='Little Lemon Dining Area' />
        </div>
        <div className='footertext'>
        <div className="footernav" >
        <ul id='list'>
            <p>NAVIGATION</p>
            <li id="li"><a href='/'>Home</a></li>
            <li id="li"><a href='/about'>About</a></li>
            <li id="li"><a href='/menu'>Menu</a></li>
            <li id="li"><a href='/reservations'>Reservations</a></li>
            <li id="li"><a href='/delivery'>Order Online</a></li>
            <li id="li"><a href='/login'>Login</a></li>
        </ul>
        </div>
        <div className='footercontact'>
        <ul id='list'>
            <p>CONTACT</p>
            <li id="li">123 Hacker Way,<br/>
            Chicago, IL 60607</li>
            <li id="li">(888) 123-4567</li>
            <li id="li"><a href="mail.google.com">info@littlelemon.com</a></li>
        </ul>
        </div>
        <div className='footersocials'>
        <ul id='list'>
            <p>SOCIALS</p>
            <li id="li"><a href="http://www.facebook.com/littlelemon">Facebook</a></li>
            <li id="li"><a href="http://www.twitter.com/littlelemon">Twitter</a></li>
            <li id="li"><a href="http://www.instagram.com/littlelemon">Instagram</a></li>
            <li id="li"><a href="http://www.youtube.com/littlelemon">YouTube</a></li>
        </ul>
        </div>
        </div>
        </footer>
    )
    }
    
    export default Footer;