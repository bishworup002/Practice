import React, { useState, useEffect } from "react";
import MainNav from "./mainNav";
import hotel1 from "./image/hotel1.jpg";
import hotel2 from "./image/hotel2.jpg";
import hotel3 from "./image/hotel3.jpg";
import hotel4 from "./image/hotel4.jpg";
import hotel5 from "./image/hotel5.jpg";
import showAllIcon from "./image/showAll.png";
import arrow from "./image/arrow.png";
import share from "./image/share.png";
import love from "./image/love.png";

function ImageGallery() {

  
  const openModalImage = (index) => {
    // Implement your modal logic here
    console.log(`Opening modal for image ${index}`);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {

 // Load saved state from localStorage
 const savedState = localStorage.getItem('isSaved') === 'true';
 setIsSaved(savedState);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
     
  }, []);

  const handleSaveToggle = () => {
    setIsSaved(prevState => {
      const newState = !prevState;
      localStorage.setItem('isSaved', newState);
      return newState;
    });
  };

  return (
    <div style={{ position: "relative" }}>
     
      {isSmallScreen && (
        <div className="mobile-image-icon-bar">
          <div>
            <img
              src={arrow}
              alt="Menu"
              className="mobile-image-icon"
              // onClick={changeMobileImage} // React event handler
            />
          </div>

          <div>
            <img
              src={share}
              alt="Share"
              className="mobile-image-icon btn-share-mobile"
            />
            <img
              src={love}
              alt="Save"
              className={`mobile-image-icon btn-save-mobile ${isSaved ? 'active' : ''}`}
              onClick={handleSaveToggle}
            />
          </div>
        </div>
      )}

      {!isSmallScreen && <MainNav />}


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

        <div style={{ position: "relative" }}>
          <button className="show-all" onClick={() => openModalImage(0)}>
            <img src={showAllIcon} alt="Show All" />{" "}
            <span>Show all photos</span>
          </button>
        </div>
      </div>

      <div
        style={{
          display: isSmallScreen ? "block" : "none",
          marginBottom: "-3rem",
        }}
      >
        <h1>Comfy New Apt. in Pueblo Libre!</h1>
      </div>


    </div>
  );
}

export default ImageGallery;
