import React from 'react';

// TODO: finish
function ProjectsContent() {
    return (
        <>
            <h2 className="main-title">Projects</h2>
            <p className="subtitle">Click a card to be sent to a project related page.</p>
            <div className="card-container">

                <a href="https://github.com/DamianHaziak/Analysis-of-computer-music" target="_blank">
                    <div className="card">
                        <img className="card-img" src="images/des-general_structure.png" alt="Analysis of Comp Mus" />
                        <h3 className="card-title"> Analysis of computer music using machine learning models </h3>
                        <p className="card-description">My final year dissertation project. Created a software synthesizer analysis tool that extracts features from sound created by the synthesizer.</p>
                    </div>
                </a>

            </div>
        </>
    );
}

export default ProjectsContent;