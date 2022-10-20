import logo from '../assets/logo.png'
import '../styles/Header.css'

export function Header() {
    const onglet = 'accueil'
    const onglet2 = 'A propos'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='logo KASA' className='lmj-logo' />
            <div  className='onglet'>
                <h1 className='lmj-title'>{onglet}</h1>
                <h1 className='lmj-title'>{onglet2}</h1>
            </div>
        </div>
    )
}

