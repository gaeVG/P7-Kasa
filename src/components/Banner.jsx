import '../styles/Banner.css'

export function Banner (banniere) {
    const titre = banniere.titre
    return (
             <div className="backgroundimage">
                   <h1 className='lmj-title-banner-montain'>{titre}</h1>
            </div>  
        
    )
}