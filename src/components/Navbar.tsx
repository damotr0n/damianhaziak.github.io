import React from 'react';
import NavbarListItem from './NavbarListItem';

function Navbar(props: {menuItems: string[], callback: any}){

    var menu = props.menuItems.map(name => <NavbarListItem title={name} callback={props.callback}/> );

    return(
        <div id="navbar">
            <div id="navbar-ul-wrapper">
                <ul id="navbar-item-wrapper" className="topnav">
                    {menu}
                </ul>
                <a>
                    <span className="material-icons" id="navbar-menu">menu</span>
                </a>
            </div>  
        </div>
    );
}

export default Navbar;