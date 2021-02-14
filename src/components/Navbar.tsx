import React from 'react';
import NavbarListItem from './NavbarListItem';

function Navbar(props: {menuItems: string[] }){

    // let menuItems = [
    //     {title: "Home"},
    //     {title: "Projects"},
    //     {title: "Contact"}
    // ];

    var menu = props.menuItems.map(name => <NavbarListItem title={name}/> );

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