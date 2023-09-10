import React, { useState } from 'react'
import { NavLink, useLocation} from "react-router-dom"
import { useTranslation } from 'react-i18next'

import "./NavBar.css"


const NavBar = () => {
    const location = useLocation();
    const [t] = useTranslation("global")






  return (
    <nav>
        <ul>
        <li>
                <NavLink to="/" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.home")}
            </NavLink>
                </li>
            <li>
                <NavLink to="/about" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.about")}
            </NavLink>
                </li>
                <li>
                <NavLink to="/skills" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.skills")}
            </NavLink>
                </li>
                <li>
                <NavLink to="/portfolio" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.portfolio")}
            </NavLink>
                </li>
                <li>
                <NavLink to="/contact" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.contact")}
            </NavLink>
                </li>
                <li>
                <NavLink to="/settings" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.settings")}
            </NavLink>
                </li>
        </ul>
    </nav>
  )
}

export default NavBar