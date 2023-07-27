import React from 'react';
import { Event } from '../../data/events';
import "./UserEvents.css";

interface UserEventsProps {
  events: Event[];
  onSubscribe: (eventId: string) => void;
}

const UserEvents: React.FC<UserEventsProps> = ({ events, onSubscribe }) => {
  if (!events.length) {
    return null;
  }

  const handleSubscribe = (eventId: string) => {
    onSubscribe(eventId);
  };

  const closestEvent = events.reduce((closest, event) => {
    return event.startDate < closest.startDate ? event : closest;
  });

  const sortedUserEvents = events
  .slice()
  .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  return (
    <div className='section'>
      <h2>My Upcoming Events</h2>
      <div className='events-carousel'>
        {sortedUserEvents.map((val) => (
          <div key={val.id} className='event-card'>
            <div className='event-header'>
              <h3><b>{val.title}</b></h3>
            </div>
            <div className='event-body'>
              <div className='bean'>
                {val.id !== closestEvent.id ? val.startDate.toLocaleString() : "Next Event"}
              </div>
            </div>
            <div className='event-footer'>
              <button className='subscribe' onClick={() => handleSubscribe(val.id)}>
              	Unsubscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEvents;
