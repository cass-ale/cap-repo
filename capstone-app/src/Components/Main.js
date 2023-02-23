import React from 'react';
import HeroImage from "./Images/restaurantfood.jpg";
import bruschetta from "./Images/bruchetta.svg";
import salad from "./Images/greek salad.jpg";
import cake from "./Images/lemon dessert.jpg";
import person1 from "./Images/Person 1.jpg";
import person2 from "./Images/Person 2.jpg";
import person3 from "./Images/Person 3.jpg";
import person4 from "./Images/Person 4.jpg";
import mario1 from "./Images/Mario and Adrian A.jpg";
import mario2 from "./Images/Mario and Adrian B.jpg";
import dish from "./Images/Dish icon.svg";
import cc from "./Images/creditcard.svg";
import star from "./Images/Star Icon.jpg";



function Main() {
    return (
        <>
        <header className='hero'>
            <div className='container'>
                <div id='text'>
            <h1>Little Lemon</h1>
            <h2 id='sub'>Chicago</h2>
            <p id='sub'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a href='/reservations' id='btn'>
                <button className='button'>
                Reserve A Table
                </button>
                </a>
            </div>
            </div>
            <div className='imgcontainer'>
                <img src={HeroImage} alt='Chef holding a tray of freshly made bruschetta.' />
                </div>
        </header>
        <main className='main'>
            <header>
                <h1 style={{color:"#333333"}}>This Week's Specials!</h1>
                <a href="/menu"><button className='button'>Online Menu</button></a>
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
            <section className='testimonials'>
                <h1 style={{color:"#333333"}}>Testimonials</h1>
                <div className='testimcontainer'>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
                <div className='reviewer'><img src={person1} alt='Reviewer' /><p id='reviewer'>Francis B.</p></div>
                <p>"Always room for desert!"</p>
                    </div>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
                <div className='reviewer'><img src={person2} alt='Reviewer' /><p id='reviewer'>Terri F.</p></div>
                    <p>"Amazing!"</p>
                    </div>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
                <div className='reviewer'><img src={person3} alt='Reviewer' /><p id='reviewer'>Amber H.</p></div>
                <p>“Mario and Adrian know how to make diners feel welcomed!”</p>
                    </div>
                    <div className='testim'>
                        <div className='rate'><p>Rating</p><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /><img src={star} alt='star icon' /></div>
               <div className='reviewer'><img src={person4} alt='Reviewer' /><p id='reviewer'>Leon Q.</p></div>
               <p>"Loved the Greek Salad!"</p>
                    </div>
                </div>
            </section>
            <section className='about'>
                <div className='abouttext'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Founded in 2013, Little Lemon's cuisine aims to capture the simplicity and joy of Mediterranean dining. Executive Chefs Mario Lennox and Adrian Moore were both born and raised in Chicago, and their stellar attention to detail ensures that every visit feels as magical as the first. Here at Little Lemon, you'll be welcomed in as family. We know you'll enjoy your meal at your soon-to-be favorite restaurant!</p>
                </div>
                <div className='abtimg'>
                <img src={mario1} alt="Head Chefs Mario and Adrian" />
                <img src={mario2} alt="Head Chefs Mario and Adrian" />
                </div>
            </section>
        </main>
        </>
    )
    }
    
    export default Main;