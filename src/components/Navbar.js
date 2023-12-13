// NavBar.js
import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTachometerAlt,
    faAddressBook,
    faVideo,
    faPhone,
    faKeyboard,
    faComment,
    faCog,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        
        <nav className='navBar'>
            <ul className='left-ul'>




                <a>      <FontAwesomeIcon icon={faTachometerAlt} className="dashboard-icon" />
                    <li>Dashboard</li></a>
                <a>      <FontAwesomeIcon icon={faVideo} className="live-icon" />
                    <li>Live</li></a>
                <a>      <FontAwesomeIcon icon={faPhone} className="calls-icon" />
                    <li>Calls</li></a>
                <a>      <FontAwesomeIcon icon={faAddressBook} className="phone-book-icon" />
                    <li>Phone Book</li></a>
            </ul>
            <ul className='right-ul'>
                <a>      <FontAwesomeIcon icon={faKeyboard} className="dialer-pad-icon" />
                    <li>Dialer </li></a>
                <a>      <FontAwesomeIcon icon={faComment} className="conversation-icon" />
                    <li>Conversations</li></a>

                    <a>      <FontAwesomeIcon icon={faCog} className="conversation-icon" />
                    <li>Settings</li></a>
            </ul>
        </nav>
    );
};

export default Navbar;
