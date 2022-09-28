import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon' icon={faHouseLaptop} />
            <h1 className='heading'>Calculate The Activity</h1>
        </div>
    );
};

export default Header;