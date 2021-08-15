import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


const GalleryList = ({ gallery, setLikes}) => {


    return (
        <ul>
            {gallery.map ((item => (
                <GalleryItem
                key = {item.id}
                item = {item}
                setLikes = {setLikes}
                />
            )))}

       
        </ul>
    )

}

export default GalleryList;