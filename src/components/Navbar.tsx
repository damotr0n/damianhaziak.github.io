import React, { useState } from 'react';
import NavbarListItem from './NavbarListItem';
import { Squash as Hamburger } from 'hamburger-react'

function Navbar(props: {menuItems: string[], callback: any}){

    const TOPNAV_CLASS_CLOSED = "topnav";
    const TOPNAV_CLASS_RESPONSIVE = "topnav responsive";

    const NAVBAR_CLASS_CLOSED = "";
    const NAVBAR_CLASS_OPEN = "mobile-open";
    
    const [isOpen, setOpen] = useState(false);
    const [navbarClass, setNavbarClass] = useState(NAVBAR_CLASS_CLOSED);
    const [topnavClass, setTopnavClass] = useState(TOPNAV_CLASS_CLOSED);
    
    const toggleNavbar = () => {
        if(isOpen){
            setOpen(false)
            setNavbarClass(NAVBAR_CLASS_CLOSED)
            setTopnavClass(TOPNAV_CLASS_CLOSED)
        } else {
            setOpen(true)
            setNavbarClass(NAVBAR_CLASS_OPEN)
            setTopnavClass(TOPNAV_CLASS_RESPONSIVE)
        }
    }

    // have to pass in a string, the title of the page to work with search
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
        <div id="navbar" className={navbarClass}>
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