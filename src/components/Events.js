import React from 'react';

const Events = () => {
  const events = [
    { id: 1, title: "Annual Meeting", date: "2023-12-15", photos: ["/images/event1.jpeg"] },
    { id: 2, title: "Tech Conference", date: "2024-01-20", photos: ["/images/event2.jpeg"] },
    // Add more events here
  ];

  return (
    <div>
      <h2>Company Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <div>
              {event.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Event ${event.id} Photo ${index + 1}`} width="100" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
