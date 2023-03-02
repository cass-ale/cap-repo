import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Booking from './Components/Booking';
import Reservations from "./Components/Reservations"


test('Renders reservations page', () => {
  render(<Router>
    <Reservations />
    </Router>
  );

  const headerElement = screen.getByTestId("heading");
  expect(headerElement).toBeInTheDocument();
})

test('Date field reinitializes time array', () => {
  render(<Router>
    <Reservations />
    </Router>
  );
  render(<Booking />);
  const dateField = screen.getByTestId("date");
  const timeField = screen.getByTestId("time");
  const submitButton = screen.getByTestId("submit");
  const options = screen.getAllByRole('options');

  fireEvent.change(dateField, {target: { value: '03/02/2023' }});
  fireEvent.change(timeField, {target: { value: '17:00' }});
  fireEvent.click(submitButton);

  expect(options).tohaveLength(6);
})