import React, { useState, useEffect } from 'react';
import CardWrapper from './CardWrapper'
import ProjectCard from './ProjectCard'

interface Iimg {
    src: string;
    alt: string;
}

interface Iproject {
    href: string;
    img: Iimg;
    "card-title": string;
    "card-desc": string;
}

function ProjectsContent() {

    const [projects, setProjects] = useState<JSX.Element[]>()

    useEffect(() => {
        
        fetch('data/projects.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            const projectsList = myJson.map((project: Iproject) => 
                <ProjectCard 
                    key={project.href}
                    href={project.href}
                    imgSrc={project.img.src}
                    imgAlt={project.img.alt}
                    title={project['card-title']}
                    desc={project['card-desc']}
                />
            );
            setProjects(projectsList)
        });

    }, [])

    return (
        <CardWrapper 
            mainTitle={"Projects"}
            subtitle={"Click on a card to be sent to a project related page"}
        >
            {projects}
        </CardWrapper>
    );
}

export default ProjectsContent;