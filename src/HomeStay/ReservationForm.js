import React, { useState } from 'react';

const ReservationForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic

    const reservationData ={
        checkInDate,
        checkOutDate,
        guests,
        contactInfo,
        
    };

    setCheckInDate('');
    setCheckOutDate('');
    setGuests('');
    setContactInfo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Check-in Date:
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      </label>
      <label>
        Check-out Date:
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      </label>
      <label>
        Number of Guests:
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      </label>
      <label>
        Contact Information:
        <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
