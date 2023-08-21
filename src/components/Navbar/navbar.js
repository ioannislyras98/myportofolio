import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import cantacImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portofolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={cantacImg} className="desktopMenuImg" />Contact me
            </button>
        </nav>
    )
}

export default Navbar;