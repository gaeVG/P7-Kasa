import React from 'react'
import '../styles/Faqapropos.css'
import BannerApropos from '../assets/Bannermontainapropos.png'
import {Banner} from '../components/Banner.jsx';
import {Faq} from '../components/Faqapropos.jsx';
import Footer from '../components/Footer';



function Apropos() {
  return (
      <>
      <div className="mainconteneur propos">
        <Banner image={BannerApropos} /> 
        <Faq titre="Fiabilité"paragraphe="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
        <Faq titre="Respect" paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Faq titre="Service" paragraphe="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <Faq titre="Sécurité" paragraphe="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
      </>
    );
  
}

export default Apropos