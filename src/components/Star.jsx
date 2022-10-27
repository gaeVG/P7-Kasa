import React from 'react';
import Staricon from './Icon/StarIcon'
import "../styles/Star.css"

const Star = ({value=0}) => {
    return (
        <div className='star'>
            {[1,2,3,4,5].map(number => <Staricon color={ value >= number ? "#FF6060" : "#E3E3E3" } key={number.toString()} /> ) }
        </div>
    );
};

export default Star;