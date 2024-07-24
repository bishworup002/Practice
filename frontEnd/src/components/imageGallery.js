import React from 'react';

// Assuming images are in the public/images/ directory
import hotel1 from './image/hotel1.jpg';
import hotel2 from './image/hotel2.jpg';
import hotel3 from './image/hotel3.jpg';
import hotel4 from './image/hotel4.jpg';
import hotel5 from './image/hotel5.jpg';
import showAllIcon from './image/showAll.png';

function ImageGallery() {
  const openModalImage = (index) => {
    // Implement your modal logic here
    console.log(`Opening modal for image ${index}`);
  };

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={hotel1} alt="image" />
      </div>

      <div className="small-images">
        <div className="small-image">
          <img src={hotel2} alt="image" />
        </div>
        <div className="small-image">
          <img src={hotel3} alt="image" />
        </div>
        <div className="small-image">
          <img src={hotel4} alt="image" />
        </div>
        <div className="small-image">
          <img src={hotel5} alt="image" />
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <button className="show-all" onClick={() => openModalImage(0)}>
          <img src={showAllIcon} alt="Show All" /> Show all photos
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
