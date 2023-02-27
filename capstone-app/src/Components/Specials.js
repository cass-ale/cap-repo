import React from 'react';
import bruschetta from "./Images/bruchetta.svg";
import salad from "./Images/greek salad.jpg";
import cake from "./Images/lemon dessert.jpg";
import dish from "./Images/Dish icon.svg";
import { Link } from 'react-router-dom';

function Specials() {
    return (
        <>
        <header>
                <h1 style={{color:"#333333"}}>This Week's Specials!</h1>
                <Link to="/menu"><button className='button'>Online Menu</button></Link>
                </header>
            <section className='specials'>
                <div className='card' id='salad'>
                <img src={salad} alt="Fresh greek salad" />
                <div className='cardTitle'><h3>Greek Salad</h3><h5 id='price' style={{color:"#ee9972"}}>$12.99</h5></div>
                <p style={{color:"#333333"}}>Our famous Greek Salad: crispy lettuce, peppers, olives, and feta cheese; topped with chunky garlic and rosemary croutons.</p>
                <div className='order'><p style={{color:"#333333"}} id='order'>Order Now</p><img src={dish} alt="Dish icon" id='dish'/></div>
                </div>
                <div className='card'>
                <img src={bruschetta} alt="Fresh and delicious bruschetta" id='brus'/>
                <div className='cardTitle'><h3>Bruschetta</h3><h5 id='price' style={{color:"#ee9972"}}>$14.99</h5></div>
                <p style={{color:"#333333"}}>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div className='order'><p style={{color:"#333333"}} id='order'>Order Now</p><img src={dish} alt="Dish icon" id='dish'/></div>
                </div>
                <div className='card'>
                <img src={cake} alt="Sweet and delectable lemon cake" />
                <div className='cardTitle'><h3>Lemon Cake</h3><h5 id='price' style={{color:"#ee9972"}}>$9.99</h5></div>
                <p style={{color:"#333333"}}>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className='order'><p style={{color:"#333333"}} id='order'>Order Now</p><img src={dish} alt="Dish icon" id='dish'/></div>
                </div>

            </section>
            </>
    )
}

export default Specials;