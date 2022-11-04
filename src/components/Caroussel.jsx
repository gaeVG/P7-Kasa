import '../styles/Caroussel.css'
import api from '../API/data.json';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight , faChevronLeft} from "@fortawesome/free-solid-svg-icons";


const Caroussel = () => {
    // étape 1 : carouselIndex est une valeur de comparaison vis a vis de  l'index du tableau pictures de l'api, de base a 0 
    //, s'incremente et se decremente a chaque clic sur les chevron
    const [carouselIndex, setCarouselIndex] = useState(0)
    
    // grâce à useParams on récupère l'id dans l'url 
    let {id} = useParams()
    
    // je filtre mon api pour récupérer le logement dont l'id correspond a l'id de l'url
    let test = api.filter( logement => logement.id === id )

    let logement = test[0]
  
    useEffect(() => {
        // étape 2 : si carouselIndex est supérieur au nombre d'élements dans le tableau(-1 car l'index commence a 0) alors 
        // carousselIndex se reinitialise a la premiere image du tableau.
        if (carouselIndex > logement.pictures.length - 1) {
            setCarouselIndex(0)
        }
        // si carouselIndex est inférieur a 0(en cliquant sur le chevronleft lorsque il est déja à l'index 0) dans ce cas on retourne a 
        // la derniere image(.length étant égal au nombre d'image dans le tableau pictures) du tableau pictures.
        if (carouselIndex < 0) {
            setCarouselIndex(logement.pictures.length - 1)
        }
    }, [carouselIndex, logement.pictures.length])
    
    return (
        <>
        <div className='galerie'>
                {/* étape 3 : en cliquant sur le chevronLeft, l'image qui sera affiché sera celle à l'index de l'image actuellement affiché -1  */}
                {logement.pictures.length > 1 && <div onClick={() => 
                    setCarouselIndex(carouselIndex - 1)} className='galerie_boutton_left' aria-label='boutton de défilement'>
                        <FontAwesomeIcon icon={faChevronLeft}/></div>}
                    
                    <img src={logement.pictures[carouselIndex]} alt="Galerie montrant les différentes pièces du logement" className='galerieimg'/>
                    

                {/* étape 3 : en cliquant sur le chevronRight, l'image qui sera affiché sera celle à l'index de l'image actuellement affiché +1  */}
                {logement.pictures.length > 1 && <div onClick={() => 
                    setCarouselIndex(carouselIndex + 1)} className='galerie_boutton_right' aria-label='boutton de défilement'>
                        <FontAwesomeIcon icon={faChevronRight} /></div>}

            
        </div>
        
          {/* étape 4 : quand on clique sur l'un des chevron , le numéro de l'image actuelle apparaît(+1 car l'index commence a 0 ceci evite par exemple un numéro d'image a 0) 
                puis le / et enfin logement.pictures.lenght correspond au nombre d'images totales dans le tableau     */}
                {logement.pictures.length > 1 && <span className='nombre_image'>{carouselIndex + 1 }/{logement.pictures.length}</span>}
        </>
    );
};


export default Caroussel;