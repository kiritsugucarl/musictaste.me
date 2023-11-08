import React, { useState } from 'react';
import axios from 'axios';
import './musicCollage.css'

function App() {
  const [collageUrl, setCollageUrl] = useState('');

  const generateCollage = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.get('http://127.0.0.1:5000/music_collage', {
        method: 'GET',
        headers: headers,
        responseType: 'blob',
      });

      if (response.status === 200) {
        const url = URL.createObjectURL(new Blob([response.data]));
        setCollageUrl(url);
      }
      
    } catch (error) {
      console.error('Error generating collage:', error);
    }
  };

  return (
    <div className="container-collage">
      <div className="main-container-collage">
        <h1>Music Collage Generator</h1>
        <button className='image-button' onClick={generateCollage}>Generate Collage</button>
        {collageUrl && (
          <div className='image-results'>
            <img className='results' src={collageUrl} alt="Music Collage" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;