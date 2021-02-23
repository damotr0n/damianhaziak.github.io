import React from 'react';
import {BigHead} from '@bigheads/core';

function HomeContent(){
    return(
        <>
            <h1 className="fall-down-animation">Damian Haziak</h1>
            <p className="fall-down-animation">Graduate Developer and Consultant looking for jobs in web development.</p>
            <div id="home-image" className="fall-down-animation">
                <BigHead
                    accessory="shades"
                    body="chest"
                    circleColor="blue"
                    clothing="shirt"
                    clothingColor="white"
                    eyebrows="raised"
                    eyes="happy"
                    faceMask={false}
                    faceMaskColor="red"
                    facialHair="none3"
                    graphic="react"
                    hair="short"
                    hairColor="black"
                    hat="none"
                    hatColor="red"
                    lashes
                    lipColor="pink"
                    mask
                    mouth="openSmile"
                    skinTone="light"
                />
            </div>
        </>
    );
}

export default HomeContent;