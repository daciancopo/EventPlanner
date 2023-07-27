import React from 'react';
import { Event } from '../../data/events';
import modesImg from "../../assets/day-and-night.png"


interface NextEventProps {
  events: Event[];
}

const NextEvent: React.FC<NextEventProps> = ({ events }) => {
  
  if (!events.length) {
    return null;
  }

  const closestEvent = events.reduce((closest, event) => {
    return event.startDate < closest.startDate ? event : closest;
  });

  return (
    <div className='section'>
      <h2>Your Next Event</h2>
      <div className='card'>
        <div className='card-body'>
          <div className='body-left'>
            <img className='card-img' src={modesImg} />
          </div>
          <div className='body-right'>
            <h2><b>{closestEvent.title}</b></h2>
            <p>{closestEvent.description}</p>
            <p><b>{closestEvent.categories}</b></p>
          </div>
        </div>
        <div className='card-footer'>
          <div className='bean'>{closestEvent.startDate.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
