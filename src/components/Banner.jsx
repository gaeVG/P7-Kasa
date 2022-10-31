import '../styles/Banner.css'


export function Banner ({image, titre}) {
    return (
       
            <div className="backgroundimage">
                <img src={image} alt='image banniere accueil' className='imageBanniereAccueil' />    
                <h1 className='title-banner-montain'>{titre}</h1>
                <h1 className='title-banner-montain--mobile'>Chez vous,<br/> partout et ailleurs</h1>
            </div>  
        
        
    )
}


