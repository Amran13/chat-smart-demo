import React from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <NavLink to='/' className={({ isActive}) => isActive ? "active"  : ""}> Home </NavLink>
            <NavLink to='/login' className={({ isActive}) => isActive ? "active"  : ""}> Login </NavLink>
            <NavLink to='/signup' className={({ isActive}) => isActive ? "active"  : ""}> Signup </NavLink>
        </div>
    );
};

export default Header;