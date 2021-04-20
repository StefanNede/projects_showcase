import React, {useState} from 'react';
import "../styles/ImageSlider.css";

export default function ImageSlider({images}){
    // stores the index of the current image the person is viewing on the slider
    const [currentImage, setCurrentImage] = useState(0);
    const left = "<";
    const right = ">";
    // move to the next image
    function moveForward(){
        setCurrentImage((currentImage+1)%images.length)
    }
    // move to the previous image
    function moveBackward(){
        let newImage = currentImage-1;
        if (newImage < 0){
            newImage = images.length -1;
        } 
        setCurrentImage(newImage)
    }
    return (
        <div className="image-slider">
            <button onClick={moveBackward}>{left}</button>
            <img src={images[currentImage]} alt="project-image" width="400vw" />
            <button onClick={moveForward}>{right}</button>
        </div>
    )
}