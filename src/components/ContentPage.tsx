import React from 'react';

function ContentPage(props: {id: string, content: JSX.Element}){
    return(
        <div id={props.id} className="content">
            {props.content}
        </div>
    );
}

export default ContentPage;