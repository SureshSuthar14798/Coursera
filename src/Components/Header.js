import {NavLink} from "react-router-dom";
import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../images/logo.svg'
import { useState } from "react";

const Header = () => {
    const [menus, setmenus] = useState(false)
    const[header, headerchange] = useState(true);
    const menu_open = () => {
        setmenus(!menus);
        var x = window.matchMedia("(max-width: 767px)")
        if (x.matches){
            if(menus){ document.getElementById("main_html").classList.remove('scroll'); }
            else{ document.getElementById("main_html").classList.add('scroll'); }
        }
    }
    let scrolltop = window.document.documentElement.scrollTop;
    const HeaderChange = () => {
        if(scrolltop){
            headerchange(false);
        }else{
            headerchange(true);
        }
    }
    return (
        <>
            <div className="header_wrapper">
                <Container>
                    <div className="header">
                        <div className="logo">
                            <NavLink to="/Suresh/Coursera/">
                                <img src={logo} alt="logo" />
                                <span> Coursera </span>
                            </NavLink>
                        </div>
                        <div className={`all_menus ${menus ? 'menus_open' : 'menus_close'} `}>
                            <ul>
                                <li> <NavLink onClick={menu_open} to="/Suresh/Coursera/">Home</NavLink> </li>
                                <li> <NavLink onClick={menu_open} to="Suresh/Coursera/Category">Category</NavLink> </li>
                                <li> <NavLink onClick={menu_open} to="Suresh/Coursera/Contact">Contact</NavLink> </li>
                                <li> <NavLink onClick={menu_open} to="Suresh/Coursera/Feedback">Feedback</NavLink> </li>
                            </ul>
                        </div>
                        <div className="menu_icon" onClick={menu_open}>
                            <div className={`humberguer ${menus ? 'icon_change' : 'icon' } `}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header