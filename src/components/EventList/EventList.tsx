import React, { useState } from 'react';
import { Event } from '../../data/events';

interface EventListProps {
  events: Event[];
  userEvents: Event[];
  onSubscribe: (eventId: string) => void;
}

const EventList: React.FC<EventListProps> = ({ events, userEvents, onSubscribe }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSubscribe = (eventId: string) => {
    onSubscribe(eventId);

  };

  const allCategories = Array.from(new Set(events.flatMap((event) => event.categories)));

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.categories.includes(selectedCategory))
    : events.filter((event) => !userEvents?.includes(event));

  return (
    <div className='section'>
      <h2>Discover Upcoming Events</h2>
      <div>
				<h3 className='sort'><b>Sort by:</b></h3>
        <div className='events-carousel'>
					<button className='bean' onClick={() => handleCategoryFilter('')}>All</button>
					{allCategories.map((category) => (
						<button className='bean' key={category} onClick={() => handleCategoryFilter(category)}>
							{category}
						</button>
					))}
        </div>
      </div>

			<div className='events-carousel'>
        {filteredEvents.map((val) => (
          <div key={val.id} className='event-card'>
            <div className='event-header'>
              <h3><b>{val.title}</b></h3>
            </div>
            <div className='event-body'>
              <p>{val.description}</p>
              <div className='bean'>{val.startDate.toLocaleString()}</div>
            </div>
            <div className='event-footer'>
              <button className='subscribe' onClick={() => handleSubscribe(val.id)}>
              	{userEvents?.includes(val) ? "Unsubscribe" : "Subscribe"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
