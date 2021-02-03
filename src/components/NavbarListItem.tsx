import React from 'react';

type NavbarItemProps = {title: string};

function NavbarListItem(props: NavbarItemProps){
    return(
        <li><a className="navbar-item">{props.title}</a></li>
    );
}

export default NavbarListItem