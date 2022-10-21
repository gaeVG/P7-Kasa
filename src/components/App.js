import logo from '../logo.svg';
import '../App.css';
import {Header} from './Header.jsx';
import {Banner} from './Banner.jsx';
import {carts} from './carts.jsx';

function App() {
  return (
    <><Header /><Banner  titre="Chez vous, partout et ailleurs"/><carts /></>
  );
  
}

export default App;

