import '../Home.css';
import BannerAccueil from '../assets/Bannermontain.png'
import api from '../API/data.json';
import {Banner} from '../components/Banner.jsx';
import {Carts} from '../components/Carts.jsx';
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <>
      <Banner image={BannerAccueil} titre="Chez vous, partout et ailleurs"/> 
      <div className='SectionCarts'>
        {
          api.map((logement) => 
            <NavLink to={'/logement/'+logement.id+"/#"} className='lienCarts' key={logement.id}>
            <Carts key={logement.id} cover={logement.cover} title={logement.title} id={logement.id} />
            </NavLink>
        )}
      </div>
    </>
  )  
}

export default Home;

