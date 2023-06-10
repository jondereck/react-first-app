import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState([]); // Array of unavailable dates

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReservationSubmit = (reservationData) => {
    // Update availability based on the submitted reservation data
    const { checkInDate, checkOutDate } = reservationData;
    const unavailableDates = calculateUnavailableDates(checkInDate, checkOutDate);
    setAvailability(unavailableDates);
  };

  const calculateUnavailableDates = (checkInDate, checkOutDate) => {
    // Perform your logic to calculate the unavailable dates
    // This can involve fetching data from a server, checking against existing reservations, etc.
    // For the sake of example, we'll assume the unavailable dates are passed directly in the reservation data
    const unavailableDates = [];
    const currentDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    while (currentDate <= endDate) {
      unavailableDates.push(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return unavailableDates;
  };

  return (
    <div>
      <h2>Select Check-in Date:</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileDisabled={({ date }) =>
          availability.some((unavailableDate) => date.toDateString() === unavailableDate.toDateString())
        }
      />
    </div>
  );
};

export default AvailabilityCalendar;
