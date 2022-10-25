import '../styles/Faq.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

export function Faq() {
    return (
       <article className='dropdown' >
        <div className='dropdownHeader'>
            <h4>Fiabilité</h4> 
            <i><FontAwesomeIcon icon= {faChevronDown} className="chevron" /></i> 
        </div>
        <div className='dropdownBody'>
            <p className='dropdownText'>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </p>
        </div>
       </article>
    )
}

