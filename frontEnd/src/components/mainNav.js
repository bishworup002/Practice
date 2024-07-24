import React from 'react';

// Assuming images are in the public/images/ directory
import shareIcon from './image/share.png';
import loveIcon from './image/love.png';

function MainNav() {
  return (
    <div className="main-nav">
      <div>
        <h1>Comfy New Apt. in Pueblo Libre!</h1>
      </div>

      <div className="buttons-container">
        <button className="button1 btn-share">
          <img src={shareIcon} alt="Share" className="icon" />
          Share
        </button>

        <button className="button1 btn-save">
          <img src={loveIcon} alt="Save" className="icon" />
          <span style={{ marginBottom: '2px' }}>Save</span>
        </button>
      </div>
    </div>
  );
}

export default MainNav;
