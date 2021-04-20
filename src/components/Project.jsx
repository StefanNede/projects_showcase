import React, {useState} from 'react';
import ImageSlider from "./ImageSlider";
import "../styles/Project.css";

export default function Project({project}){
    return (
        <div className="projects-container">
            <div className="project-container">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <ImageSlider images={project.images}/>
            </div>
        </div>
    )
}