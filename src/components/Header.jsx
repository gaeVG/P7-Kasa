import logo from '../assets/logo.png'
import '../styles/Header.css'

export function Header() {
    const onglet = 'Accueil'
    const onglet2 = 'A Propos'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='logo KASA' className='lmj-logo' />
            <ul  className='lienMenu'>
                <li className='lmj-title'><a href="#">{onglet}</a></li>
                <li className='lmj-title'><a href="#">{onglet2}</a></li>
            </ul>
        </div>
    )
}

