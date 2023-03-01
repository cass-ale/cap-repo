import React, { useReducer, useState } from 'react';

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

const Booking = () => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("None")
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'REMOVE_ITEM', payload: state.selectedItem });
    setInputValue('');
    clearForm();
  }
  const clearForm = (e) => {
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
    <div>
      <form onSubmit={handleFormSubmit}>
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
                onChange={handleDateChange}
                name='date'
                type="date"
                id="res-date" />
          <label>
          Choose Time
          <select value={state.selectedItem} onChange={handleDropdownChange}>
            {state.items.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
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
    </div>
  );
}

export default Booking;
