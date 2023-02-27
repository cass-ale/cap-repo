import React from 'react';
import { useState } from 'react';

function BookingForm() {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("17:00")
    const [guests, setGuests] = useState("1")
    const [occasion, setOccasion] = useState("None")

    const clearForm = () => {
        setName("");
        setDate("");
        setTime("17:00");
        setGuests("1");
        setOccasion("None");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
    }
    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder='Name'
                type="text"
                name="name" />
            <label htmlFor="res-date">Choose Date</label>
                <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name='date'
                type="date"
                id="res-date" />
            <label htmlFor="res-time">Choose Time</label>
                <select
                value={time}
                name='time'
                id="res-time"
                onChange={(e) => setTime(e.target.value)}>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
                </select>
            <label htmlFor="guests">Number of Guests</label>
                <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                name='guests'
                id="guests" />
            <label htmlFor="occasion">Occasion</label>
                <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                name='occasion'
                id="occasion">
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit">Make Your Reservation</button>
        </form>
    </>
    )
}

export default BookingForm;