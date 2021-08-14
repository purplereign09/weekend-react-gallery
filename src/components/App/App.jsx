import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';






function App() {

    let[galleryList, setGalleryList] = useState()
    

  //code runs on page load
  useEffect(() => {

    
    
    getGalleryItems();
    imageLikeCount();
    
  },[])  
   
    
  function getGalleryItems(){

  axios.get('/images').then(response => {
            console.log('these are my gallery items:', (response.data));
            console.log('Get /images response', response.data)
            galleryItems(response.data);

        })
        .catch(error => {
            console.log('Get /list error', error)
        })
    ;//end GET
  } 
    
  function imageLikeCount(){
    axios.put('/like/:id').then(response => {
          console.log( 'PUT likes for image successfully');
        }).catch(error => {
            console.log('Failed to PUT:', error);
          alert('Failed to PUT. See console for details.')
        })
      }
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photoshop Work</h1>
        </header>
         <div className="container">
        <GalleryList 
          galleryList={galleryList}
        />
        <div className="card">
        
       
       </div>
       </div>
      </div>
    );
    
    }


export default App;
