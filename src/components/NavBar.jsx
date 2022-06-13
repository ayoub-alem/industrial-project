import React from "react";
import { NavLink } from "react-router-dom";
import './../css/NavBar.css'

const NavBar = () => {

    return (<nav className="navbar">
        <li><NavLink to='/'>Zone Process</NavLink></li>
        <li><NavLink to='/zone-pack'>Zone Packs</NavLink></li>
        <li><NavLink to='/controle-manuel'>Controle Manuel</NavLink></li>
        <li><NavLink to='/bacs'>Historique des bacs</NavLink></li>
        <li><NavLink to='/emplacements'>Historique des emplacements</NavLink></li>
    </nav>)
}

export default NavBar