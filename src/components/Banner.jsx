import '../styles/Banner.css'


export function Banner ({image, titre}) {
    return (
             <div className="backgroundimage">
                <img src={image} alt='image banniere accueil' className='imageBanniereAccueil' />    
                <h1 className='lmj-title-banner-montain'>{titre}</h1>   
            </div>  
        
    )
}