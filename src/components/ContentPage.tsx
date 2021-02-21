import { useState } from 'react';
import { Transition } from 'react-transition-group';

//TODO: change content to children
function ContentPage(props: {
    id: string, 
    content: JSX.Element,
    inProp: boolean
}){

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
        unmounted: { opacity: 0 }
    }

    return(
        <Transition in={props.inProp} timeout={500} unmountOnExit={true}>
            {state => (
                <div 
                    style={transitionStyles[state]}
                    id={props.id} 
                    className="content"
                >
                    {props.content}
                </div>
            )}
        </Transition>
    );
}

export default ContentPage;