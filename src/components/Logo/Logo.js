import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>

            {/* Uisng React tilt.js library to build a frame with Animation */}
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '5px'}} src={brain} alt='logo' />   {/* Loyalty free Icons */}
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;