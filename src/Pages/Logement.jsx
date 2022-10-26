import api from '../API/data.json';
import {Caroussel} from '../components/Caroussel.jsx';
import {Faq} from '../components/Faq.jsx';



function Logement() {
    return (
      <>
       <div className='carousel'>
      {api.map((slider) => <Caroussel key={slider.id} pictures={slider.pictures} id={slider.id} />)}
      </div>
      </>
    )
    
  }
  
  export default Logement;