import React from 'react';
import { useState } from "react";
import GalleryDescription from '../GalleryDescription/GalleryDescription';
import GalleryImage from '../GalleryImage/GalleryImage';

const GalleryItem = ({item, setLikes}) => {

    //use arrow functions!
    let showDescription = () => {

        //image description was requested; set default to 'false.'
        setDisplayImage(false);

        //this transitions the image on a time count so it's not 'glitchy'
        setTimeout(() => {
            setDisplayImage(true);
        }, 2000);
    }

    let [displayImage, setDisplayImage] = useState(true);

    if(displayImage) {
        return (
            <div>
                <GalleryImage
                    item = {item}
                    showDescription = {showDescription}
                />
                <button onClick={ () => setLikes(item.id)}>Like</button>
                <p>{item.likes}</p>
            </div>
        )
    }

    //'else' condition is reached
    return (
        <div>
            <GalleryDescription
                item = {item}
            />
            <button onClick={ () => setLikes(item.id)}>Like</button>
            <p>{item.likes}</p>
        </div>
       
    )
}

export default GalleryItem;