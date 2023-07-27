import React, { useState, useEffect } from 'react';
import { Event, events } from './data/events';
import EventList from './components/EventList/EventList';
import UserEvents from './components/UserEvents/UserEvents';
import NextEvent from './components/NextEvent/NextEvent';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  const [userEvents, setUserEvents] = useState<Event[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedUserEvents = localStorage.getItem('userEvents');
    if (savedUserEvents) {
      setUserEvents(JSON.parse(savedUserEvents));
    }

    const savedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(savedDarkMode === 'true');
  }, []);
  
  useEffect(() => {
    localStorage.setItem('userEvents', JSON.stringify(userEvents));
    localStorage.setItem('darkMode', String(darkMode));
  }, [userEvents, darkMode]);

  const handleSubscribe = (eventId: string) => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      setUserEvents((prevUserEvents) =>
        prevUserEvents.some((e) => e.id === eventId)
          ? prevUserEvents.filter((e) => e.id !== eventId)
          : [...prevUserEvents, event]
      );
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className='container-content'>
        <NextEvent events={userEvents} />
        <UserEvents events={userEvents} onSubscribe={handleSubscribe} />
        <EventList events={events} userEvents={userEvents} onSubscribe={handleSubscribe} />
      </div>
    </div>
  );
};

export default App;
