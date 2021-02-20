
function ContactCard(props: {
    href: string,
    svg_path: string,
    view_box: string,
    card_title: string
}){
    return (
        <a className="contact-card-container-anchor" href={props.href} target="_blank" rel="noreferrer">
            <div className="card-contact">
                <svg enableBackground={"new " + props.view_box} height="512" viewBox={props.view_box} width="512" xmlns="http://www.w3.org/2000/svg"><path d={props.svg_path}/></svg>
                <h3 className="card-title">{props.card_title}</h3>
            </div>
        </a>
    )
}

export default ContactCard