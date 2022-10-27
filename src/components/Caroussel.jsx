import '../styles/Caroussel.css'
import api from '../API/data.json';
import { useParams } from 'react-router';
import React from 'react'


export function Logement(){
    let {id} = useParams()
  
    let test = api.filter( logement => logement.id == id )
  
    let logement = test[0]
    
    return (
      <>
        {
          logement.pictures.map((picture) =>{
            return <img src={picture} className="slideimage"/>
          })
        }
      </>
    )
  };

