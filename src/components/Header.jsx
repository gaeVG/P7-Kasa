import logo from '../assets/logo.png'
import '../styles/Header.css'

export function Header() {
    return (
        <div className='banner'>
            <img src={logo} alt='logo KASA' className='lmj-logo' />
            <ul  className='lienMenu'>
                <li className='lmj-title'><a href="/">Accueil</a></li>
                <li className='lmj-title'><a href="/a-propos">A propos</a></li>
            </ul>
        </div>
    )
}

