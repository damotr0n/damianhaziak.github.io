import React, { useState } from 'react';
import NavbarListItem from './NavbarListItem';
import { Squash as Hamburger } from 'hamburger-react'

function Navbar(props: {menuItems: string[], callback: any}){

    const TOPNAV_CLASS_CLOSED = "topnav";
    const TOPNAV_CLASS_RESPONSIVE = "topnav responsive";
    
    const [isOpen, setOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState({height: "6vh"});
    const [topnavClass, setTopnavClass] = useState(TOPNAV_CLASS_CLOSED);
    
    const toggleNavbar = () => {
        if(isOpen){
            setOpen(false)
            setNavbarHeight({ height: "6vh" })
            setTopnavClass(TOPNAV_CLASS_CLOSED)
        } else {
            setOpen(true)
            setNavbarHeight({ height: "100vh"})
            setTopnavClass(TOPNAV_CLASS_RESPONSIVE)
        }
    }

    const navbarItemCallback = (title: string) => {
        props.callback(title)
        toggleNavbar()
    }

    var menu = props.menuItems.map(name => 
        <NavbarListItem 
            title={name} 
            callback={navbarItemCallback}
        /> 
    );
    
    return(
        <div id="navbar" style={navbarHeight}>
            <div id="navbar-ul-wrapper">
                <ul id="navbar-item-wrapper" className={topnavClass}>
                    {menu}
                </ul>
                <Hamburger 
                    toggled={isOpen} 
                    toggle={toggleNavbar}
                    color={'#fff'}
                />
            </div>  
        </div>
    );
}

export default Navbar;