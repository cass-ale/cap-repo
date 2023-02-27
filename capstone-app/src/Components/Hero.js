import React from 'react';
import HeroImage from "./Images/restaurantfood.jpg";
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <header className='hero'>
            <div className='container'>
                <div id='text'>
            <h1>Little Lemon</h1>
            <h2 id='sub'>Chicago</h2>
            <p id='sub'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='/reservations' id='btn'>
                <button className='button'>
                Reserve A Table
                </button>
                </Link>
            </div>
            </div>
            <div className='imgcontainer'>
                <img src={HeroImage} alt='Chef holding a tray of freshly made bruschetta.' />
                </div>
        </header>
    )
}

export default Hero;