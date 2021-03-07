import React, { useState } from 'react';
import NavbarListItem from './NavbarListItem';
import { Squash as Hamburger } from 'hamburger-react'

function Navbar(props: {menuItems: string[], callback: any}){

    var menu = props.menuItems.map(name => <NavbarListItem title={name} callback={props.callback}/> );
    const [isOpen, setOpen] = useState(false);

    return(
        <div id="navbar">
            <div id="navbar-ul-wrapper">
                <ul id="navbar-item-wrapper" className="topnav">
                    {menu}
                </ul>
                <Hamburger 
                    toggled={isOpen} 
                    toggle={setOpen} 
                    color={'#fff'}
                />
            </div>  
        </div>
    );
}

export default Navbar;