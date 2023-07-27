import React from 'react';
import modesImg from "../../assets/day-and-night.png";

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
  }  

const Navbar: React.FC<NavbarProps>  = ({darkMode, toggleDarkMode}) => {
  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className='logo'>
          <span className='brand'>
            Event Planner
          </span>
        </div>
        <div className='toggle' role='button' onClick={toggleDarkMode}>
          <img className='modes-img' src={modesImg} />
        </div>
      </div>
  )
}

export default Navbar