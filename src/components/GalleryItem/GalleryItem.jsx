import { useState } from "react";


function GalleryItem({image}) {
    
let[galleryItem, setGalleryItem] = useState()
[image, setImage] = useState('0');
[description, setDescription] = useState('evt.target. value');


    {props.item}
    {props.path}
    {props.description} 
    {props.updateLikes(props.item.id)}


    //if clicked, toggle to and from description and image
//
function showImageOrDescription(event){





}
}

export default GalleryItem;