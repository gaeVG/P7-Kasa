import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown , faChevronUp} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';


export function Faq({titre,paragraphe}) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
       <article className='dropdownapropos' >
        <div className='dropdownHeaderapropos'>
            <h4>{titre}</h4> 
            <div  onClick={() => {
                setIsOpen(false);
            }}> <i><FontAwesomeIcon icon= {faChevronUp} className="chevronapropos" /></i></div>       
        </div>
        <div className='dropdownBodyapropos'>
            <p className='dropdownTextapropos'>{paragraphe}</p>
        </div>
       </article>
       
    ) : ( 
        <article className='dropdownapropos' >
        <div className='dropdownHeaderapropos'>
            <h4>{titre}</h4> 
            <div onClick={() => {
                setIsOpen(true);
            }}><i><FontAwesomeIcon icon= {faChevronDown} className="chevronapropos" /></i></div>       
        </div>
       </article>
    )
}

