import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import chef from "./Images/restaurant chef B.jpg";
import BookingForm from "./BookingForm";



function Reservations() {
    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
    ])
    const initialState = {
        availableTimes: [
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30",
            "22:00",
        ]
    }
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
                <BookingForm />
            </body>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}
export default Reservations;