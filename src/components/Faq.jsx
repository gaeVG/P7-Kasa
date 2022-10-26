import '../styles/Faq.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown , faChevronUp} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

export function Faq({titre,paragraphe}) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
       <article className='dropdown' >
        <div className='dropdownHeader'>
            <h4>{titre}</h4> 
            <div  onClick={() => {
                setIsOpen(false);
            }}> <i><FontAwesomeIcon icon= {faChevronUp} className="chevron" /></i></div>       
        </div>
        <div className='dropdownBody'>
            <p className='dropdownText'>{paragraphe}</p>
        </div>
       </article>
       
    ) : ( 
        <article className='dropdown' >
        <div className='dropdownHeader'>
            <h4>{titre}</h4> 
            <div onClick={() => {
                setIsOpen(true);
            }}><i><FontAwesomeIcon icon= {faChevronDown} className="chevron" /></i></div>       
        </div>
       </article>
    )
}

