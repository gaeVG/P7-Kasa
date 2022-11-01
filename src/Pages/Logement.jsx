import api from '../API/data.json';
import {Faq} from '../components/Faqlogement.jsx';
import Star from '../components/Star.jsx';
import {useParams} from 'react-router';
import '../styles/Logement.css'
import '../styles/Faqlogement.css'
import Tags from '../components/Tags.jsx';
import Caroussel from '../components/Caroussel';
import Footer from '../components/Footer';
import Error404 from '../Pages/Error404';




function Logements(){

  let {id} = useParams()
  
  let test = api.filter( logement => logement.id === id )

  let logement = test[0]
  


  return (
    <>  
    {logement ? (

      <div className="mainconteneur">
        <Caroussel />
        <section className='conteneurdetail'>
          <div className='descriptionlogement'>
            <h1 className='titreimage'>{logement.title}</h1>
            <p className='localisation'>{logement.location}</p>
            <Tags tags={logement.tags} className="tags"/>
          </div>
          <div className='utilisateur_star'>
            <div className='flex_utilisateur'>
              <p className='pseudo'>{logement.host.name}</p>
              <img className="imageuser"src={logement.host.picture}></img>
            </div>
            <Star value={parseInt(logement.rating)} className="star" />
          </div>
        </section>
        <div className='commentaire'>
            <Faq titre="Description" paragraphe={logement.description}   className='largeur'/>
            <Faq titre="Equipement" paragraphe= {logement.equipments.map((li) => (<li>{li}</li>))} />  
        </div> 
      </div> 
      
       
    ) : <Error404/>}
    </>
    
  )

};
  
  
export default Logements;


