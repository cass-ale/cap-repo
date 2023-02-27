import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';


function Main() {
    return (
        <body>
        <Hero />
        <main className='main'>
            <Specials />
            <Testimonials />
            <About />
        </main>
        </body>
    )
    }    
    export default Main;