import '../styles/Faq.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

export function Faq({titre,paragraphe}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
       <article className='dropdown' >
        <div className='dropdownHeader'>
            <h4>{titre}</h4> 
            <button onClick={() => setIsOpen(true)}><i><FontAwesomeIcon icon= {faChevronDown} className="chevron" /></i></button>
        </div>
        <div className='dropdownBody'>
            <p className='dropdownText'>{paragraphe}</p>
        </div>
       </article>
       
    )
}

