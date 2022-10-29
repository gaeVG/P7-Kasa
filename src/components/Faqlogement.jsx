import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown , faChevronUp} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';


export function Faq({titre,paragraphe}) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
       <article className='dropdownlogement' >
        <div className='dropdownHeaderlogement'>
            <h4>{titre}</h4> 
            <div  onClick={() => {
                setIsOpen(false);
            }}> <i><FontAwesomeIcon icon= {faChevronUp} className="chevronlogement" /></i></div>       
        </div>
        <div className='dropdownBodylogement'>
            <p className='dropdownTextlogement'>{paragraphe}</p>
        </div>
       </article>
       
    ) : ( 
        <article className='dropdownlogement' >
        <div className='dropdownHeaderlogement'>
            <h4>{titre}</h4> 
            <div onClick={() => {
                setIsOpen(true);
            }}><i><FontAwesomeIcon icon= {faChevronDown} className="chevronlogement" /></i></div>       
        </div>
       </article>
    )
}

