import React, { useReducer, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import chef from "./Images/restaurant chef B.jpg";
import Booking from "./Booking";

const initialState = {
    items: ["17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
          ],
    selectedItem: '',
  }
  const initializeState = () => {
      return {
          items: [
              "17:00",
              "17:30",
              "18:00",
              "18:30",
              "19:00",
              "19:30",
              "20:00",
          ],
          selectedItem: '',
  }}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'REMOVE_ITEM':
        const newItems = state.items.filter(item => item !== action.payload);
        return { ...state, items: newItems };
      case 'SELECT_ITEM':
        return { ...state, selectedItem: action.payload };
        case 'NEW_DATE':
          return initializeState();
      default:
        return state;
    }
  }

function Reservations() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [times, setTimes] = useState(
      {
        items: ["17:00",
                "17:30",
                "18:00",
                "18:30",
                "19:00",
                "19:30",
                "20:00",
              ],
        selectedItem: '',
      }
    )
    const fetchData = () => {
      fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
      .then(response => response.json())
      .then(data => {
        setTimes(prevTimes => ({
          ...prevTimes,
          items: data.items
        }))
      })
    }
    useEffect(() => {
      fetchData();
    }, []);
    return(
        <>
        <header>
        <Header />
        </header>
        <main className="reservations">
            <header className="resheader">
                <h1 data-testid="heading">Plan Your Next Meal With Us!</h1>
                <p>Enter your name, party size, and contact information and select an available time slot below.</p>
                    <div className="resimg"><img src={chef} alt="A Little Lemon chef expertly preparing food." /></div>
                    <h2 style={{color:"#333333"}}>Tell Us A Little More About You!</h2>
            </header>
            <body>
                <Booking state={state} dispatch={dispatch} API={useEffect}/>
            </body>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}
export default Reservations;