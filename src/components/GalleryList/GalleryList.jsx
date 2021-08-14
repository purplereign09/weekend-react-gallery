import GalleryItems from '../GalleryItem/GalleryItem';
function GalleryList ({props}) {

    console.log('in list props', props);
    return (
        <ul>
            {
                galleryItems [props]=
                props.list.map(gallery => (
                    <galleryItem key={gallery.id} item={gallery}
                    updateLikes={updateLikes}/>
                ))

            }
       
        </ul>
            

    );

}

export default GalleryList;