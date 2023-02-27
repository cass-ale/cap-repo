import React from 'react';
import RestaurantImg from "./Images/restaurant.jpg";
import { Link } from 'react-router-dom';

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
            <li id="li"><Link to='/'>Home</Link></li>
            <li id="li"><Link to='/about'>About</Link></li>
            <li id="li"><Link to='/menu'>Menu</Link></li>
            <li id="li"><Link to='/reservations'>Reservations</Link></li>
            <li id="li"><Link to='/delivery'>Order Online</Link></li>
            <li id="li"><Link to='/login'>Login</Link></li>
        </ul>
        </div>
        <div className='footercontact'>
        <ul id='list'>
            <p>CONTACT</p>
            <li id="li">123 Hacker Way,<br/>
            Chicago, IL 60607</li>
            <li id="li">(888) 123-4567</li>
            <li id="li"><Link to="mail.google.com">info@littlelemon.com</Link></li>
        </ul>
        </div>
        <div className='footersocials'>
        <ul id='list'>
            <p>SOCIALS</p>
            <li id="li"><Link to="http://www.facebook.com/littlelemon">Facebook</Link></li>
            <li id="li"><Link to="http://www.twitter.com/littlelemon">Twitter</Link></li>
            <li id="li"><Link to="http://www.instagram.com/littlelemon">Instagram</Link></li>
            <li id="li"><Link to="http://www.youtube.com/littlelemon">YouTube</Link></li>
        </ul>
        </div>
        </div>
        </footer>
    )
    }
    
    export default Footer;