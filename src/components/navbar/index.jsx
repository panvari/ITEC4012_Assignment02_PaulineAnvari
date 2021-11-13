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
        <nav className="navbar">
            <ul className="navbar-list">
                <img src={logo} alt="Logo" className="logo"/>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        {props.item1}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item2}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item3}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item4}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {props.item5}
                    </NavLink>
                </li>
                <li className="search">
                    <FaSearch className="search-icon"/>
                </li>
                <li className="notif">
                    <IoMdNotifications className="notif-icon"/>
                </li>
                <li className="account">
                    <img src={avatar} alt="Avatar" className="avatar"/>
                    <GoTriangleDown className="expand-icon"/>
                </li>
                <li className="sign-out-link">
                    <NavLink to="/sign-in">
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    item1: PropTypes.string.isRequired, 
    item2: PropTypes.string,
    item3: PropTypes.string,
    item4: PropTypes.string,
    item5: PropTypes.string
}