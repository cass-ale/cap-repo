import React, { useReducer, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import chef from "./Images/restaurant chef B.jpg";
import Booking from "./Booking"



function Reservations() {
    return(
        <>
        <header>
        <Header />
        </header>
        <main className="reservations">
            <header className="resheader">
                <h1>Plan Your Next Meal With Us!</h1>
                <p>Enter your name, party size, and contact information and select an available time slot below.
                    We will send you a booking confirmation upon completion of the reservation form.</p>
                    <div className="resimg"><img src={chef} alt="A Little Lemon chef expertly preparing food." /></div>
                    <h2 style={{color:"#333333"}}>Tell Us A Little More About You!</h2>
            </header>
            <body>
                <Booking />
            </body>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}
export default Reservations;