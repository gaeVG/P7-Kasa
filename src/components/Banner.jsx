import '../styles/Banner.css'
import imageAccueil from '../assets/Bannermontain.png';


export function Banner (banniere) {
    const titre = banniere.titre
    return (
             <div className="backgroundimage">
                <img src={imageAccueil} alt='image banniere accueil' className='imageBanniereAccueil' />    
                <h1 className='lmj-title-banner-montain'>{titre}</h1>   
            </div>  
        
    )
}