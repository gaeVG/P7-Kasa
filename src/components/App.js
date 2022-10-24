import '../App.css';
import BannerAccueil from '../assets/Bannermontain.png'
import api from '../API/data.json';
import {Header} from './Header.jsx';
import {Banner} from './Banner.jsx';
import {Carts} from './carts.jsx';

function App() {
  return (
    <>
    <Header />
    <Banner image={BannerAccueil} titre="Chez vous, partout et ailleurs"/> 
    <div className='logement'>
      {api.map((logement) => <a href='#' key={logement.id}><Carts key={logement.id} cover={logement.cover} title={logement.title} id={logement.id} /></a>)}
    </div>
    </>
  );
  
}

export default App;

