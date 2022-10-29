import logofooter from '../assets/logofooter.png'
import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logofooter} alt="logo kasa footer" className='logofooter'></img>
            <p className='textfooter'> © 2020 Kasa. All rights reserved </p> 
        </div>
    );
};

export default Footer;