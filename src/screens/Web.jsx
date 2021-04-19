import React, {useState} from 'react';
import Project from "../components/Project";
import quizAppLanding from "../images/web/quizapp/landing.png";
import quizAppQuestion from "../images/web/quizapp/question.png";
import quizAppResult from "../images/web/quizapp/result.png";
import colorPickerMain from "../images/web/colorpicker.png";

export default function Web(){
    const quizAppPhotos = [quizAppLanding, quizAppQuestion, quizAppResult];
    const colorPickerPhotos = [colorPickerMain];

    const projects = [{
        title: "Quiz App",
        description: "Basic quiz app...",
        images: quizAppPhotos
    },{
        title: "Colour Picker",
        description: "App to give you a colour palette...",
        images: colorPickerPhotos
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