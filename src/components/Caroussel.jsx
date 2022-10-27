import '../styles/Caroussel.css'
import api from '../API/data.json';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';


const Caroussel = () => {
    const [carouselIndex, setCarouselIndex] = useState(0)

    let {id} = useParams()
  
    let test = api.filter( logement => logement.id === id )

    let logement = test[0]

    

    return (  
        <div>
            
        </div>
    );
};

export default Caroussel;