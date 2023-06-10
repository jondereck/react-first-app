import React from 'react';

const AccommodationCard = ({ roomType, amenities, pricing, additionalDetails }) => {
  return (
    <div>
      <h3>{roomType}</h3>
      <p>Amenities: {amenities}</p>
      <p>Pricing: {pricing}</p>
      <p>Additional Details: {additionalDetails}</p>
    </div>
  );
};

export default AccommodationCard;
