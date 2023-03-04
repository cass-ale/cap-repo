import React, { useState, useEffect } from 'react';


function Booking({state, dispatch, useEffect}) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("None");
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'REMOVE_ITEM', payload: state.selectedItem });
    setInputValue('');
    clearForm();
  }
  const clearForm = () => {
    setName("");
    setGuests("");
    setOccasion("None");
  }
  const handleDropdownChange = (event) => {
    dispatch({ type: 'SELECT_ITEM', payload: event.target.value });
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({type: "NEW_DATE", payload: event.target.value})
  }

  return (
    <div className='formContainer'>
      <div className='form'>
      <form onSubmit={handleFormSubmit}>
              <label htmlFor='name'>Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder='Name'
                type="text"
                name="name" /></label>
            <label htmlFor="res-date">Date
            <input
                value={date}
                onChange={handleDateChange}
                name='date'
                type="date"
                id="res-date"
                data-testid="date" /></label>
            <label>
            Time
              <select value={state.selectedItem} onChange={handleDropdownChange} data-testid="time">
                <option>Time</option>
            {state.items.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <label htmlFor="guests">Party Size
            <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                name='guests'
                id="guests" /></label>
            <label htmlFor="occasion">Occasion
            <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                name='occasion'
                id="occasion">
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select></label>
            <button className='button' type="submit" data-testid="submit">Make Your Reservation</button>
      </form>
      </div>
    </div>
  );
}

export default Booking;
