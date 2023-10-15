import logo from "../img/atom.png";
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div>
                <a className="logo"><img src={logo} alt="" /></a>
            </div>
            <ul className="liens">
                <li>
                    <NavLink className="lien" to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink className="lien btn-article" to="/new">Créer un article</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default NavBar;