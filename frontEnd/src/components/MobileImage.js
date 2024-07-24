import React, { useState } from 'react';

const images = [
  "image/hotel1.jpg", "image/hotel2.jpg", "image/hotel3.jpg", "image/hotel4.jpg", "image/hotel5.jpg",
  "image/hotel6.jpg", "image/hotel7.jpg", "image/hotel8.jpg", "image/hotel9.jpg", "image/hotel10.jpg",
  "image/hotel11.jpg"
];

function MobileImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeMobileImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openImageModal = () => {
    // Open the ImageModal
  };

  return (
    <div className="mobile-image">
      <div className="mobile-image-icon-bar">
        <div>
          <img
            src="image/arrow.png"
            alt="Menu"
            className="mobile-image-icon"
            onClick={changeMobileImage}
          />
        </div>
        <div>
          <img
            src="image/share.png"
            alt="Menu"
            className="mobile-image-icon btn-share-mobile"
          />
          <img
            src="image/love.png"
            alt="Menu"
            className="mobile-image-icon btn-save-mobile"
          />
        </div>
      </div>
      <div className="mobile-main-image">
        <img
          src={images[currentIndex]}
          alt="image"
          id="mobile-main-image-id"
          onClick={openImageModal}
        />
      </div>
      <div style={{ position: "relative" }}>
        <button className="show-all" onClick={openImageModal}>
          <img src="image/showAll.png" alt="Show all" /> Show all photos
        </button>
      </div>
    </div>
  );
}

export default MobileImage;