import api from '../API/data.json';
import {Faq} from '../components/Faq.jsx';
import Star from '../components/Star.jsx';
import {useParams} from 'react-router';
import '../styles/Logement.css'
import Tags from '../components/Tags.jsx';
import Caroussel from '../components/Caroussel';




function Logements(){
  let {id} = useParams()
  
  let test = api.filter( logement => logement.id === id )

  let logement = test[0]
  console.log(logement.host)
  console.log(logement.host.name)
  return (
    <>  
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
          <Faq titre="Description" paragraphe={logement.description}   />
          <Faq titre="Equipement" paragraphe= {logement.equipments.map((li) => (<li>{li}</li>))} />  
      </div>

      
      
    </>
  )
};
  
  
export default Logements;


