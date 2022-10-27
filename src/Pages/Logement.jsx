import api from '../API/data.json';
import {Faq} from '../components/Faq.jsx';
import Star from '../components/Star.jsx';
import {useParams} from 'react-router';
import '../styles/Logement.css'
import Tags from '../components/Tags.jsx';




function Logements(){
  let {id} = useParams()
  
  let test = api.filter( logement => logement.id === id )

  let logement = test[0]
  return (
    <>   
      {
        logement.pictures.map((picture) =>{
          return <img src={picture} className="slideimage" alt="galerie d'image"/>
        }) 
        
      }
      <Star value={parseInt(logement.rating)} />
      <Tags tags={logement.tags}/>
    </>
  )
};
  
  
export default Logements;
