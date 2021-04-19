import React, {useState} from 'react';
import Project from "../components/Project";

export default function Web(){
    const quizAppPhotos = [1,2,3];
    const projects = [{
        title: "first project",
        description: "first description",
        images: quizAppPhotos
    },{
        title: "second project",
        description: "second description",
        images: quizAppPhotos
    }]
    return (
        <div className="container">
            <h1>Web Projects</h1>
            {projects.map((project, index) => {
                return <Project project={project} key={index} />
            })}
        </div>
    )
}