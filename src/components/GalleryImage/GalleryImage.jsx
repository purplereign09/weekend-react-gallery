import React from 'react';

const GalleryImage = ({item, showDescription}) => {
    return (
        <div>
            <img className="Display" onClick={ () => {
                showDescription();
            }} src={item.path}/>
        </div>
    )
}

export default GalleryImage;