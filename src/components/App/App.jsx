import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//importing the main list
import GalleryList from '../GalleryList/GalleryList';



//use arrow functions!
let App = () => {

    let[gallery, setGallery] = useState([]);
    

  //code runs on page load
  useEffect(() => {
    
    getGalleryItems();
     
  },[])  
   
  //getting gallery items from array  
  let getGalleryItems = () => {
  axios.get('/gallery')
      .then(response => {
            console.log('these are my gallery items:', (response.data));
            console.log('Get /images response', response.data)
            setGallery(response.data);
        })
        .catch(error => {
            console.log('Get /gallery error', error)
        })
  }//end GET} 
    
  let setLikes = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        getGalleryItems();
          console.log( 'PUT likes for image successfully');
        }).catch(error => {
            console.log('Failed to PUT:', error);
        })
      }
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photoshop Work</h1>
        </header>
        <GalleryList 
          gallery={gallery}
          setLikes={setLikes}
        />
      </div>
    );
    
  }


export default App;
