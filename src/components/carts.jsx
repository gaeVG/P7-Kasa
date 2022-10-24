import '../styles/carts.css'


export function Carts({id, cover, title}) {
    return (
        <div className='logement' id={id} >
        <img src={cover}></img>
        <p> {title} </p> 
        </div>
    )

}