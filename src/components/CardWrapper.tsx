import React from 'react';

function CardWrapper(props: {
    mainTitle: string, 
    subtitle: string, 
    children?: JSX.Element | JSX.Element[]}) 
    {
    return(
        <>
            <h2 className="main-title">{props.mainTitle}</h2>
            <p className="subtitle">{props.subtitle}</p>
            <div className="card-container">
                {props.children}
            </div>
        </>
    )
}

export default CardWrapper;