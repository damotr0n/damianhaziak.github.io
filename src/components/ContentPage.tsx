import { Fade } from 'react-awesome-reveal';

//TODO: change content to children
function ContentPage(props: {id: string, content: JSX.Element}){

    return(
        <Fade>
            <div id={props.id} className="content">
                {props.content}
            </div>
        </Fade>
    );
}

export default ContentPage;