// Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faBell,
    faBars,
    faCog,
    faUser
} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <header>
            <div className='searchBar'>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input placeholder='Search'></input>
                <span className='category'>
                <FontAwesomeIcon icon={faBars} className="search-icon" />
                
                   Category</span>
                <span><button>Search</button></span>
            </div>
            <div className='profile'>

                <FontAwesomeIcon icon={faBell} className='icons'/>
                <FontAwesomeIcon icon={faCog} className='icons' />
                <icon></icon>

                <p className='Pname'>Farhan</p>
                <FontAwesomeIcon icon={faUser} className='icons' />

            </div>


        </header>
    );
};

export default Header;
