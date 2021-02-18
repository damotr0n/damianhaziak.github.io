
function ProjectCard(props: {
    href: string,
    imgSrc: string,
    imgAlt: string,
    title: string,
    desc: string
}){
    return(
        <a href={props.href} target="_blank">
            <div className="card">
                <img className="card-img" src={props.imgSrc} alt={props.imgAlt} />
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.desc}</p>
            </div>
        </a>
    )
}

export default ProjectCard