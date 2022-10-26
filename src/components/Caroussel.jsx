import '../styles/Caroussel.css'


export function Caroussel ({pictures, id}) {
    return (
            <div className="carousel" id={id}>
                <img src={pictures} alt='image caroussel logement' className='imageCarousselLogement' />       
            </div>  
        
    )
}