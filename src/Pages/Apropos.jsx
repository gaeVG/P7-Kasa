import React from 'react'
import '../Home.css';
import BannerApropos from '../assets/Bannermontainapropos.png'
import {Banner} from '../components/Banner.jsx';
import {Faq} from '../components/Faq';


function Apropos() {
  return (
      <>
      <Banner image={BannerApropos} /> 
      <Faq />
      </>
    );
  
}

export default Apropos