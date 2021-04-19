import React, {useState} from 'react';
import ImageSlider from "./ImageSlider";

export default function Project({project}){
    return (
        <div>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <ImageSlider images={project.images}/>
        </div>
    )
}