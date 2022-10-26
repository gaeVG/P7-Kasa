import { useParams } from 'react-router';
import api from '../API/data.json';
import {Caroussel} from '../components/Caroussel.jsx';
import {Faq} from '../components/Faq.jsx';




function Logement(){
  let {id} = useParams()

  let test = api.filter( logement => logement.id == id )

  let logement = test[0]

  return (
    <>
      <h1>{logement.title}</h1>
      {
        logement.pictures.map((picture) =>{
          return <img src={picture} />
        })
      }
    </>
  )
};
  
  
export default Logement;
