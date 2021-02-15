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

                <a href="https://github.com/DamianHaziak/ray-tracing" target="_blank">
                    <div className="card">
                        <img className="card-img"  src="images/IMGPM.png" alt="Ray Tracing Example" />
                        <h3 className="card-title"> Ray Tracing </h3>
                        <p className="card-description">Project where I got to implement a ray tracing based renderer including: photon mapping, reflection, refraction, and diffusion. The image above is an example of a rendered image.</p>
                    </div>
                </a>

                <a href="https://github.com/DamianHaziak/damianhaziak.github.io" target="_blank">
                    <div className="card">
                        <img className="card-img" src="images/personal-portfolio.png" alt="personal portfolio" />
                        <h3 className="card-title">Personal Portfolio webpage</h3>
                        <p className="card-description">
                            This webpage, created in my spare time.
                        </p>
                    </div>
                </a>

                <a href="https://github.com/DamianHaziak/WebGLObjectSandbox" target="_blank">
                    <div className="card">
                        <img className="card-img" src="images/WebGL.png" alt="WebGL render of a Rubik's cube" />
                        <h3 className="card-title">WebGL Object Sandbox</h3>
                        <p className="card-description">
                            A university coursework project that uses <code>three.js</code> to render and view some objects.
                        </p>
                    </div>
                </a>

                <a href="https://codepen.io/collection/AyGOzb" target="_blank">
                    <div className="card">
                        <img className="card-img" src="images/fcc-reswebdes.png" alt="responsive web design project collection" />
                        <h3 className="card-title">Responsive Web Design Certification</h3>
                        <p className="card-description">
                            A series of small projects created to obtain the Responsive Web Design Certification from FreeCodeCamp.
                        </p>
                    </div>
                </a>

                <a href="https://codepen.io/collection/Dommge" target="_blank">
                    <div className="card">
                        <img className="card-img" src="images/fcc-frontenddev.png" alt="WebGL render of a Rubik's cube" />
                        <h3 className="card-title">Front End Libraries Certification</h3>
                        <p className="card-description">
                            A series of small projects, created using React, to obtain the Front End Development Certification from FreeCodeCamp.
                        </p>
                    </div>
                </a>

                <a href="https://github.com/DamianHaziak/Covid19-UK-Dashboard" target="_blank">
                    <div className="card">
                        <img className="card-img" src="images/UKCOV19.png" alt="WebGL render of a Rubik's cube" />
                        <h3 className="card-title">UK COVID-19 current cases as percentage of cases</h3>
                        <p className="card-description">
                            Small curiosity project to visualize the percentage of COVID-19 cases in the UK as a percentage of all the tests done.
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ProjectsContent;