import React from 'react';

type NavbarItemProps = {title: string, callback: any};

function NavbarListItem(props: NavbarItemProps){
    return(
        <li><a className="navbar-item" href="#" onClick={() => props.callback(props.title)}>{props.title}</a></li>
    );
}

export default NavbarListItem