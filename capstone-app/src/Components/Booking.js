import React, { useState, useEffect } from 'react';


function Booking({state, dispatch}) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("None");
  const [inputValue, setInputValue] = useState('');
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
  );
  const [functions, setFunctions] = useState({});
  useEffect(() => {
    async function fetchFunctions() {
      const response = await fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js");
      const code = await response.text();
      const fetchedFunctions = new Function(code)();
      setFunctions(fetchedFunctions);
    }
    fetchFunctions();
  }, [])
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
                aria-label="On Click"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder='Name'
                type="text"
                name="name"
                required
                minLength="2" /></label>
            <label htmlFor="res-date">Date
            <input
                aria-label="On Click"
                value={date}
                onChange={handleDateChange}
                name='date'
                type="date"
                id="res-date"
                data-testid="date"
                required /></label>
            <label>
            Time
              <select value={state.selectedItem} onChange={handleDropdownChange} data-testid="time" required aria-label="On Click">
                <option>Time</option>
            {state.items.map(item => <option key={item} value={item} required>{item}</option>)}
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
                id="guests"
                required
                aria-label="On Click" /></label>
            <label htmlFor="occasion">Occasion
            <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                name='occasion'
                id="occasion"
                aria-label="On Click">
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
