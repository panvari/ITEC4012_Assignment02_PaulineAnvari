import PropTypes from "prop-types";
import "./styles.css";
import logo from './logo.png';
import avatar from './avatar.png';

import {
    NavLink
} from 'react-router-dom';

import {GoTriangleDown} from 'react-icons/go';
import {IoMdNotifications} from 'react-icons/io';
import {FaSearch} from 'react-icons/fa';

export const Navbar = (props) => {
    return (
        //return header navigation bar with logo, menu items, and addition actions
        <nav className="navbar">
            <ul className="navbar-list"> {/*list of all items in nav bar*/}
                <img src={logo} alt="Logo" className="logo"/> {/*display netflix logo on nav bar*/}
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        {props.item1} {/*set first item to item1 prop*/}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item2} {/*set second item to item2 prop*/}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item3} {/*set third item to item3 prop*/}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item4} {/*set fourth item to item4 prop*/}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item5} {/*set fifth item ot item5 prop*/}
                    </NavLink>
                </li>
                <li className="search">
                    <FaSearch className="search-icon"/> {/*icon button for search*/}
                </li>
                <li className="notif">
                    <IoMdNotifications className="notif-icon"/> {/*icon button for notifications*/}
                </li>
                <li className="account">
                    <img src={avatar} alt="Avatar" className="avatar"/> {/*profile picture*/}
                    <GoTriangleDown className="expand-icon"/> {/*drop down icon button*/}
                </li>
                <li className="sign-out-link">
                    <NavLink to="/sign-in"> {/*sign out button that routes to sign in page*/}
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    item1: PropTypes.string.isRequired, //first menu item prop
    item2: PropTypes.string, //second menu item prop
    item3: PropTypes.string, //third menu item prop
    item4: PropTypes.string, //fourth menu item prop
    item5: PropTypes.string //fifth menu item prop
}