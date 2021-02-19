import React from 'react';

function HomeContent(){
    return(
        <>
            <h1>Damian Haziak</h1>
            <p>Graduate Developer and Consultant looking for jobs in web development.</p>
            <div id="home-image">
                <span className="material-icons front-page-icon" id="desktop-windows">desktop_windows</span>
                <span className="material-icons front-page-icon" id="keyboard">keyboard</span>
                <span className="material-icons front-page-icon" id="design-services">design_services</span>
            </div>
        </>
    );
}

export default HomeContent;