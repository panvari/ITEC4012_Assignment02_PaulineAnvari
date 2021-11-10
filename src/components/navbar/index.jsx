import "./styles.css";
import logo from './logo.png';
import avatar from './avatar.png';

import {
    NavLink
} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <img src={logo} alt="Logo" className="logo"/>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        TV Shows
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        New &amp; Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        My List
                    </NavLink>
                </li>
                <img src={avatar} alt="Avatar" className="avatar"/>
            </ul>
        </nav>
    );
}