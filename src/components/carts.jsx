import '../styles/Carts.css'


export function Carts({id, cover, title}) {
    return (
        <div className='logements' id={id} >
            <img src={cover} alt ="image carte accueil" className='imageCarts'></img>
            <p className='tittleCarts'> {title} </p> 
        </div>   
    )

}