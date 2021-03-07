import React, { useState } from 'react';
import NavbarListItem from './NavbarListItem';
import { Squash as Hamburger } from 'hamburger-react'

function Navbar(props: {menuItems: string[], callback: any}){

    var menu = props.menuItems.map(name => <NavbarListItem title={name} callback={props.callback}/> );
    
    const [isOpen, setOpen] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState({height: "6vh"});

    const toggleNavbar = () => {
        if(isOpen){
            setOpen(false)
            setNavbarHeight({ height: "6vh" })
        } else {
            setOpen(true)
            setNavbarHeight({ height: "100vh"})
        }
    }

    return(
        <div id="navbar" style={navbarHeight}>
            <div id="navbar-ul-wrapper">
                <ul id="navbar-item-wrapper" className="topnav">
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